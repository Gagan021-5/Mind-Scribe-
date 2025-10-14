<h1 align="center">🧠✨ MindScribe</h1>
<p align="center">
  <em>AI-powered handwriting and text emotion analyzer built with Google Generative AI & OCR</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-404D59?style=flat" />
  <img src="https://img.shields.io/badge/Google%20Generative%20AI-FFCA28?style=flat&logo=googlecloud&logoColor=black" />
  <img src="https://img.shields.io/badge/OCR-4285F4?style=flat&logo=google&logoColor=white" />
</p>

---

## 🧩 Overview

**MindScribe** is an AI-driven handwriting and text analysis app that interprets *handwritten notes, emotions, and tone* using **Google Generative AI** and **OCR**.  
It allows users to upload handwritten or typed text images and get meaningful insights — such as **mood**, **sentiment**, and **contextual emotion understanding**.

The goal of MindScribe is to help visualize what emotions are hidden behind the words — blending cognitive AI with creative expression.

---

## 🚀 Features

- 📝 **OCR (Optical Character Recognition):** Extracts text from handwritten or scanned images.  
- 💬 **Emotion & Sentiment Detection:** Uses Google Generative AI to understand tone and emotional state.  
- 🎨 **Modern UI:** Built using React, TailwindCSS, and Framer Motion for clean transitions and effects.  
- ☁️ **AI-Driven Backend:** Node.js + Express handles file uploads and AI communication.  
- 🧾 **Insightful Results:** Displays mood, emotional category, and reasoning text elegantly.  

---

## 🧠 Future Vision

🔍 **Planned Upgrade:**  
In future iterations, **MindScribe** will integrate **Computer Vision (CV)** models for manual handwriting and pattern analysis —  
moving beyond OCR APIs to understand *pen pressure, slant, curvature,* and *style-based emotional cues*.

This deeper analysis will enhance emotion recognition accuracy through **AI-assisted visual handwriting analysis** combined with **Google Gemini reasoning**.

---

## 🏗️ Tech Stack

| Layer | Technology |
|:------|:------------|
| **Frontend** | React, Tailwind CSS, Framer Motion |
| **Backend** | Node.js, Express.js |
| **AI & APIs** | Google Generative AI (Gemini), OCR API (e.g. OCR.space / Vision API) |
| **Database** | *Not yet implemented* |
| **Deployment** | *Currently running locally* |
| **File Handling** | Multer |

---

## 🧠 System Architecture

```mermaid
flowchart TD
    U[User Uploads Image] --> A[Express.js Backend]
    A -->|OCR Extracts Text| B[Text Extraction]
    B -->|Send to Gemini AI| C[Emotion + Context Analysis]
    C --> E[Frontend Visualization]
    E --> U
    subgraph Future_Update[Planned Upgrade]
        F[Computer Vision Module] --> G[Deeper Visual + Context Analysis]
    end
