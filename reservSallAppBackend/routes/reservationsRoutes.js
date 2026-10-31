import express from "express";

import {
  getAllReservations,
  getReservationById,
  createReservation,
  updateReservation,
  deleteReservation,
} from "../controllers/reservationsController.js";

import { validateReservation } from "../middleware/validation.js";

const router = express.Router();

router.get("/", getAllReservations);

router.get("/:id", getReservationById);

router.post("/", validateReservation, createReservation);

router.put("/:id", validateReservation, updateReservation);

router.delete("/:id", deleteReservation);

export default router;
