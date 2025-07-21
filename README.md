
# 🌍 React Geo App – Test Technique Krypteia

Ce projet est une petite application React réalisée dans le cadre d’un test technique pour Krypteia Technologies.
Elle permet d’afficher et de manipuler des données géolocalisées de manière interactive.

## 🚀 Fonctionnalités

✅ Carte interactive avec points géolocalisés (via **react-leaflet**)
✅ Liste des résultats (sous forme de tableau ou cards)
✅ Clic sur un point de la carte pour afficher les détails
✅ Barre de recherche pour filtrer les résultats par nom/désignation
✅ Bouton **switch** pour basculer entre la vue carte et la vue liste
✅ Pagination 

## 🌐 API utilisée

L’application utilise l’API suivante :

> [REST Countries](https://restcountries.com)
>
> 📝 *J’ai choisi REST Countries car cette API est robuste, bien documentée, largement utilisée et adaptée à une visualisation mondiale pertinente.*

## 🧰 Tech Stack

* [React](https://react.dev/)
* [React Leaflet](https://react-leaflet.js.org/) pour la carte
* [Axios](https://axios-http.com/) pour les appels API
* [Bootstrap](https://getbootstrap.com/)/ css pour le style

## 🗂️ Structure du projet

react-geo-app/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   ├── css/
│   │   │   ├── App.css
│   │   │   ├── MapView.css
│   │   │   └── ListView.css
│   │   └── img/
│   │       └── epingle.png
│   ├── components/
│   │   ├── MapView.jsx
│   │   ├── ListView.jsx
│   │   └── SwitchView.jsx
│   ├── services/
│   │   └── countryService.js
│   ├── App.jsx
│   ├── index.js
│   └── index.css
├── package.json
├── README.md
└── .gitignore

## 🔧 Installation

Clonez le repo et installez les dépendances :

```bash
git clone https://github.com/mssninah/reactgeoapp.git
cd reactgeoapp
npm install
```

Lancez l’application en mode développement :

```bash
npm start
```

L’application sera disponible sur [http://localhost:3000](http://localhost:3000)

## 📜 Commandes utiles

| Commande        | Description                       |
| --------------- | --------------------------------- |
| `npm start`     | Démarre le serveur local          |
| `npm run build` | Build de production               |


## 🎯 Objectif

Ce projet a été réalisé dans le cadre d’un test technique pour Krypteia Technologies.
⏰ Deadline : **Lundi 8h**

## 👨‍💻 Auteur

**RAZAFITSIALONINA Malala Ninah**
[GitHub](https://github.com/mssninah) – [LinkedIn](https://linkedin.com/in/razafitsialonina-ninah)
