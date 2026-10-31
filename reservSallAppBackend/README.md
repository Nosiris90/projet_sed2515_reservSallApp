RéservSalle
Description
RéservSalle est une application de réservation de salles permettant aux utilisateurs de :

Consulter les salles disponibles ;
Consulter les réservations existantes ;
Créer une réservation ;
Modifier une réservation ;
Supprimer une réservation ;
Vérifier les conflits d'horaires.
Technologies utilisées
Backend
Node.js
Express.js
JavaScript ES Modules
JSON (source de données)
Frontend
React
Vite
Axios
Installation du projet
Backend
Se placer dans le dossier :

cd reservSallAppBackend
Installer les dépendances :

npm install
Lancer le serveur :

npm run dev
Frontend
Se placer dans le dossier :

cd reservSallAppFrontend
Installer les dépendances :

npm install
Lancer l'application :

npm run dev
URL Backend
http://localhost:3001
Endpoints API
Gestion des salles
Obtenir toutes les salles
GET /api/salles
Obtenir une salle par identifiant
GET /api/salles/:id
Exemple :

GET /api/salles/B204
Gestion des réservations
Obtenir toutes les réservations
GET /api/reservations
Obtenir une réservation par identifiant
GET /api/reservations/:id
Exemple :

GET /api/reservations/1
Créer une réservation
POST /api/reservations
Modifier une réservation
PUT /api/reservations/:id
Supprimer une réservation
DELETE /api/reservations/:id
Source de données
Les données sont stockées dans les fichiers JSON suivants :

data/salles.json
data/reservations.json
Gestion des erreurs
Code HTTP Signification
200 Succès
201 Ressource créée
400 Données invalides
404 Ressource introuvable
409 Conflit de réservation
500 Erreur interne du serveur
Tests réalisés
Tests manuels
✅ GET /api/salles
✅ GET /api/salles/:id
✅ GET /api/reservations
✅ GET /api/reservations/:id
✅ POST /api/reservations
✅ PUT /api/reservations/:id
✅ DELETE /api/reservations/:id
✅ Validation des champs obligatoires
✅ Vérification des conflits d'horaires
Déploiement
URL de démonstration :

Non hébergé pour le moment.
ou

URL Vercel / Render (à compléter)
Répartition du travail
Backend
Nike Djateng

Architecture Express
API REST
Contrôleurs
Services
Middleware
Validation
Gestion des réservations
Frontend
Yann Bayala

Utilisation de l'IA
L'IA a été utilisée comme outil d'assistance à l'apprentissage, à la conception de l'architecture et à la révision du code.

Contribution estimée
Étudiant : 50 %
Assistance IA : 50 %
