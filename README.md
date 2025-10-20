<h1 align="center">🧠✨ MindScribe</h1>
<p align="center">
  <em>AI-powered handwriting and text emotion analyzer built with Google Generative AI & Computer Vision</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/FastAPI-009688?style=flat&logo=fastapi&logoColor=white" />
  <img src="https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white" />
  <img src="https://img.shields.io/badge/Google%20Generative%20AI-FFCA28?style=flat&logo=googlecloud&logoColor=black" />
  <img src="https://img.shields.io/badge/Computer%20Vision-4285F4?style=flat&logo=opencv&logoColor=white" />
</p>

---

## 🧩 Overview

**MindScribe** is an AI-driven handwriting and text analysis app that interprets *handwritten notes, emotions, and tone* using **Google Generative AI** and **Computer Vision**.  
Users can upload handwritten or typed text images and receive meaningful insights — such as **mood**, **sentiment**, and **contextual emotion understanding**.

The project bridges human creativity and AI understanding, helping visualize the emotions hidden behind written words.

---

## 🚀 Features

- 🖋️ **Handwriting Analysis:** Uses Computer Vision (OpenCV/Tesseract) to analyze handwriting patterns, including slant, pressure, and style cues.  
- 💬 **Emotion & Sentiment Detection:** Sends extracted text to Google Generative AI (Gemini) for emotional and contextual interpretation.  
- 🎨 **Modern UI:** Built using React, TailwindCSS, and Framer Motion for smooth transitions and interactive visuals.  
- ☁️ **Python Backend:** FastAPI handles file uploads, processing, and AI communication.  
- 🧾 **Insightful Results:** Displays mood, emotional category, and AI-generated reasoning elegantly.

---

## 🧠 Future Vision

🔍 **Planned Enhancements:**  
- Advanced **Computer Vision modules** for handwriting pattern recognition.  
- Improved **emotion analysis accuracy** by combining CV insights with Google Gemini AI reasoning.  
- Additional **interactive visualizations** for users to explore their handwriting and emotions.

---

## 🏗️ Tech Stack

| Layer | Technology |
|:------|:------------|
| **Frontend** | React, Tailwind CSS, Framer Motion |
| **Backend** | Python, FastAPI |
| **AI & APIs** | Google Generative AI (Gemini), OpenCV, Tesseract OCR |
| **Database** | *Optional for future versions* |
| **Deployment** | *Currently running locally* |
| **File Handling** | FastAPI UploadFile & Python file I/O |

---

## 🧠 System Architecture

```mermaid
flowchart TD
    U["User Uploads Image"] --> A["FastAPI Backend"]
    A -->|Save File| F1["Uploads Folder"]
    A -->|Analyze Handwriting| CV["Computer Vision Module (OpenCV/Tesseract)"]
    CV --> B["Text Extraction + Handwriting Features"]
    B -->|Send to Gemini AI| C["Emotion + Context Analysis"]
    C --> E["Frontend Visualization"]
    E --> U
