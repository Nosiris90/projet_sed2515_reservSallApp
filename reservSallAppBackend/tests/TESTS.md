Tests Backend
GET /api/salles
Résultat : 200 OK

Réussi

GET /api/salles/B204
Résultat : Salle retournée

Réussi

GET /api/reservations
Résultat : Liste retournée

Réussi

GET /api/reservations/1
Résultat : Réservation retournée

Réussi
#====================================================

# TESTS SUR POSTMAN:

# Tests Backend

http://localhost:3001/
{"message":"API RéservSalle fonctionne"}
=================================================

GET /api/salles

http://localhost:3001/api/salles

[{"id":"B204","nom":"Salle B204","batiment":"B","capacite":30,"equipements":["projecteur","tableau blanc"],"accessible":true},{"id":"B301","nom":"Salle B301","batiment":"B","capacite":50,"equipements":["projecteur","visioconference"],"accessible":true},{"id":"L120","nom":"Laboratoire L120","batiment":"L","capacite":25,"equipements":["ordinateurs","projecteur"],"accessible":true},{"id":"C110","nom":"Salle C110","batiment":"C","capacite":15,"equipements":["tableau blanc"],"accessible":false},{"id":"D205","nom":"Salle D205","batiment":"D","capacite":40,"equipements":["projecteur","microphone"],"accessible":true}]

# Réussi

GET /api/salles/B204

http://localhost:3001/api/salles/B204

{"id":"B204","nom":"Salle B204","batiment":"B","capacite":30,"equipements":["projecteur","tableau blanc"],"accessible":true}

Réussi

## ===============================================================================

GET /api/reservations
http://localhost:3001/api/reservations

[{"id":1,"salleId":"B204","date":"2026-11-02","debut":"09:00","fin":"11:00","nom":"Nike Djateng","motif":"Réunion de projet"},{"id":2,"salleId":"L120","date":"2026-11-02","debut":"13:00","fin":"15:00","nom":"Yann","motif":"Présentation"}]

# Réussi

---

GET /api/reservations/1
http://localhost:3001/api/reservations/1

{"id":1,"salleId":"B204","date":"2026-11-02","debut":"09:00","fin":"11:00","nom":"Nike Djateng","motif":"Réunion de projet"}
Réussi

===============================================================

POST /api/reservations
http://localhost:3001/api/reservations/
201 Created
Confere image

✅

PUT /api/reservations/1

✅

DELETE /api/reservations/1

# ✅

✅ POST Validation Error

Body :

{
"salleId": "B204"
}

Attendu :

400 Bad Request

===================================================================

✅ POST Conflict Error
http://localhost:3001/api/reservations

Body :

{
"salleId": "B204",
"date": "2026-11-10",
"debut": "15:00",
"fin": "17:00",
"nom": "Test",
"motif": "Conflit"
}

Attendu :

409 Conflict

=====================================================
✅ Vérifier que PUT modifie réellement :

PUT /api/reservations/1
Body

{
"motif": "Réunion modifiée"
}
resultat:
{
"message": "Tous les champs sont obligatoires"
}
=====================================

Vérifier que DELETE supprime réellement :

DELETE /api/reservations/1

http://localhost:3001/api/reservations/1

reponse: {
"message": "Réservation supprimée"
}
=================================

GET http://localhost:3001/api/reservations/
Reponse:
[
{
"id": 2,
"salleId": "L120",
"date": "2026-11-02",
"debut": "13:00",
"fin": "15:00",
"nom": "Yann",
"motif": "Présentation"
},
{
"id": 3,
"salleId": "B204",
"date": "2026-11-10",
"debut": "14:00",
"fin": "16:00",
"nom": "Nike Djateng",
"motif": "Réunion projet SED2515"
}
]

---

id: 1 a ete efface

==================================
