const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
const PORT = 8000;

app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// 라우터
app.post("/chat", async (req, res) => {
  const { prompt } = req.body;
  console.log(prompt);

  try {
    const result = await model.generateContent(prompt);
    console.log(result);
    const text = result.response.text();
    res.json({ response: text });
  } catch (error) {
    res.status(500).json({ response: "오류" });
  }
});

app.listen(PORT, (req, res) => {
  console.log(`http://localhost:${PORT}`);
});
