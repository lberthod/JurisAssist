PR — Refonte des floating cards du header hero

Objectif : corriger l’alignement, améliorer la cohérence visuelle, stabiliser le responsive, et donner un rendu premium/professionnel aux 3 cartes flottantes du hero.

Contexte

Dans le hero de la landing page “assistant juridique / service center call”, les 3 floating cards :

Consultation
100% Confidentiel
Temps de réponse moyen

ne sont pas perçues comme parfaitement alignées.

Le problème n’est pas le contenu Vue en soi, mais la combinaison de :

positionnement trop arbitraire
tailles visuelles différentes
paddings non harmonisés
manque de grille de composition
alignement optique insuffisant

L’objectif n’est pas de les mettre sur une ligne stricte, mais de les disposer de façon équilibrée, premium, lisible et stable sur desktop puis responsive.

Résultat attendu

Le hero doit donner une impression :

haut de gamme
net
calme
rassurant
juridiquement sérieux
très lisible au premier regard

Les floating cards doivent :

sembler appartenir au même système UI
avoir un langage visuel cohérent
ne jamais gêner la lecture du contenu principal
rester bien placées sur desktop, tablet et mobile
conserver une hiérarchie visuelle claire
Règles UI/UX à appliquer
1. Uniformiser le système visuel des cartes

Toutes les floating cards doivent partager :

même rayon de bordure
même style d’ombre
même traitement de fond
mêmes principes de padding
mêmes dimensions d’icônes
mêmes espacements internes
même vertical rhythm

Même si leur contenu diffère, elles doivent faire partie d’une même famille visuelle.

2. Corriger l’alignement optique

Ne pas chercher un alignement purement mathématique.
Chercher un alignement optique :

la carte “Confidentiel” est plus centrale et plus dominante
la carte “Consultation” sert d’ancrage bas-gauche
la carte “Temps de réponse” sert d’ancrage bas-droite
l’ensemble doit encadrer le contenu principal sans le polluer
3. Éviter le placement “au hasard”

Le placement des cartes doit être basé sur un conteneur position: relative et des positions absolues pensées comme une mini-grille de composition.

4. Gérer le responsive intelligemment

Sur desktop :

disposition flottante assumée

Sur tablet :

repositionnement plus serré
réduction légère des tailles

Sur mobile :

abandon partiel du floating libre si nécessaire
passage à une stack verticale ou à une zone plus structurée
aucune superposition gênante sur le texte ou CTA
Travail demandé au dev
A. Reprendre la structure du composant

Créer un composant propre, par exemple :
HeroFloatingCards.vue

Le composant doit :

rester simple
être autonome
ne contenir que les 3 cartes flottantes
être injecté dans le hero principal
Structure Vue recommandée
<template>
  <div class="hero-floating-cards" aria-hidden="true">
    <div class="floating-card card-security">
      <div class="floating-card-icon icon-security">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="11" width="18" height="10" rx="2" stroke="currentColor" stroke-width="2" />
          <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="currentColor" stroke-width="2" />
        </svg>
      </div>
      <div class="floating-card-text single-line">
        <span class="floating-card-title">100% Confidentiel</span>
      </div>
    </div>

    <div class="floating-card card-consultation">
      <div class="floating-card-icon icon-consultation">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      <div class="floating-card-text">
        <span class="floating-card-title">Consultation</span>
        <span class="floating-card-subtitle">24/7 disponible</span>
      </div>
    </div>

    <div class="floating-card card-response">
      <div class="floating-card-icon icon-response">
        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="1.75" />
          <path d="M10 6V10L12.5 11.5" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" />
        </svg>
      </div>

      <div class="floating-card-text">
        <span class="floating-card-title response-value">&lt; 2 min</span>
        <span class="floating-card-subtitle">Temps de réponse moyen</span>
      </div>
    </div>
  </div>
</template>
B. Intégration dans le hero principal

Le parent du hero visuel doit être en position: relative.

Exemple :

.hero-visual-zone {
  position: relative;
}

Le composant des cartes doit être positionné à l’intérieur de cette zone, pas flottant par rapport au viewport global.

C. CSS complet à implémenter
Base desktop
.hero-floating-cards {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 3;
}

.floating-card {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 18px 22px;
  background: rgba(255, 255, 255, 0.96);
  border: 1px solid rgba(15, 23, 42, 0.06);
  border-radius: 24px;
  box-shadow:
    0 20px 50px rgba(15, 23, 42, 0.10),
    0 4px 16px rgba(15, 23, 42, 0.04);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  pointer-events: none;
  user-select: none;
}

.floating-card-icon {
  width: 56px;
  height: 56px;
  min-width: 56px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.floating-card-icon svg {
  width: 28px;
  height: 28px;
}

.floating-card-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
}

.floating-card-text.single-line {
  justify-content: center;
}

.floating-card-title {
  font-size: 18px;
  line-height: 1.15;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #0f172a;
}

.floating-card-subtitle {
  margin-top: 4px;
  font-size: 14px;
  line-height: 1.3;
  font-weight: 500;
  color: #64748b;
}

.response-value {
  font-size: 19px;
}

/* couleurs icônes */
.icon-consultation {
  background: #eaf1ff;
  color: #3b82f6;
}

.icon-security {
  background: #f8f3ed;
  color: #c79a62;
}

.icon-response {
  background: #eef4ff;
  color: #3b82f6;
}
Placement optique desktop
.card-security {
  top: 18%;
  left: 6%;
  min-width: 330px;
}

.card-consultation {
  left: 1.5%;
  bottom: 14%;
  min-width: 300px;
}

.card-response {
  right: -1%;
  bottom: 9%;
  min-width: 320px;
}
Intention visuelle
card-security : carte flottante de crédibilité, légèrement devant, vers le haut-gauche
card-consultation : carte de disponibilité, bas-gauche, compacte
card-response : carte de performance, bas-droite, équilibrage visuel
D. Animation légère premium

Animation subtile uniquement. Pas d’effet gadget.

.floating-card {
  animation: floatingCardIdle 6s ease-in-out infinite;
}

.card-security {
  animation-delay: 0s;
}

.card-consultation {
  animation-delay: 1.2s;
}

.card-response {
  animation-delay: 2.1s;
}

@keyframes floatingCardIdle {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-6px);
  }
}
Règles
amplitude faible
animation lente
pas de scale
pas de rotation
ne pas perturber la lecture
E. Responsive tablet

Entre 1200px et 768px, resserrer la compo.

@media (max-width: 1200px) {
  .floating-card {
    padding: 16px 18px;
    gap: 14px;
    border-radius: 22px;
  }

  .floating-card-icon {
    width: 50px;
    height: 50px;
    min-width: 50px;
    border-radius: 16px;
  }

  .floating-card-icon svg {
    width: 24px;
    height: 24px;
  }

  .floating-card-title {
    font-size: 16px;
  }

  .floating-card-subtitle {
    font-size: 13px;
  }

  .card-security {
    top: 15%;
    left: 4%;
    min-width: 290px;
  }

  .card-consultation {
    left: 0;
    bottom: 12%;
    min-width: 270px;
  }

  .card-response {
    right: 0;
    bottom: 8%;
    min-width: 290px;
  }
}
F. Mobile

Sur mobile, ne pas forcer les cartes à flotter librement autour du hero si cela gêne.
On veut un rendu propre avant tout.

Stratégie recommandée

Passer en bloc vertical sous ou dans la zone hero visuelle.

@media (max-width: 767px) {
  .hero-floating-cards {
    position: static;
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 20px;
  }

  .floating-card {
    position: relative;
    inset: auto;
    width: 100%;
    min-width: 0;
    padding: 16px;
    border-radius: 20px;
    animation: none;
  }

  .floating-card-icon {
    width: 46px;
    height: 46px;
    min-width: 46px;
    border-radius: 14px;
  }

  .floating-card-title {
    font-size: 16px;
  }

  .floating-card-subtitle {
    font-size: 13px;
  }
}
Important

Sur mobile :

priorité à la lisibilité
pas de chevauchement
pas de débordement horizontal
pas de carte coupée à droite ou à gauche
G. Accessibilité

Même si décoratif, le composant doit rester propre.
Si purement décoratif :

aria-hidden="true" sur le wrapper

Si certaines infos sont importantes et uniques, les dupliquer sémantiquement ailleurs dans la page pour l’accessibilité.

H. Points de contrôle QA

Le dev doit vérifier :

Desktop
aucune carte n’empiète sur le texte principal
aucune carte ne touche le bord du viewport
les 3 cartes semblent visuellement équilibrées
les ombres sont cohérentes
les icônes ont exactement la même logique de cadre
Tablet
les cartes restent lisibles
pas de collision
aucune carte ne sort du parent hero
Mobile
stack propre
aucun overflow horizontal
CTA et texte principal restent prioritaires
I. Ajustements visuels précis à ne pas négliger

Le dev doit aussi :

harmoniser les hauteurs perçues
garder une largeur généreuse pour “100% Confidentiel”
éviter que “Temps de réponse moyen” passe trop tôt à la ligne
ne pas utiliser des positions au pixel figé sans logique responsive
éviter les ombres trop lourdes
garder beaucoup d’air autour des cards
J. Critères d’acceptation

Le PR est validé si :

les 3 cards donnent une impression de système cohérent
le hero paraît plus premium et mieux composé
le rendu est propre sur desktop, tablet, mobile
aucune carte ne semble placée “au hasard”
l’ensemble paraît juridique, rassurant, moderne et sérieux
K. Note design à transmettre au dev

On cherche un rendu :

type legal tech premium
minimal mais humain
rassurant
clair
sobre
légèrement institutionnel
jamais startup gadget
L. Recommandation bonus

Si besoin, ajouter une prop pour contrôler l’activation des floating cards :

<HeroFloatingCards v-if="!isMobile" />

et sur mobile utiliser une version plus linéaire dans le flux normal.

Mais si le CSS responsive suffit, garder un seul composant est préférable.

Message court à envoyer au dev

Tu peux lui envoyer ceci :
