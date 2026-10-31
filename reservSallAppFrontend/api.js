// Pourcentage de code écrit par moi-même : 50 %

// Toutes les communications avec le backend passent par ce fichier.
//
// MODE_DEMO = true  : on utilise les données d'exemple (le backend n'est pas prêt).
// MODE_DEMO = false : on appelle le vrai backend Express.

import { sallesExemple, reservationsExemple } from "./donneesExemple";

const MODE_DEMO = false; // true pour la démo, false pour le vrai backend
const URL_API = "http://localhost:3001/api";

// Copie des réservations d'exemple, modifiable pendant la démo
let reservationsDemo = [...reservationsExemple];

// ---------- Salles ----------

export async function getSalles() {
  if (MODE_DEMO) return sallesExemple;

  const reponse = await fetch(URL_API + "/salles");
  if (!reponse.ok) throw new Error("Impossible de charger les salles.");
  return reponse.json();
}

// ---------- Réservations ----------

export async function getReservations() {
  if (MODE_DEMO) return reservationsDemo;

  const reponse = await fetch(URL_API + "/reservations");
  if (!reponse.ok) throw new Error("Impossible de charger les réservations.");
  return reponse.json();
}

export async function creerReservation(reservation) {
  if (MODE_DEMO) {
    // On simule la vérification de conflit que fera le backend (erreur 409)
    const conflit = reservationsDemo.some(
      (r) =>
        r.salleId === reservation.salleId &&
        r.date === reservation.date &&
        reservation.debut < r.fin &&
        reservation.fin > r.debut,
    );
    if (conflit)
      throw new Error("Cette salle est déjà réservée sur ce créneau.");

    const nouvelle = { ...reservation, id: Date.now() };
    reservationsDemo = [...reservationsDemo, nouvelle];
    return nouvelle;
  }

  const reponse = await fetch(URL_API + "/reservations", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(reservation),
  });
  const donnees = await reponse.json();
  // 400 = donnée invalide, 409 = conflit : le backend envoie un message
  if (!reponse.ok)
    throw new Error(donnees.message || "Erreur lors de la réservation.");
  return donnees;
}

export async function annulerReservation(id) {
  if (MODE_DEMO) {
    reservationsDemo = reservationsDemo.filter((r) => r.id !== id);
    return;
  }

  const reponse = await fetch(URL_API + "/reservations/" + id, {
    method: "DELETE",
  });
  if (!reponse.ok) throw new Error("Impossible d'annuler la réservation.");
}
