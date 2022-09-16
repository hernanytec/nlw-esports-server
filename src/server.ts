import express from "express";

const app = express();

app.get("/ads", (req, res) => {
  res.json({ aqui: "1123", aqui2: "1123" });
});

app.listen(3333);
