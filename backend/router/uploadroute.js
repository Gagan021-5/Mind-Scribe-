import { Router } from "express";
import { handleImage } from "../controller/journal.js";
const journalroute = Router();
import { upload } from "../middleware/multermiddlware.js";
journalroute.post(
  "/image",
  upload.single("wordimage"),
  (req, res, next) => {
    if (!req.file) {
      return res.status(400).json({ error: "No file received" });
    }
    console.log("Multer saved file:", req.file.path);
    next();
  },
  handleImage
);


export default journalroute;
