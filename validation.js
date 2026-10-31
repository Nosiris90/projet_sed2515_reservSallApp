// Pourcentage de code écrit par moi-même : 60 %
// Reprise de la fonction du projet individuel (réutilisation de code).

// Vérifie le formulaire et retourne un message d'erreur, ou "" si tout est bon
export function verifierReservation(date, debut, fin, salleId, nom) {
  if (date === "") return "Veuillez choisir une date.";
  if (debut === "") return "Veuillez choisir une heure de début.";
  if (fin === "") return "Veuillez choisir une heure de fin.";
  if (salleId === "") return "Veuillez choisir une salle.";
  if (nom.trim() === "") return "Veuillez écrire votre nom.";
  if (fin <= debut) return "L'heure de fin doit être après l'heure de début.";
  return "";
}
