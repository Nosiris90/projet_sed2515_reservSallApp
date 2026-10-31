// Pourcentage de code écrit par moi-même : 60 %

function Aide() {
  return (
    <section>
      <h1>Aide et FAQ</h1>
      <div className="carte aide">
        <h3>Comment trouver une salle ?</h3>
        <p>Dans « Salles », utilisez les filtres (capacité, bâtiment, équipement) ou la recherche par nom.</p>

        <h3>Comment réserver ?</h3>
        <p>Cliquez sur « Réserver » sous une salle, ou ouvrez « Réserver » dans le menu. Choisissez la date, les heures, écrivez votre nom, puis cliquez sur « Réserver ».</p>

        <h3>J'ai un message rouge, que faire ?</h3>
        <p>Le message indique quoi corriger : un champ vide, une heure de fin trop tôt, ou une salle déjà réservée sur ce créneau. Dans ce dernier cas, choisissez une autre heure ou une autre salle.</p>

        <h3>Comment annuler ?</h3>
        <p>Dans « Mes réservations », cliquez sur « Annuler » à côté de la réservation.</p>
      </div>
    </section>
  );
}

export default Aide;
