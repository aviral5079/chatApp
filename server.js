const PORT = 8000;
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(express.json());

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

// const API_KEY = process.env.API_KEY;
const randomTexts = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "The quick brown fox jumps over the lazy dog.",
  "In a galaxy far, far away, there is a hidden treasure waiting to be discovered.",
  "As the sun sets, painting the sky in hues of orange and pink, nature whispers its beauty.",
  "Quantum mechanics is a fascinating field that challenges our understanding of the fundamental nature of reality.",
  "Pizza is a universal language that brings people together, regardless of their differences.",
  "The journey of a thousand miles begins with a single step.",
  "Raindrops tap gently on the windowpane, creating a soothing melody that lulls the world to sleep.",
  "Coding is like solving puzzles; each line of code is a piece that contributes to the bigger picture.",
  "Life is a book, and those who do not travel read only a page.",
];

app.post("/assist", async (req, res) => {
  // console.log("request received");
  try {
    const len = randomTexts.length;
    const randomIndex = Math.floor(Math.random() * len);
    const data = {
      role: "assistant",
      content: randomTexts[randomIndex],
    };
    res.send(JSON.stringify(data));
  } catch (err) {
    console.error(err);
  }
});

app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
