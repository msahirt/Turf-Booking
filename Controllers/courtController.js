import { Court } from "../Models/courtModel.js";

export const createnewcourt = (req, res)=>{
    const {
        name,
        location,
        type,
        address1,
        address2,
        landMark,
        pin,
        contactNumber,
        description
    } = req.body
    const pics=req.files.map((file)=>{return{name:file.filename, type:file.mimetype}})
    Court({
        name,
        location,
        type,
        address1,
        address2,
        landMark,
        pin,
        contactNumber,
        description,
        courtPics:pics
    }).save().then((resp)=>{
        res.status(200).json({message:'Court created successfully'})
    })
    .catch((err)=>{
        console.log(err);
        res.status(500)
    })
}
