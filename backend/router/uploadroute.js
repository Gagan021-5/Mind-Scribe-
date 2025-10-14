import { Router } from "express";
import { handleImage } from "../controller/journal.js";
import { upload } from "../middleware/multermiddlware.js";

const journalroute = Router();

journalroute.use((req, res, next) => {
    console.log(`Upload route hit: ${req.method} ${req.path}`);
    next();
});

journalroute.post(
    "/image",
    upload.single("wordimage"),
    (req, res, next) => {
        if (!req.file) {
            return res.status(400).json({ 
                success: false,
                error: "No file received" 
            });
        }
        console.log("Multer saved file:", req.file.path);
        next();
    },
    handleImage
);

export default journalroute;