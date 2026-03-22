# Header Premium - Service Juridique

Composant Vue 3 premium pour site de service juridique / assistant juridique / legal service center.

## 🎯 Caractéristiques

- **Design premium** : Interface haut de gamme adaptée au secteur juridique
- **Vue 3 Composition API** : Code moderne et maintenable
- **Responsive natif** : Desktop, tablet et mobile parfaitement optimisés
- **Animations élégantes** : Micro-interactions subtiles et professionnelles
- **UI Mockup crédible** : Interface de centre d'assistance juridique intégrée
- **Accessibilité** : Structure HTML sémantique et contraste optimal

## 📦 Installation

### 1. Intégration dans un projet Vue 3 existant

```bash
# Copiez le fichier LegalHeroHeader.vue dans votre dossier components
cp LegalHeroHeader.vue src/components/
```

### 2. Utilisation

```vue
<template>
  <div>
    <LegalHeroHeader />
  </div>
</template>

<script setup>
import LegalHeroHeader from './components/LegalHeroHeader.vue'
</script>
```

## 🎨 Personnalisation

### Couleurs

Les couleurs principales sont définies dans les variables CSS du composant :

```css
--color-navy-dark: #0f1e33;
--color-navy: #1e3a5f;
--color-blue-accent: #3b82f6;
--color-gold: #d4a574;
```

### Contenu

Modifiez directement le contenu dans le template :

- **Titre principal** : Ligne 91-94
- **Description** : Ligne 96-98
- **CTAs** : Lignes 101-112
- **Trust indicators** : Lignes 114-139

### Actions des boutons

Les fonctions de callback sont définies dans le script :

```javascript
const handleCTAClick = () => {
  // Action pour le CTA navbar
}

const handlePrimaryAction = () => {
  // Action pour le CTA principal
}

const handleSecondaryAction = () => {
  // Action pour le CTA secondaire
}
```

## 🔧 Structure du composant

```
LegalHeroHeader.vue
├── Navbar premium
│   ├── Logo et nom de marque
│   ├── Navigation desktop
│   ├── CTA principal
│   └── Menu burger mobile
│
└── Hero Section
    ├── Colonne gauche
    │   ├── Badge trust
    │   ├── Titre principal
    │   ├── Description
    │   ├── Groupe CTA
    │   └── Indicateurs de confiance
    │
    └── Colonne droite (UI Mockup)
        ├── Card principale
        │   ├── Statut disponibilité
        │   ├── Profil conseiller
        │   └── Timeline de prise en charge
        │
        └── Cards flottantes
            ├── Consultation 24/7
            ├── Sécurité / Confidentialité
            └── Temps de réponse
```

## 📱 Responsive Breakpoints

- **Desktop** : > 900px - Layout deux colonnes
- **Tablet** : 640px - 900px - Layout adaptatif
- **Mobile** : < 640px - Layout une colonne avec menu burger

## ✨ Animations incluses

- **Fade in** au chargement de la page
- **Float animation** sur les cards
- **Pulse** sur les indicateurs de statut
- **Hover states** élégants sur tous les éléments interactifs
- **Transitions fluides** pour le menu mobile

## 🎯 UX/UI Premium

### Typographie
- Système de tailles hiérarchisées
- Font-weight optimisé pour la lisibilité
- Letter-spacing ajusté pour un rendu premium

### Spacing
- Système d'espacement cohérent
- Respiration premium entre les sections
- Padding et margin optimisés

### Ombres et profondeur
- Shadows subtiles et élégantes
- Glassmorphism sur la navbar
- Effet de profondeur sur les cards

## 🚀 Performance

- **CSS scoped** : Pas de conflit de styles
- **Animations GPU** : Utilisation de transform et opacity
- **Lazy loading ready** : Compatible avec le lazy loading d'images
- **Aucune dépendance externe** : CSS et SVG purs

## 🎨 Palette de couleurs

| Couleur | Usage | Hex |
|---------|-------|-----|
| Navy Dark | Titres principaux | `#0f1e33` |
| Navy | Éléments primaires | `#1e3a5f` |
| Blue Accent | CTA et interactions | `#3b82f6` |
| Gold | Accents premium | `#d4a574` |
| Success Green | Statuts positifs | `#10b981` |

## 📋 SEO et Accessibilité

- Structure HTML5 sémantique
- Balises `<nav>`, `<section>`, `<h1>`, etc.
- Attributs ARIA appropriés
- Contraste minimum WCAG AA
- Focus states visibles
- Navigation au clavier

## 🔄 États interactifs

- **Hover** : Élévation et changement de couleur
- **Active** : Feedback visuel immédiat
- **Focus** : Outline personnalisé pour accessibilité
- **Disabled** : Style distinct si nécessaire

## 💡 Conseils d'utilisation

1. **Personnalisez le contenu** selon votre service juridique spécifique
2. **Connectez les CTAs** à vos systèmes de prise de contact
3. **Adaptez les couleurs** à votre charte graphique si nécessaire
4. **Testez sur mobile** pour valider l'expérience utilisateur
5. **Ajoutez des analytics** sur les clics des CTAs

## 🎯 Conversion optimisée

Le header est conçu pour maximiser la conversion avec :

- **CTAs visibles** sans scroll nécessaire
- **Proposition de valeur claire** immédiatement lisible
- **Éléments de réassurance** stratégiquement placés
- **Design crédible** qui inspire confiance
- **Parcours utilisateur simple** et direct

## 📝 License

Ce composant est fourni pour usage dans votre projet de service juridique.

---

**Développé avec Vue 3 Composition API**  
Design premium pour services juridiques professionnels
