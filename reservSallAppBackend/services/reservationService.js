import { readJson } from "./jsonService.js";

export async function getReservations() {
  return await readJson("./data/reservations.json");
}

export function hasConflict(reservations, newReservation) {
  return reservations.some((reservation) => {
    return (
      reservation.salleId === newReservation.salleId &&
      reservation.date === newReservation.date &&
      newReservation.debut < reservation.fin &&
      newReservation.fin > reservation.debut
    );
  });
}
