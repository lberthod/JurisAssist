<template>
  <div class="hero-content">
    <div class="badge-trust">
      <svg class="badge-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 2L3 5.5V9C3 13.5 6 17.5 10 18.5C14 17.5 17 13.5 17 9V5.5L10 2Z" fill="currentColor" opacity="0.2"/>
        <path d="M10 2L3 5.5V9C3 13.5 6 17.5 10 18.5C14 17.5 17 13.5 17 9V5.5L10 2Z" stroke="currentColor" stroke-width="1.5"/>
        <path d="M7 10L9 12L13 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span>Assistance juridique disponible</span>
    </div>

    <h1 class="hero-title">
      Votre assistance juridique,<br>
      <span class="title-highlight">claire et immédiate</span>
    </h1>

    <p class="hero-description">
      Obtenez une première orientation, une assistance structurée et un accompagnement clair pour vos démarches juridiques, avec une approche humaine, rapide et professionnelle.
    </p>

    <div class="cta-group">
      <button class="btn-primary" @click="handlePrimaryAction">
        <svg class="btn-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 16.92V19.92C22.0011 20.4622 21.5641 20.9119 21.0244 20.9194C18.0237 20.9605 15.1163 19.8044 12.83 17.6702C10.72 15.7206 9.28 13.1066 8.73 10.2602C8.55877 9.38549 8.76102 8.47793 9.29 7.76018L10.35 6.38018C10.7048 5.92738 10.6379 5.27814 10.19 4.90018L7.29 2.56018C6.80546 2.14999 6.0873 2.19244 5.65 2.66018L4.38 4.08018C3.44945 5.13714 3.01333 6.55006 3.18 7.96018C3.68 12.0402 5.66 15.8102 8.76 18.6302C11.9664 21.554 16.1231 23.2605 20.46 23.4002C21.8703 23.4499 23.2299 22.8833 24.19 21.8502L25.48 20.4302C25.9084 19.9677 25.9314 19.2533 25.53 18.7602L23.06 15.9402C22.68 15.5002 22.0298 15.4322 21.57 15.7902L20.18 16.8302C19.4636 17.3632 18.5597 17.5638 17.6866 17.3902C14.8498 16.8445 12.2734 15.4147 10.3 13.3402C8.15678 11.0439 6.99775 8.11006 7.04 5.08018C7.04423 4.52047 7.5019 4.06018 8.06161 4.06018H11.14C11.5996 4.06018 11.9734 4.43393 11.9734 4.89353V6.62018" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Parler à un conseiller
      </button>
      <button class="btn-secondary" @click="handleSecondaryAction">
        Demander un rappel
        <svg class="btn-icon-right" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>

    <ContactModal :isOpen="isModalOpen" @close="closeModal" />

    <div class="trust-indicators">
      <div class="trust-item">
        <svg class="trust-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 8V12L14.5 13.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/>
        </svg>
        <span>Réponse rapide</span>
      </div>
      <div class="trust-item">
        <svg class="trust-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="2"/>
          <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>Conseillers formés</span>
      </div>
      <div class="trust-item">
        <svg class="trust-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" stroke-width="2"/>
          <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>Parcours confidentiel</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ContactModal from './ContactModal.vue'

const isModalOpen = ref(false)

const handlePrimaryAction = () => {
  isModalOpen.value = true
  if (typeof gtag !== 'undefined') {
    gtag('event', 'click', {
      event_category: 'CTA',
      event_label: 'Parler à un conseiller - Hero'
    })
  }
}

const handleSecondaryAction = () => {
  isModalOpen.value = true
  if (typeof gtag !== 'undefined') {
    gtag('event', 'click', {
      event_category: 'CTA',
      event_label: 'Demander un rappel - Hero'
    })
  }
}

const closeModal = () => {
  isModalOpen.value = false
}
</script>

<style scoped>
.hero-content {
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.badge-trust {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(30, 58, 95, 0.06);
  border: 1px solid rgba(30, 58, 95, 0.1);
  border-radius: 50px;
  color: #1e3a5f;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1.75rem;
}

.badge-icon {
  width: 20px;
  height: 20px;
  color: #1e3a5f;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.15;
  color: #0f1e33;
  margin-bottom: 1.5rem;
  letter-spacing: -0.03em;
}

.title-highlight {
  color: #1e3a5f;
  position: relative;
  display: inline-block;
}

.hero-description {
  font-size: 1.125rem;
  line-height: 1.75;
  color: #475569;
  margin-bottom: 2.5rem;
  max-width: 540px;
}

.cta-group {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.btn-primary,
.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: none;
  font-family: inherit;
}

.btn-primary {
  background: #1e3a5f;
  color: #ffffff;
  box-shadow: 0 4px 14px 0 rgba(30, 58, 95, 0.25);
}

.btn-primary:hover {
  background: #0f1e33;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px 0 rgba(30, 58, 95, 0.35);
}

.btn-primary:active {
  transform: translateY(0);
}

.btn-icon {
  width: 20px;
  height: 20px;
}

.btn-secondary {
  background: transparent;
  color: #1e3a5f;
  border: 2px solid #cbd5e1;
}

.btn-secondary:hover {
  border-color: #1e3a5f;
  background: rgba(30, 58, 95, 0.04);
  transform: translateY(-2px);
}

.btn-icon-right {
  width: 18px;
  height: 18px;
}

.trust-indicators {
  display: flex;
  gap: 2.5rem;
  flex-wrap: wrap;
}

.trust-item {
  display: flex;
  align-items: center;
  gap: 0.625rem;
}

.trust-icon {
  width: 22px;
  height: 22px;
  color: #1e3a5f;
  flex-shrink: 0;
}

.trust-item span {
  font-size: 0.9375rem;
  font-weight: 500;
  color: #334155;
}

@media (max-width: 1024px) {
  .hero-title {
    font-size: 3rem;
  }
}

@media (max-width: 640px) {
  .hero-title {
    font-size: 2.25rem;
  }
}
</style>
