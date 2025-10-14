import fs from "fs";
import sharp from "sharp";
import "dotenv/config";
import Tesseract from "tesseract.js";
import { GoogleGenerativeAI } from "@google/generative-ai";

const geminiKey = process.env.GEMINI_API;
const genAI = geminiKey ? new GoogleGenerativeAI(geminiKey) : null;

export const handleImage = async (req, res) => {
  try {
    console.log("handleImage called with file:", req.file);

    if (!req.file) {
      return res.status(400).json({ success: false, msg: "No image uploaded" });
    }

    const originalPath = req.file.path;
    const filename = req.file.filename;
    const processedPath = `./uploads/processed-${Date.now()}.jpg`;

    console.log("Processing image with Sharp:", originalPath);

    // Preprocess image for better OCR accuracy
    await sharp(originalPath)
      .grayscale()
      .normalize()
      .resize({ width: 1500 })
      .toFile(processedPath);

    console.log("Running Tesseract.js OCR...");

    // Perform OCR using Tesseract.js
    const { data: { text } } = await Tesseract.recognize(
      processedPath,
      "eng",
      {
        logger: m => console.log("Tesseract progress:", m)
      }
    );

    const extractedText = text.trim();
    console.log("Extracted text:", extractedText);

    if (!extractedText || extractedText.length < 2) {
      return res.status(200).json({
        success: false,
        msg: "Tesseract returned little or no text",
      });
    }

    // Emotion analysis with Gemini AI (if configured)
    let emotionAnalysis = null;
    if (genAI) {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const prompt = `
You are an emotion analysis assistant.
Analyze the emotions and tone in this journal entry text.
Return only a clean JSON with:
{
  "emotions": "<emotion, e.g. happiness, sadness, anger, neutral>",
  "confidence": <0 to 1>
}

Journal Entry:
${extractedText}
`;
      console.log("Sending to Gemini for emotion analysis...");
      const result = await model.generateContent(prompt);
      emotionAnalysis = result.response.text();
    } else {
      emotionAnalysis = JSON.stringify({
        emotions: "neutral",
        confidence: 0.5,
        note: "Gemini API not configured",
      });
    }

    res.status(200).json({
      success: true,
      filename,
      originalPath,
      processedPath,
      extractedText,
      emotionAnalysis,
    });

  } catch (error) {
    console.error("Error in handleImage:", error);
    res.status(500).json({
      success: false,
      msg: "Internal server error",
      error: error.message,
    });
  }
};
