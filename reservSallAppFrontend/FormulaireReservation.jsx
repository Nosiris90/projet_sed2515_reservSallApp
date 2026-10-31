// Pourcentage de code écrit par moi-même : 50 %

import { useState, useEffect } from "react";
import { getSalles, creerReservation } from "./api.js";
import { verifierReservation } from "./validation.js";

function FormulaireReservation({ salleInitiale }) {
  const [salles, setSalles] = useState([]);

  // Les champs du formulaire
  const [date, setDate] = useState("");
  const [debut, setDebut] = useState("");
  const [fin, setFin] = useState("");
  const [salleId, setSalleId] = useState(salleInitiale);
  const [nom, setNom] = useState("");
  const [motif, setMotif] = useState("");

  // Le message affiché sous le bouton (vert ou rouge)
  const [message, setMessage] = useState("");
  const [succes, setSucces] = useState(false);

  // Charger la liste des salles pour le menu déroulant
  useEffect(() => {
    getSalles().then((donnees) => setSalles(donnees));
  }, []);

  async function reserver() {
    // 1. Vérifier le formulaire avant d'appeler l'API
    const erreur = verifierReservation(date, debut, fin, salleId, nom);
    if (erreur !== "") {
      setMessage(erreur);
      setSucces(false);
      return;
    }

    // 2. Envoyer la réservation à l'API
    try {
      await creerReservation({ salleId, date, debut, fin, nom, motif });
      setMessage("Votre réservation is enregistrée.");
      setSucces(true);
    } catch (e) {
      // Par exemple : la salle est déjà prise (erreur 409)
      setMessage(e.message);
      setSucces(false);
    }
  }

  return (
    <section>
      <h1>Réserver une salle</h1>
      <p className="intro">
        Réservez en 4 étapes : 📅 Date → 🕐 Heures → 🚪 Salle → ✅ Réserver
      </p>

      <div className="carte">
        <label htmlFor="date">📅 Date</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <label htmlFor="debut">🕐 Heure de début</label>
        <select
          id="debut"
          value={debut}
          onChange={(e) => setDebut(e.target.value)}
        >
          <option value="">Choisir</option>
          <option>07:00</option>
          <option>08:00</option>
          <option>09:00</option>
          <option>10:00</option>
          <option>11:00</option>
          <option>12:00</option>
          <option>13:00</option>
          <option>14:00</option>
          <option>15:00</option>
          <option>16:00</option>
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
        </select>

        <label htmlFor="fin">🕐 Heure de fin</label>
        <select id="fin" value={fin} onChange={(e) => setFin(e.target.value)}>
          <option value="">Choisir</option>
          <option>08:00</option>
          <option>09:00</option>
          <option>10:00</option>
          <option>11:00</option>
          <option>12:00</option>
          <option>13:00</option>
          <option>14:00</option>
          <option>15:00</option>
          <option>16:00</option>
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
        </select>

        <label htmlFor="salle">🚪 Salle</label>
        <select
          id="salle"
          value={salleId}
          onChange={(e) => setSalleId(e.target.value)}
        >
          <option value="">Choisir</option>
          {salles.map((salle) => (
            <option key={salle.id} value={salle.id}>
              {salle.nom} ({salle.capacite} places)
            </option>
          ))}
        </select>

        <label htmlFor="nom">🙋 Votre nom</label>
        <input id="nom" value={nom} onChange={(e) => setNom(e.target.value)} />

        <label htmlFor="motif">📝 Motif (facultatif)</label>
        <input
          id="motif"
          value={motif}
          onChange={(e) => setMotif(e.target.value)}
        />

        <button className="bouton" onClick={reserver}>
          Réserver
        </button>

        {message !== "" && (
          <p className={succes ? "message succes" : "message erreur"}>
            {message}
          </p>
        )}
      </div>
    </section>
  );
}

export default FormulaireReservation;
