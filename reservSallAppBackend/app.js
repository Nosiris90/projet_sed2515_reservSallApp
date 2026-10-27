import express from "express";
import cors from "cors";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Route de test
app.get("/", (req, res) => {
  res.status(200).json({
    message: "API RéservSalle fonctionne",
  });
});

export default app;
