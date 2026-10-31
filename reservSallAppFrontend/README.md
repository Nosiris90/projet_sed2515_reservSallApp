# RéservSalle — Frontend (React + Vite)

Interface web de l'application de réservation de salles (projet en binôme SED2515).

## Pages
- **Salles** : liste des salles avec recherche et filtres (capacité, bâtiment, équipement), et un bouton « Réserver » sur chaque salle.
- **Réserver** : formulaire (date, heures, salle, nom, motif) avec validation et messages clairs.
- **Mes réservations** : liste des réservations avec annulation, et un message quand la liste est vide.
- **Aide** : FAQ.

## Lancer le frontend
```bash
npm install
npm run dev
```
Puis ouvrir le lien affiché (par défaut http://localhost:5173).

## Brancher le backend
Dans `src/api.js` :
- `MODE_DEMO = true` : l'application utilise les données d'exemple de `src/donneesExemple.js` ;
- `MODE_DEMO = false` : l'application appelle le backend Express sur `http://localhost:3001/api`. Lancez d'abord le backend avec `npm start` dans `reservSallAppBackend`.

Routes utilisées : `GET /api/salles`, `GET /api/reservations`, `POST /api/reservations`, `DELETE /api/reservations/:id`.

## Structure
```
src/
├── App.jsx                     menu et navigation entre les pages
├── App.css                     styles
├── api.js                      appels au backend (ou données d'exemple)
├── donneesExemple.js           salles et réservations d'exemple
├── validation.js               vérification du formulaire (reprise du projet individuel)
└── components/
    ├── ListeSalles.jsx
    ├── FormulaireReservation.jsx
    ├── MesReservations.jsx
    └── Aide.jsx
```
