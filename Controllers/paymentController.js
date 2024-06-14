import braintree from "braintree";
import { BraintreeGateway } from "braintree";
import { Payment } from "../Models/paymentModel.js"

const gateway = new BraintreeGateway({
  environment: braintree.Environment.Sandbox, // Use Sandbox for testing
  merchantId: process.env.BRAINTREE_MERCHANT_ID,
  publicKey: process.env.BRAINTREE_PUBLIC_KEY,
  privateKey: process.env.BRAINTREE_PRIVATE_KEY,
});

// generate Braintree client token
export const PaymentToken =  async (req, res) => {
  try {
    const token = await gateway.clientToken.generate({});
    res.json({ clientToken: token });
  } catch (error) {
    console.error('Error generating Braintree client token:', error);
    res.status(500).send('Internal Server Error');
  }
};

// handle payment processing and save details
export const createPayment =  async (req, res) => {
  const { nonce, amount } = req.body;

  try {
    const result = await gateway.transaction.sale({
      paymentMethodNonce: nonce,
      amount: amount,
      options: {
        submitForSettlement: true, // Settle funds immediately
      },
    });

    console.log(result);

    if (result.success) {
      const newPayment = new Payment({
        transactionId: result.transaction.id,
        amount: result.transaction.amount,
        paymentMethod: result.transaction.paymentInstrumentType,
        customerInfo: result.transaction.customer, // Optional: Extract customer information
        status: 'success',
      });

      await newPayment.save();

      res.json({ message: 'Payment successful!' });
    } else {
      const errorMessage = result.errors.map((error) => error.message).join(', ');
      res.status(400).json({ message: errorMessage });
      res.status(400).json(err);

    }
  }
  catch (error) {
    console.log(error);
  }
}