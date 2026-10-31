import {
  getReservations,
  hasConflict,
} from "../services/reservationService.js";

import { writeJson } from "../services/jsonService.js";

export async function getAllReservations(req, res) {
  try {
    const reservations = await getReservations();

    res.status(200).json(reservations);
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de la lecture des réservations",
    });
  }
}

export async function getReservationById(req, res) {
  try {
    const reservations = await getReservations();

    const reservation = reservations.find(
      (r) => r.id === parseInt(req.params.id),
    );

    if (!reservation) {
      return res.status(404).json({
        message: "Réservation non trouvée",
      });
    }

    res.status(200).json(reservation);
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de la lecture de la réservation",
    });
  }
}

export async function createReservation(req, res) {
  try {
    const reservations = await getReservations();

    const newReservation = {
      id: reservations.length + 1,
      ...req.body,
    };

    const conflict = hasConflict(reservations, newReservation);

    if (conflict) {
      return res.status(409).json({
        message: "Cette salle est déjà réservée pour cet horaire",
      });
    }

    reservations.push(newReservation);

    await writeJson("./data/reservations.json", reservations);

    res.status(201).json(newReservation);
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de la création de la réservation",
    });
  }
}

export async function updateReservation(req, res) {
  try {
    const reservations = await getReservations();

    const reservationIndex = reservations.findIndex(
      (r) => r.id === parseInt(req.params.id),
    );

    if (reservationIndex === -1) {
      return res.status(404).json({
        message: "Réservation non trouvée",
      });
    }

    reservations[reservationIndex] = {
      ...reservations[reservationIndex],
      ...req.body,
    };

    await writeJson("./data/reservations.json", reservations);

    res.status(200).json(reservations[reservationIndex]);
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de la mise à jour de la réservation",
    });
  }
}

export async function deleteReservation(req, res) {
  try {
    const reservations = await getReservations();

    const reservationIndex = reservations.findIndex(
      (r) => r.id === parseInt(req.params.id),
    );

    if (reservationIndex === -1) {
      return res.status(404).json({
        message: "Réservation non trouvée",
      });
    }

    reservations.splice(reservationIndex, 1);

    await writeJson("./data/reservations.json", reservations);

    res.status(200).json({
      message: "Réservation supprimée",
    });
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de la suppression de la réservation",
    });
  }
}
