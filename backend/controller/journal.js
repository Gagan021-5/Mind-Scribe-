import fs from "fs";
import fetch from "node-fetch";
import FormData from "form-data";
import sharp from "sharp";
import "dotenv/config";
import { GoogleGenerativeAI } from "@google/generative-ai";

const ocrkey = process.env.OCR_API;
const geminikey = process.env.GEMINI_API;
const genAI = new GoogleGenerativeAI(geminikey);

export const handleImage = async (req, res) => {
  try {
    const originalPath = req.file.path;
    const filename = req.file.originalname;
    const processedPath = `./uploads/processed-${Date.now()}-${filename}`;

    // Preprocess the image to improve OCR accuracy
    await sharp(originalPath)
      .grayscale()
      .normalize()
      .resize({ width: 1500 })
      .toFile(processedPath);

    const imageStream = fs.createReadStream(processedPath);

    const form = new FormData();
    form.append("apikey", ocrkey);
    form.append("language", "eng");
    form.append("file", imageStream, { filename });

    const ocrResponse = await fetch("https://api.ocr.space/parse/image", {
      method: "POST",
      body: form,
      headers: form.getHeaders(),
    });

    const ocrData = await ocrResponse.json();
    const extractedText = ocrData?.ParsedResults?.[0]?.ParsedText || "";

    if (!extractedText.trim()) {
      cleanupFiles([originalPath, processedPath]);
      return res.status(404).json({ success: false, msg: "No text detected" });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const prompt = `
Analyze the emotions in the following journal entry.
Return JSON: {"emotions":"<emotion>", "confidence":<0-1>}

Journal Entry:
${extractedText}
    `;

    const result = await model.generateContent(prompt);
    const analysis = await result.response.text();

    res.status(200).json({
      success: true,
      filename,
      extractedText,
      emotionAnalysis: analysis,
    });

    cleanupFiles([originalPath, processedPath]);
  } catch (error) {
    console.error("Error in handleImage:", error);
    res.status(500).json({ msg: "Internal server error" });
  }
};


function cleanupFiles(files) {
  files.forEach((file) => {
    fs.unlink(file, (err) => {
      if (err) console.error("Error deleting file:", file, err);
    });
  });
}
