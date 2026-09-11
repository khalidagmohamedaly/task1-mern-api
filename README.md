# 🚀 Task Manager API — Stage MERN Stack (Tâche 1)

**Stagiaire :** Khalid Ag Mohamed Aly  
**Programme :** MERN Stack Internship  
**Date :** 23 août 2026  
**Tâche :** Construire une API RESTful (Node.js + Express + MongoDB)

---

## 🎯 1. Objectif

Concevoir et développer une **API RESTful complète** avec Node.js, Express et MongoDB (via Mongoose), permettant d'effectuer les opérations **CRUD** (Create, Read, Update, Delete) sur une ressource métier : la gestion de tâches (*Task Manager*).

Cette API constitue la base backend qui sera consommée par le frontend React lors de la **Tâche 2**.

**Ressource choisie :** Task Manager (titre, description, statut, priorité, date d'échéance).

---

## ✨ 2. Fonctionnalités implémentées

- ✅ CRUD complet sur la ressource « Task »
- ✅ Validation des données via schémas Mongoose (titre obligatoire, longueur minimale, énumérations `status`/`priority`)
- ✅ Filtrage des résultats par `status` et `priority` via *query params*
- ✅ Gestion centralisée des erreurs (400, 404, 500) avec middleware dédié
- ✅ Journalisation des requêtes HTTP avec Morgan
- ✅ CORS activé pour la connexion avec le frontend React
- ✅ Architecture modulaire : routes / contrôleurs / modèles / configuration

---

## 🛠️ 3. Technologies utilisées

| Technologie | Rôle |
|-------------|------|
| **Node.js** | Environnement d'exécution JavaScript côté serveur |
| **Express.js 5** | Framework de routage et middleware HTTP |
| **MongoDB + Mongoose 9** | Base NoSQL et modélisation des schémas |
| **dotenv** | Gestion des variables d'environnement |
| **CORS + Morgan** | Middlewares utilitaires (sécurité + logs) |
| **Postman / curl** | Tests manuels des endpoints |

---

## 📂 4. Structure du projet

```text
task1-mern-api/
├── config/
│   └── db.js              # Connexion à MongoDB
├── models/
│   └── Task.js            # Schéma Mongoose
├── controllers/
│   └── taskController.js  # Logique métier CRUD
├── routes/
│   └── taskRoutes.js      # Déclaration des routes /api/tasks
├── middleware/
│   └── errorHandler.js    # Gestion centralisée des erreurs
├── server.js              # Point d'entrée de l'application
├── .env.example           # Modèle de variables d'environnement
├── .gitignore             # Fichiers exclus du versionnement
├── package.json           # Dépendances et scripts
└── README.md              # Ce fichier
```

---

## 🗃️ 5. Modèle de données — `Task`

| Champ | Type | Contraintes |
|-------|------|-------------|
| `title` | String | Requis, min. 3 caractères |
| `description` | String | Optionnel, vide par défaut |
| `status` | String | `'pending'` \| `'in-progress'` \| `'completed'` (défaut: `'pending'`) |
| `priority` | String | `'low'` \| `'medium'` \| `'high'` (défaut: `'medium'`) |
| `dueDate` | Date | Optionnel |
| `createdAt` / `updatedAt` | Date | Automatiques (`timestamps: true`) |

---

## 🔌 6. Endpoints de l'API

| Méthode | Route | Description |
|---------|-------|-------------|
| `GET` | `/api/tasks` | Liste toutes les tâches (filtres : `?status=...`, `?priority=...`) |
| `GET` | `/api/tasks/:id` | Récupère une tâche par son ID |
| `POST` | `/api/tasks` | Crée une nouvelle tâche |
| `PUT` | `/api/tasks/:id` | Met à jour une tâche existante |
| `DELETE` | `/api/tasks/:id` | Supprime une tâche |

---

## 🚀 7. Installation et lancement

### 1. Cloner le dépôt
```bash
git clone https://github.com/VOTRE-UTILISATEUR/task1-mern-api.git
cd task1-mern-api
```

### 2. Installer les dépendances
```bash
npm install
```

### 3. Configurer les variables d'environnement
```bash
cp .env.example .env
```
Éditez `.env` avec votre URI MongoDB (locale ou Atlas).

### 4. Lancer le serveur
```bash
# Mode développement (rechargement auto)
npm run dev

# Mode production
npm start
```

Le serveur démarre sur `http://localhost:5000`.

---

## 🧪 8. Tests réalisés

| Test | Résultat | Code HTTP |
|------|----------|-----------|
| `POST /api/tasks` (création tâche 1) | ✅ OK | 201 Created |
| `POST /api/tasks` (création tâche 2) | ✅ OK | 201 Created |
| `GET /api/tasks` (liste complète) | ✅ OK — 2 résultats | 200 OK |
| `GET /api/tasks/:id` | ✅ OK | 200 OK |
| `PUT /api/tasks/:id` (mise à jour) | ✅ OK | 200 OK |
| `DELETE /api/tasks/:id` | ✅ OK | 200 OK |
| `POST` avec titre invalide (< 3 car.) | ✅ Rejeté | 400 Bad Request |
| `GET` tâche inexistante | ✅ Géré | 404 Not Found |
| Route inconnue | ✅ Géré | 404 Not Found |

### Exemple — Création d'une tâche
```bash
curl -X POST http://localhost:5000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"Configurer le serveur Express","priority":"high"}'
```

**Réponse (201 Created) :**
```json
{
  "success": true,
  "data": {
    "_id": "...",
    "title": "Configurer le serveur Express",
    "status": "pending",
    "priority": "high",
    "createdAt": "2026-08-23T10:05:29.184Z"
  }
}
```

### Exemple — Erreur de validation
```bash
curl -X POST http://localhost:5000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"ab"}'
```

**Réponse (400 Bad Request) :**
```json
{
  "success": false,
  "message": "Le titre doit contenir au moins 3 caractères"
}
```

---

## 📦 9. Liens

- **Dépôt GitHub :** [https://github.com/Kmohamed20/task1-mern-api](https://github.com/Kmohamed20/task1-mern-api)
- **Document de soumission :** `Tache1_API_REST_Khalid_AgMohamedAly.pdf`

> ⚠️ Le fichier `.env` est exclu du versionnement via `.gitignore`. Utilisez `.env.example` comme référence.

---

## 📝 10. Conclusion

Cette API REST couvre l'ensemble des exigences de la **Tâche 1** :
- ✅ Opérations CRUD complètes
- ✅ Validation rigoureuse des données
- ✅ Gestion centralisée des erreurs
- ✅ Architecture modulaire

Elle est prête à être connectée à un frontend **React** (Tâche 2) et à être conteneurisée avec **Docker** (Tâche 4).
