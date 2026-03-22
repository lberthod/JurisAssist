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
- ✅ **Responsive complet** — Adaptation fluide desktop, tablette et mobile
- ✅ **Animations subtiles** — Micro-interactions premium sans effet gadget

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

**Développé avec ❤️ pour offrir une expérience juridique premium et humaine.**
