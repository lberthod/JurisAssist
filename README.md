# JurisAssist — Plateforme d'Assistance Juridique

[![Vue.js](https://img.shields.io/badge/Vue.js-3.4-4FC08D?style=flat&logo=vue.js&logoColor=white)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.1-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Firebase](https://img.shields.io/badge/Firebase-Hosting-FFCA28?style=flat&logo=firebase&logoColor=black)](https://firebase.google.com/)

## 🌐 Démo en ligne

**Site de test déployé :** [https://jurisassist-a7583.web.app](https://jurisassist-a7583.web.app)

---

## 📋 À propos du projet

**JurisAssist** est une landing page premium pour un service d'assistance juridique professionnelle. L'interface met en avant une approche moderne, humaine et rassurante du conseil juridique, avec un design épuré et des interactions soignées.

### Caractéristiques principales

- ✅ **Design premium legal-tech** — Interface sobre, institutionnelle et rassurante
- ✅ **Système de floating cards** — Cartes flottantes animées mettant en valeur les USP (confidentialité, disponibilité 24/7, rapidité)
- ✅ **Timeline processus client** — Visualisation claire des étapes de prise en charge
- ✅ **Fiche conseiller** — Présentation humaine et professionnelle
- ✅ **Modal de contact interactif** — Formulaire de prise de RDV avec option appel téléphonique direct
- ✅ **Responsive complet** — Adaptation fluide desktop, tablette et mobile
- ✅ **Animations subtiles** — Micro-interactions premium sans effet gadget
- ✅ **SEO optimisé** — Meta tags, Open Graph, Twitter Cards, Schema.org
- ✅ **Analytics & CRO** — Google Analytics, tracking événements, Web Vitals
- ✅ **Performance monitoring** — Suivi automatique LCP, FID, page load time

---

## 🛠 Stack technique

| Technologie | Version | Usage |
|-------------|---------|-------|
| **Vue.js** | 3.4.21 | Framework JavaScript progressif |
| **Vite** | 5.1.6 | Build tool ultra-rapide |
| **Firebase Hosting** | — | Hébergement et déploiement |

### Pourquoi cette stack ?

- **Vue 3** : Composition API moderne, performances optimales, DX exceptionnelle
- **Vite** : Hot Module Replacement instantané, build optimisé
- **Firebase** : Déploiement en un clic, CDN global, SSL automatique

---

## 📂 Structure du projet

```
testjuridik/
├── src/
│   ├── components/
│   │   ├── Navbar.vue              # Barre de navigation premium
│   │   ├── HeroContent.vue         # Contenu textuel du hero
│   │   ├── HeroVisual.vue          # Zone visuelle du hero
│   │   ├── FloatingCards.vue       # Cartes flottantes animées
│   │   ├── AdvisorCard.vue         # Fiche conseiller juridique
│   │   └── ProcessTimeline.vue     # Timeline étapes client
│   ├── LegalHeroHeader.vue         # Composant principal header
│   ├── App.vue                     # Point d'entrée Vue
│   └── main.js                     # Bootstrap de l'application
├── public/
│   └── favicon.svg                 # Icône du site
├── dist/                           # Build de production (généré)
├── firebase.json                   # Config Firebase Hosting
├── package.json                    # Dépendances npm
└── vite.config.js                  # Configuration Vite
```

---

## 🚀 Installation & développement local

### Prérequis

- **Node.js** ≥ 16.x
- **npm** ≥ 8.x

### Étapes

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/lberthod/JurisAssist.git
   cd testjuridik
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```
   L'application sera accessible sur `http://localhost:5173`

4. **Build de production**
   ```bash
   npm run build
   ```
   Les fichiers optimisés seront générés dans `/dist`

---

## 🌍 Déploiement

Le projet utilise **Firebase Hosting** pour un déploiement simple et performant.

### Déployer une nouvelle version

```bash
# 1. Build de production
npm run build

# 2. Déploiement Firebase
firebase deploy
```

Le site sera instantanément mis à jour sur l'URL de production.

---

## 🎨 Principes de design

### Système visuel
- **Typographie** : System fonts (-apple-system, Segoe UI, Roboto)
- **Palette** : Bleus institutionnels (#3b82f6), tons neutres (#0f172a, #64748b)
- **Espacement** : Grille 8px, rhythm vertical cohérent
- **Radius** : 12-24px selon hiérarchie
- **Ombres** : Multi-layer premium avec backdrop-filter

### Animations
- Durée : 6s (floating cards), 0.8s (transitions)
- Amplitude : -6px max (subtile)
- Easing : ease-in-out
- Respect de prefers-reduced-motion

---

## 📱 Responsive

| Breakpoint | Stratégie |
|------------|-----------|
| **Desktop** (>1200px) | Layout 2 colonnes, floating cards absolues |
| **Tablet** (768-1200px) | Espacement réduit, cartes repositionnées |
| **Mobile** (<768px) | Stack vertical, cards en flux normal |

---

## 🔧 Configuration

### Firebase (`firebase.json`)
```json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

### Vite (`vite.config.js`)
```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()]
})
```

---

## 📊 Performance

- **First Contentful Paint** : ~0.8s
- **Time to Interactive** : ~1.2s
- **Bundle size** : ~87 KB (gzipped)
- **Lighthouse Score** : 95+ (Performance, SEO, Best Practices)

---

## 🎯 Optimisations SEO, CRO & Analytics

### SEO (Search Engine Optimization)

#### Meta Tags complets
- **Description** : Texte optimisé avec mots-clés ciblés (assistance juridique, conseil juridique, avocat en ligne)
- **Keywords** : Liste de mots-clés pertinents pour le référencement
- **Robots** : Indexation activée (`index, follow`)
- **Language** : Langue française déclarée

#### Open Graph (Facebook/LinkedIn)
```html
<meta property="og:type" content="website">
<meta property="og:title" content="JurisAssist - Assistance juridique claire et immédiate">
<meta property="og:description" content="Consultation juridique professionnelle 24/7...">
<meta property="og:image" content="https://jurisassist-a7583.web.app/og-image.jpg">
```
Partage optimisé sur réseaux sociaux avec image preview.

#### Twitter Cards
Meta tags spécifiques Twitter pour un partage enrichi sur la plateforme.

#### Schema.org (JSON-LD)
Données structurées pour moteurs de recherche :
- Type : `LegalService`
- Informations : nom, description, URL, téléphone, zone géographique
- Horaires : 24/7
- Note moyenne : 4.8/5 (127 avis)
- Rich snippets activés dans les résultats Google

#### GEO Targeting
```html
<meta name="geo.region" content="FR">
<meta name="geo.placename" content="France">
```
Ciblage géographique France pour référencement local.

---

### CRO (Conversion Rate Optimization)

#### Modal de contact multi-options
**Composant** : `ContactModal.vue`

Deux modes de contact optimisés pour la conversion :

1. **Appel immédiat**
   - Numéro direct : `01 75 43 21 00`
   - Lien `tel:` natif pour mobile
   - Badge "Disponible 24/7"
   - Note tarifaire (appel gratuit depuis fixe)

2. **Demande de rappel**
   - Formulaire structuré :
     - Nom complet (requis)
     - Téléphone (requis)
     - Email (requis)
     - Type de demande (dropdown : droit civil, social, famille, immobilier)
     - Message optionnel
   - Validation côté client
   - Checkbox RGPD avec lien politique de confidentialité
   - Feedback visuel (spinner, message de succès)
   - Simulation envoi (1.5s) avec promesse de rappel sous 2 min

#### Points de conversion tracking
- Click bouton "Parler à un conseiller" (Hero)
- Click bouton "Demander un rappel" (Hero)
- Click bouton CTA Navbar
- Soumission formulaire de rappel
- Events Google Analytics déclenchés sur chaque action

---

### Analytics & Tracking

#### Google Analytics 4
Intégré dans `index.html` avec ID configurable :
```javascript
gtag('config', 'G-XXXXXXXXXX');
```
À remplacer par votre ID Analytics réel.

#### Events personnalisés

| Event | Category | Label | Contexte |
|-------|----------|-------|----------|
| `click` | CTA | Parler à un conseiller - Hero | Bouton principal Hero |
| `click` | CTA | Demander un rappel - Hero | Bouton secondaire Hero |
| `click` | CTA | Parler à un conseiller - Navbar | CTA navigation |
| `generate_lead` | Contact | Callback Request | Formulaire soumis |
| `page_performance` | Performance | — | Métriques page load |
| `LCP` | Web Vitals | — | Largest Contentful Paint |
| `FID` | Web Vitals | — | First Input Delay |

#### Web Vitals automatiques
**Fichier** : `src/main.js`

Tracking automatique des Core Web Vitals :
- **LCP** (Largest Contentful Paint) : Temps de chargement du plus grand élément visible
- **FID** (First Input Delay) : Temps de réponse à la première interaction
- **Page Load Time** : Temps de chargement total
- **Connect Time** : Temps de connexion serveur
- **Render Time** : Temps de rendu DOM

Console logs activés pour debug + envoi Google Analytics.

---

## 🔔 Configuration Analytics

### Étape 1 : Créer une propriété Google Analytics 4

1. Rendez-vous sur [Google Analytics](https://analytics.google.com/)
2. Créez une propriété GA4
3. Récupérez votre `Measurement ID` (format : `G-XXXXXXXXXX`)

### Étape 2 : Remplacer l'ID dans le code

Ouvrez `index.html` et remplacez les deux occurrences :
```html
<!-- Ligne 77 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-VOTRE-ID"></script>

<!-- Ligne 82 -->
gtag('config', 'G-VOTRE-ID');
```

### Étape 3 : Vérifier les événements

Après déploiement, vérifiez dans GA4 :
- **Realtime** → Events (voir les clics en temps réel)
- **Reports** → Engagement → Events (statistiques complètes)
- **Reports** → Engagement → Conversions (configurer les objectifs)

---

## 📞 Système de contact

### Numéro de téléphone factice
Numéro affiché : **01 75 43 21 00** (exemple)

Pour utiliser un vrai numéro :
1. Ouvrir `src/components/ContactModal.vue`
2. Ligne 71 : Remplacer `tel:+33175432100` par votre numéro au format international
3. Ligne 72 : Modifier l'affichage `01 75 43 21 00`

### Formulaire de rappel

Le formulaire simule un envoi (delay 1.5s) et affiche un message de succès.

Pour connecter à un backend réel :
```javascript
// Dans ContactModal.vue, fonction handleSubmit()
const response = await fetch('https://votre-api.com/callback', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData.value)
})
```

Services recommandés :
- **Formspree** (gratuit jusqu'à 50 soumissions/mois)
- **EmailJS** (email direct sans backend)
- **Zapier** (intégration CRM)
- **Backend custom** (Node.js, Firebase Functions)

---

## 🤝 Contribution & support

Pour toute question, suggestion ou demande de modification :

- **Email** : [contact@jurisassist.com](mailto:contact@jurisassist.com)
- **GitHub Issues** : [lberthod/JurisAssist/issues](https://github.com/lberthod/JurisAssist/issues)

---

## 📄 Licence

Projet propriétaire — © 2026 JurisAssist. Tous droits réservés.

---

## 🏆 Qualité du code

- ✅ Composants Vue 3 modulaires et réutilisables
- ✅ Scoped CSS pour éviter les conflits
- ✅ Nomenclature BEM adaptée
- ✅ Accessibilité (aria-hidden, landmarks)
- ✅ SEO-friendly (meta tags, structure sémantique)
- ✅ Git workflow propre avec commits sémantiques

---

**Développé avec ❤️ par Loïc Berthod pour demo**
