// Pourcentage de code écrit par moi-même : 40 %

import { useState, useEffect } from "react";
import { getSalles } from "../api";

function ListeSalles({ onReserver }) {
  const [salles, setSalles] = useState([]);
  const [erreur, setErreur] = useState("");

  // Les filtres
  const [recherche, setRecherche] = useState("");
  const [capaciteMin, setCapaciteMin] = useState("");
  const [batiment, setBatiment] = useState("");
  const [equipement, setEquipement] = useState("");

  // Charger les salles une seule fois, au chargement de la page
  useEffect(() => {
    getSalles()
      .then((donnees) => setSalles(donnees))
      .catch((e) => setErreur(e.message));
  }, []);

  // Garder seulement les salles qui respectent tous les filtres
  const sallesFiltrees = salles.filter((salle) => {
    if (recherche !== "" && !salle.nom.toLowerCase().includes(recherche.toLowerCase())) return false;
    if (capaciteMin !== "" && salle.capacite < Number(capaciteMin)) return false;
    if (batiment !== "" && salle.batiment !== batiment) return false;
    if (equipement !== "" && !salle.equipements.includes(equipement)) return false;
    return true;
  });

  return (
    <section>
      <h1>Trouver une salle</h1>
      <p className="intro">Bienvenue ! Filtrez les salles selon votre besoin, puis cliquez sur « Réserver ».</p>

      <div className="filtres">
        <input placeholder="🔍 Rechercher une salle" value={recherche} onChange={(e) => setRecherche(e.target.value)} />

        <select value={capaciteMin} onChange={(e) => setCapaciteMin(e.target.value)}>
          <option value="">Toutes les capacités</option>
          <option value="10">10 places et +</option>
          <option value="20">20 places et +</option>
          <option value="30">30 places et +</option>
          <option value="50">50 places et +</option>
        </select>

        <select value={batiment} onChange={(e) => setBatiment(e.target.value)}>
          <option value="">Tous les bâtiments</option>
          <option value="A">Bâtiment A</option>
          <option value="B">Bâtiment B</option>
          <option value="C">Bâtiment C</option>
          <option value="D">Bâtiment D</option>
          <option value="E">Bâtiment E</option>
          <option value="F">Bâtiment F</option>
          <option value="L">Bâtiment L</option>
        </select>

        <select value={equipement} onChange={(e) => setEquipement(e.target.value)}>
          <option value="">Tous les équipements</option>
          <option value="projecteur">Projecteur</option>
          <option value="tableau blanc">Tableau blanc</option>
          <option value="ordinateurs">Ordinateurs</option>
          <option value="micro">Micro</option>
          <option value="visioconférence">Visioconférence</option>
        </select>
      </div>

      {erreur !== "" && <p className="message erreur">{erreur}</p>}

      <p className="compteur">{sallesFiltrees.length} salle(s) trouvée(s)</p>

      {sallesFiltrees.length === 0 && erreur === "" && (
        <p className="vide">Aucune salle ne correspond à ces filtres. Essayez d'en retirer un.</p>
      )}

      <div className="grille">
        {sallesFiltrees.map((salle) => (
          <div className="carte-salle" key={salle.id}>
            <h3>{salle.nom}</h3>
            <p>🏢 Bâtiment {salle.batiment}</p>
            <p>👥 {salle.capacite} places</p>
            <p>🛠️ {salle.equipements.join(", ")}</p>
            {salle.accessible && <p>♿ Accessible</p>}
            <button className="bouton" onClick={() => onReserver(salle.id)}>Réserver</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ListeSalles;
