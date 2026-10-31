// Pourcentage de code écrit par moi-même : 65 %

import { useState } from "react";
import ListeSalles from "./ListeSalles.jsx";
import FormulaireReservation from "./FormulaireReservation.jsx";
import MesReservations from "./MesReservations.jsx";
import Aide from "./Aide.jsx";
import "./App.css";

function App() {
  // Quelle page est affichée : "salles", "reserver", "mes" ou "aide"
  const [page, setPage] = useState("salles");
  // Salle choisie dans la liste, pour pré-remplir le formulaire
  const [salleChoisie, setSalleChoisie] = useState("");

  // Quand on clique sur « Réserver » dans la liste des salles
  function reserverSalle(salleId) {
    setSalleChoisie(salleId);
    setPage("reserver");
  }

  return (
    <div className="app">
      <header className="header">
        <span className="brand">RéservSalle</span>
        <nav>
          <button
            className={page === "salles" ? "lien actif" : "lien"}
            onClick={() => setPage("salles")}
          >
            Salles
          </button>
          <button
            className={page === "reserver" ? "lien actif" : "lien"}
            onClick={() => setPage("reserver")}
          >
            Réserver
          </button>
          <button
            className={page === "mes" ? "lien actif" : "lien"}
            onClick={() => setPage("mes")}
          >
            Mes réservations
          </button>
          <button
            className={page === "aide" ? "lien actif" : "lien"}
            onClick={() => setPage("aide")}
          >
            Aide
          </button>
        </nav>
      </header>

      <main className="contenu">
        {page === "salles" && <ListeSalles onReserver={reserverSalle} />}
        {page === "reserver" && (
          <FormulaireReservation salleInitiale={salleChoisie} />
        )}
        {page === "mes" && (
          <MesReservations onAllerReserver={() => setPage("salles")} />
        )}
        {page === "aide" && <Aide />}
      </main>
    </div>
  );
}

export default App;
