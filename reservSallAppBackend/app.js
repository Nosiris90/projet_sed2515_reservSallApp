import express from "express";
import cors from "cors";
import sallesRoutes from "./routes/sallesRoutes.js";
import reservationsRoutes from "./routes/reservationsRoutes.js";

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
app.use("/api/salles", sallesRoutes);
app.use("/api/reservations", reservationsRoutes);

export default app;
