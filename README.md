# JurisAssist - Header Premium Service Juridique

Composant Vue 3 premium modulaire pour site de service juridique / assistant juridique / legal service center.

## 🎯 Caractéristiques

- **Architecture modulaire** : Composants réutilisables et faciles à maintenir
- **Design premium** : Interface haut de gamme adaptée au secteur juridique
- **Vue 3 Composition API** : Code moderne et maintenable
- **Responsive natif** : Desktop, tablet et mobile parfaitement optimisés
- **Animations élégantes** : Micro-interactions subtiles et professionnelles
- **UI Mockup crédible** : Interface de centre d'assistance juridique intégrée
- **Accessibilité** : Structure HTML sémantique et contraste optimal

## 📦 Installation

### 1. Intégration dans un projet Vue 3 existant

```bash
# Copiez le dossier components complet
cp -r src/components /votre-projet/src/
cp src/LegalHeroHeader.vue /votre-projet/src/
```

### 2. Utilisation

```vue
<template>
  <div>
    <LegalHeroHeader />
  </div>
</template>

<script setup>
import LegalHeroHeader from './LegalHeroHeader.vue'
</script>
```

## 🎨 Personnalisation

### Architecture modulaire

Le projet est organisé en composants réutilisables :

```
src/
├── LegalHeroHeader.vue          # Composant principal (layout)
└── components/
    ├── Navbar.vue               # Navigation avec menu mobile
    ├── HeroContent.vue          # Contenu textuel et CTAs
    ├── HeroVisual.vue           # Section visuelle mockup
    ├── AdvisorCard.vue          # Carte du conseiller
    ├── ProcessTimeline.vue      # Timeline du processus
    └── FloatingCards.vue        # Cartes flottantes animées
```

### Couleurs

Les couleurs principales sont définies dans chaque composant. Modifiez-les selon vos besoins :

```css
/* Palette principale */
#0f1e33  /* Navy Dark - Titres */
#1e3a5f  /* Navy - Éléments primaires */
#3b82f6  /* Blue Accent - CTAs */
#d4a574  /* Gold - Accents premium */
#10b981  /* Success Green - Statuts */
```

### Contenu

**Navigation (Navbar.vue)**
- Logo et nom de marque
- Liens de navigation
- Bouton CTA principal

**Contenu Hero (HeroContent.vue)**
- Badge de confiance
- Titre et description
- Boutons d'action
- Indicateurs de confiance

**Section Visuelle (HeroVisual.vue + sous-composants)**
- Carte conseiller (AdvisorCard.vue)
- Timeline de processus (ProcessTimeline.vue)
- Cartes flottantes (FloatingCards.vue)

### Actions des boutons

Modifiez les callbacks dans les composants respectifs :

**Navbar.vue**
```javascript
const handleCTAClick = () => {
  // Action pour le CTA navbar
}
```

**HeroContent.vue**
```javascript
const handlePrimaryAction = () => {
  // Action pour le CTA principal
}

const handleSecondaryAction = () => {
  // Action pour le CTA secondaire (rappel)
}
```

## 🔧 Structure du composant

### LegalHeroHeader.vue (Composant principal)
```
LegalHeroHeader.vue (68 lignes)
├── <Navbar />
└── <Hero Section>
    ├── <HeroContent />
    └── <HeroVisual />
```

### Composants enfants

**Navbar.vue** - Navigation responsive
```
├── Logo et nom de marque (JurisAssist)
├── Navigation desktop (5 liens)
├── CTA principal ("Parler à un conseiller")
└── Menu burger mobile (responsive)
```

**HeroContent.vue** - Contenu marketing
```
├── Badge de confiance
├── Titre principal + highlight
├── Description du service
├── Groupe de CTAs (2 boutons)
└── Indicateurs de confiance (3 items)
```

**HeroVisual.vue** - Mockup interactif
```
├── Card principale
│   ├── Header (statut + badge)
│   ├── <AdvisorCard />
│   └── <ProcessTimeline />
└── <FloatingCards />
```

**AdvisorCard.vue** - Profil conseiller
```
├── Avatar avec gradient
├── Nom et titre
└── Tags de spécialités
```

**ProcessTimeline.vue** - Étapes du processus
```
├── Étape 1: Demande reçue (completed)
├── Étape 2: Analyse en cours (active + animation)
└── Étape 3: Mise en relation (pending)
```

**FloatingCards.vue** - Cards animées
```
├── Card Consultation (24/7 disponible)
├── Card Sécurité (100% Confidentiel)
└── Card Temps de réponse (< 2 min)
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
