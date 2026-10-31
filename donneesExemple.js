// Pourcentage de code écrit par moi-même : 80 %

// Données d'exemple : même format que les fichiers JSON du backend.
// Elles servent tant que l'API n'est pas prête (MODE_DEMO = true dans api.js).

export const sallesExemple = [
  { id: "A101", nom: "Salle A101", batiment: "A", capacite: 20, equipements: ["tableau blanc"], accessible: true },
  { id: "A102", nom: "Salle A102", batiment: "A", capacite: 20, equipements: ["projecteur"], accessible: false },
  { id: "B204", nom: "Salle B204", batiment: "B", capacite: 30, equipements: ["projecteur", "tableau blanc"], accessible: true },
  { id: "B205", nom: "Salle B205", batiment: "B", capacite: 30, equipements: ["projecteur"], accessible: true },
  { id: "C310", nom: "Salle C310", batiment: "C", capacite: 40, equipements: ["projecteur", "micro"], accessible: true },
  { id: "C311", nom: "Salle C311", batiment: "C", capacite: 40, equipements: ["tableau blanc"], accessible: false },
  { id: "L120", nom: "Laboratoire L120", batiment: "L", capacite: 25, equipements: ["ordinateurs", "projecteur"], accessible: true },
  { id: "L121", nom: "Laboratoire L121", batiment: "L", capacite: 25, equipements: ["ordinateurs"], accessible: true },
  { id: "D400", nom: "Salle de conférence D400", batiment: "D", capacite: 12, equipements: ["écran", "visioconférence"], accessible: true },
  { id: "D401", nom: "Salle de réunion D401", batiment: "D", capacite: 8, equipements: ["écran"], accessible: true },
  { id: "E001", nom: "Amphithéâtre E001", batiment: "E", capacite: 150, equipements: ["projecteur", "micro"], accessible: true },
  { id: "F210", nom: "Salle d'étude F210", batiment: "F", capacite: 6, equipements: ["tableau blanc"], accessible: true },
];

export const reservationsExemple = [
  { id: 1, salleId: "B204", date: "2026-11-02", debut: "10:00", fin: "12:00", nom: "Yann", motif: "Réunion d'équipe" },
];
