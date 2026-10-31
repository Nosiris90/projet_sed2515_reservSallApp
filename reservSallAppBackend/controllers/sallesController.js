import { readJson } from "../services/jsonService.js";

export async function getAllSalles(req, res) {
  try {
    const salles = await readJson("./data/salles.json");

    res.status(200).json(salles);
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de la lecture des salles",
    });
  }
}
export async function getSalleById(req, res) {
  try {
    const salles = await readJson("./data/salles.json");

    const salle = salles.find((s) => s.id === req.params.id);

    if (!salle) {
      return res.status(404).json({
        message: "Salle introuvable",
      });
    }

    res.status(200).json(salle);
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de la lecture des salles",
    });
  }
}
