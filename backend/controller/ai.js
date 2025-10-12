import { GoogleGenAI, createUserContent } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API });

export const analyzeHandwriting = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ success: false, msg: "No file uploaded" });

    const filePath = req.file.path;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: createUserContent([
        {
          fileData: {
            mimeType: req.file.mimetype,
            fileUri: filePath,
          },
        },
        `Analyze the emotions reflected in this handwritten note. 
         Respond strictly in JSON format like:
         {"emotion": "<dominant emotion>", "confidence": <0-1>, "summary": "<short reason>"}`,
      ]),
    });

    const analysisText = await response.text();

    let parsedAnalysis;
    try {
      parsedAnalysis = JSON.parse(analysisText);
    } catch {
      parsedAnalysis = { emotion: "unknown", confidence: 0, summary: "Could not parse AI output" };
    }

    res.status(200).json({
      success: true,
      emotionAnalysis: parsedAnalysis,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, msg: "AI analysis failed" });
  } finally {
    if (req.file?.path) fs.unlink(req.file.path, () => {});
  }
};
