import { cloudinaryInstance } from "../config/cloudinary.js";
import { Court } from "../Models/courtModel.js";
import { User } from "../Models/userModel.js";

export const getCourt = async (req, res) => {
  const courtes = await Court.find();
  res.send(courtes);
};

export const createnewcourt = async (req, res) => {
  try {
    console.log("hitted");
    if (!req.file) {
      return res.send("file not visible");
    }

    cloudinaryInstance.uploader.upload(req.file.path, async (err, result) => {
      if (err) {
        console.log(err, "error");
        return res.status(500).json({ success: false, message: "Error" });
      }
      const imageUrl = result.url;
    
    const {
      name,
      location,
      type,
      address1,
      address2,
      landMark,
      pin,
      contactNumber,
      description,
    } = req.body;
    
    const createCourt = new Court({
        name,
        location,
        type,
        address1,
        address2,
        landMark,
        pin,
        contactNumber,
        description,
        courtPics: imageUrl
    })
    const newCourtCreated = await createCourt.save();
    if(!newCourtCreated){
        return res.send("Court not created");
    }
    return res.send("Court created Successfully");
  });
  } catch (error) {
    console.log(error);
  }
};
