// Pourcentage de code écrit par moi-même :  40%

import { useState, useEffect } from "react";
import { getReservations, getSalles, annulerReservation } from "./api.js";

function MesReservations({ onAllerReserver }) {
  const [reservations, setReservations] = useState([]);
  const [salles, setSalles] = useState([]);
  const [erreur, setErreur] = useState("");

  // Charger les réservations et les salles
  function charger() {
    getReservations()
      .then((donnees) => setReservations(donnees))
      .catch((e) => setErreur(e.message));
    getSalles().then((donnees) => setSalles(donnees));
  }

  useEffect(() => {
    charger();
  }, []);

  // Trouver le nom d'une salle à partir de son id
  function nomSalle(salleId) {
    const salle = salles.find((s) => s.id === salleId);
    return salle ? salle.nom : salleId;
  }

  async function annuler(id) {
    try {
      await annulerReservation(id);
      charger(); // recharger la liste
    } catch (e) {
      setErreur(e.message);
    }
  }

  return (
    <section>
      <h1>Mes réservations</h1>

      <div className="carte">
        {erreur !== "" && <p className="message erreur">{erreur}</p>}

        {reservations.length === 0 ? (
          <div className="vide">
            <p>📭 Vous n'avez pas encore de réservation.</p>
            <button className="bouton" onClick={onAllerReserver}>
              Faire ma première réservation
            </button>
          </div>
        ) : (
          <ul className="liste">
            {reservations.map((r) => (
              <li key={r.id}>
                <div>
                  <strong>{nomSalle(r.salleId)}</strong>
                  <br />
                  {r.date}, de {r.debut} à {r.fin}
                  {r.motif && <span className="motif"> — {r.motif}</span>}
                </div>
                <button className="annuler" onClick={() => annuler(r.id)}>
                  Annuler
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export default MesReservations;
