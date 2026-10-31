export function validateReservation(req, res, next) {
  const { salleId, date, debut, fin, nom, motif } = req.body;

  // Champs obligatoires
  if (!salleId || !date || !debut || !fin || !nom || !motif) {
    return res.status(400).json({
      message: "Tous les champs sont obligatoires",
    });
  }

  // Heure fin > heure debut
  if (fin <= debut) {
    return res.status(400).json({
      message: "L'heure de fin doit être après l'heure de début",
    });
  }

  next();
}
