<template>
  <div class="legal-header">
    <!-- Premium Navbar -->
    <nav class="navbar" :class="{ 'navbar-scrolled': isScrolled }">
      <div class="navbar-container">
        <div class="navbar-brand">
          <div class="logo-wrapper">
            <svg class="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L3 7V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 8V12L14.5 13.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span class="brand-name">JurisAssist</span>
          </div>
        </div>

        <!-- Desktop Navigation -->
        <div class="navbar-menu" :class="{ 'menu-open': isMobileMenuOpen }">
          <ul class="nav-links">
            <li><a href="#accueil" class="nav-link">Accueil</a></li>
            <li><a href="#services" class="nav-link">Services</a></li>
            <li><a href="#fonctionnement" class="nav-link">Fonctionnement</a></li>
            <li><a href="#assistance" class="nav-link">Assistance</a></li>
            <li><a href="#contact" class="nav-link">Contact</a></li>
          </ul>
          
          <button class="btn-navbar-cta" @click="handleCTAClick">
            <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 16.92V19.92C22 20.4696 21.5523 20.9152 21.0028 20.9194C18.0456 20.9605 15.1809 19.8251 12.93 17.7302C10.8575 15.8006 9.4576 13.2554 8.92 10.4802C8.74877 9.62582 8.94562 8.73811 9.46942 8.03692L10.49 6.69002C10.8361 6.24605 10.7708 5.61261 10.34 5.24002L7.50997 2.96002C7.04141 2.55625 6.34485 2.59867 5.92997 3.05002L4.69997 4.44002C3.78457 5.48637 3.35576 6.88171 3.51997 8.27002C4.01092 12.2727 5.94926 15.9674 8.99997 18.73C12.1452 21.584 16.2122 23.2401 20.45 23.38C21.8359 23.4287 23.1736 22.8767 24.12 21.87L25.38 20.49C25.8007 20.0353 25.8246 19.3322 25.43 18.85L23.02 16.09C22.6474 15.6592 22.0139 15.5939 21.57 15.94L20.22 16.96C19.5188 17.4838 18.631 17.6806 17.7766 17.5094C14.9914 16.974 12.4662 15.5741 10.5366 13.5016C8.43171 11.2507 7.29629 8.38602 7.33997 5.42882C7.34418 4.87929 7.78981 4.43158 8.33937 4.43158H11.34C11.7897 4.43158 12.1554 4.79732 12.1554 5.24696V6.92C12.1554 7.36964 12.5211 7.73538 12.9708 7.73538H14.65" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Parler à un conseiller
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button class="menu-toggle" @click="toggleMobileMenu" aria-label="Toggle menu">
          <span class="menu-icon" :class="{ 'menu-icon-open': isMobileMenuOpen }">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-container">
        <!-- Left Column: Content -->
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

        <!-- Right Column: UI Mockup -->
        <div class="hero-visual">
          <div class="mockup-container">
            <!-- Main Card -->
            <div class="mockup-card main-card">
              <div class="card-header">
                <div class="status-indicator">
                  <span class="status-dot"></span>
                  <span class="status-text">Assistance disponible</span>
                </div>
                <div class="card-badge">En ligne</div>
              </div>

              <div class="advisor-section">
                <div class="advisor-avatar">
                  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="20" fill="url(#gradient1)"/>
                    <path d="M20 20C22.7614 20 25 17.7614 25 15C25 12.2386 22.7614 10 20 10C17.2386 10 15 12.2386 15 15C15 17.7614 17.2386 20 20 20Z" fill="white" opacity="0.9"/>
                    <path d="M12 30C12 26.6863 14.6863 24 18 24H22C25.3137 24 28 26.6863 28 30" fill="white" opacity="0.9"/>
                    <defs>
                      <linearGradient id="gradient1" x1="0" y1="0" x2="40" y2="40">
                        <stop offset="0%" stop-color="#1e3a5f"/>
                        <stop offset="100%" stop-color="#2d5a8c"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div class="advisor-info">
                  <h3 class="advisor-name">Me. Sophie Laurent</h3>
                  <p class="advisor-title">Conseillère juridique senior</p>
                  <div class="advisor-specialties">
                    <span class="specialty-tag">Droit civil</span>
                    <span class="specialty-tag">Droit social</span>
                  </div>
                </div>
              </div>

              <div class="process-timeline">
                <div class="timeline-item completed">
                  <div class="timeline-icon">
                    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 8L7 11L12 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div class="timeline-content">
                    <span class="timeline-label">Demande reçue</span>
                  </div>
                </div>
                <div class="timeline-item active">
                  <div class="timeline-icon">
                    <div class="pulse-ring"></div>
                    <span class="timeline-number">2</span>
                  </div>
                  <div class="timeline-content">
                    <span class="timeline-label">Analyse en cours</span>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="timeline-icon">
                    <span class="timeline-number">3</span>
                  </div>
                  <div class="timeline-content">
                    <span class="timeline-label">Mise en relation</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Floating Cards -->
            <div class="floating-card card-consultation">
              <div class="floating-card-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="floating-card-content">
                <span class="floating-card-title">Consultation</span>
                <span class="floating-card-subtitle">24/7 disponible</span>
              </div>
            </div>

            <div class="floating-card card-security">
              <div class="floating-card-icon security-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" stroke-width="2"/>
                  <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>
              <span class="floating-card-label">100% Confidentiel</span>
            </div>

            <div class="floating-card card-response">
              <div class="response-time">
                <svg class="response-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="1.5"/>
                  <path d="M10 6V10L12.5 11.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
                <div class="response-content">
                  <span class="response-value">&lt; 2 min</span>
                  <span class="response-label">Temps de réponse moyen</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const handleCTAClick = () => {
  console.log('CTA clicked: Parler à un conseiller')
}

const handlePrimaryAction = () => {
  console.log('Primary action: Parler à un conseiller')
}

const handleSecondaryAction = () => {
  console.log('Secondary action: Demander un rappel')
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* ==================== */
/* Base & Variables     */
/* ==================== */
:root {
  --color-navy-dark: #0f1e33;
  --color-navy: #1e3a5f;
  --color-navy-light: #2d5a8c;
  --color-blue-accent: #3b82f6;
  --color-gold: #d4a574;
  --color-white: #ffffff;
  --color-gray-50: #f8fafc;
  --color-gray-100: #f1f5f9;
  --color-gray-200: #e2e8f0;
  --color-gray-300: #cbd5e1;
  --color-gray-400: #94a3b8;
  --color-gray-500: #64748b;
  --color-gray-600: #475569;
  --color-gray-700: #334155;
  --color-gray-800: #1e293b;
  --color-success: #10b981;
  
  --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.legal-header {
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

.legal-header::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -20%;
  width: 800px;
  height: 800px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.04) 0%, transparent 70%);
  pointer-events: none;
}

/* ==================== */
/* Navbar Premium       */
/* ==================== */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(226, 232, 240, 0.6);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.navbar-scrolled {
  background: rgba(255, 255, 255, 0.95);
  box-shadow: var(--shadow-md);
}

.navbar-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.logo-wrapper {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.logo-icon {
  width: 32px;
  height: 32px;
  color: var(--color-navy);
}

.brand-name {
  font-size: 1.375rem;
  font-weight: 700;
  color: var(--color-navy-dark);
  letter-spacing: -0.02em;
}

.navbar-menu {
  display: flex;
  align-items: center;
  gap: 2.5rem;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;
}

.nav-link {
  color: var(--color-gray-700);
  text-decoration: none;
  font-size: 0.9375rem;
  font-weight: 500;
  transition: color 0.2s ease;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-navy);
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: var(--color-navy);
}

.nav-link:hover::after {
  width: 100%;
}

.btn-navbar-cta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: var(--color-navy);
  color: var(--color-white);
  border: none;
  border-radius: 8px;
  font-size: 0.9375rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-sm);
}

.btn-navbar-cta .icon {
  width: 18px;
  height: 18px;
}

.btn-navbar-cta:hover {
  background: var(--color-navy-dark);
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.btn-navbar-cta:active {
  transform: translateY(0);
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.menu-icon {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 24px;
}

.menu-icon span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--color-navy);
  transition: all 0.3s ease;
  border-radius: 2px;
}

.menu-icon-open span:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.menu-icon-open span:nth-child(2) {
  opacity: 0;
}

.menu-icon-open span:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* ==================== */
/* Hero Section         */
/* ==================== */
.hero-section {
  padding: 10rem 2rem 6rem;
  position: relative;
}

.hero-container {
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
}

/* Left Column */
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
  color: var(--color-navy);
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1.75rem;
}

.badge-icon {
  width: 20px;
  height: 20px;
  color: var(--color-navy);
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.15;
  color: var(--color-navy-dark);
  margin-bottom: 1.5rem;
  letter-spacing: -0.03em;
}

.title-highlight {
  color: var(--color-navy);
  position: relative;
  display: inline-block;
}

.hero-description {
  font-size: 1.125rem;
  line-height: 1.75;
  color: var(--color-gray-600);
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
  background: var(--color-navy);
  color: var(--color-white);
  box-shadow: 0 4px 14px 0 rgba(30, 58, 95, 0.25);
}

.btn-primary:hover {
  background: var(--color-navy-dark);
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
  color: var(--color-navy);
  border: 2px solid var(--color-gray-300);
}

.btn-secondary:hover {
  border-color: var(--color-navy);
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
  color: var(--color-navy);
  flex-shrink: 0;
}

.trust-item span {
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--color-gray-700);
}

/* Right Column - UI Mockup */
.hero-visual {
  position: relative;
  animation: fadeInRight 0.8s ease-out 0.2s both;
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.mockup-container {
  position: relative;
  width: 100%;
  min-height: 520px;
}

.mockup-card {
  background: var(--color-white);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: var(--shadow-2xl);
  border: 1px solid rgba(226, 232, 240, 0.8);
}

.main-card {
  position: relative;
  z-index: 2;
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.75rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid var(--color-gray-200);
}

.status-indicator {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.status-dot {
  width: 8px;
  height: 8px;
  background: var(--color-success);
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.status-text {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-gray-700);
}

.card-badge {
  padding: 0.375rem 0.875rem;
  background: rgba(16, 185, 129, 0.1);
  color: var(--color-success);
  border-radius: 20px;
  font-size: 0.8125rem;
  font-weight: 600;
}

.advisor-section {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

.advisor-avatar {
  flex-shrink: 0;
}

.advisor-avatar svg {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  box-shadow: var(--shadow-md);
}

.advisor-info {
  flex: 1;
}

.advisor-name {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--color-navy-dark);
  margin-bottom: 0.25rem;
}

.advisor-title {
  font-size: 0.875rem;
  color: var(--color-gray-600);
  margin-bottom: 0.75rem;
}

.advisor-specialties {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.specialty-tag {
  padding: 0.25rem 0.75rem;
  background: rgba(30, 58, 95, 0.08);
  color: var(--color-navy);
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
}

.process-timeline {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.timeline-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
}

.timeline-item:not(:last-child)::after {
  content: '';
  position: absolute;
  left: 15px;
  top: 32px;
  width: 2px;
  height: 100%;
  background: var(--color-gray-200);
}

.timeline-item.completed::after {
  background: var(--color-success);
}

.timeline-item.active::after {
  background: linear-gradient(to bottom, var(--color-blue-accent), var(--color-gray-200));
}

.timeline-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
  background: var(--color-white);
  border: 2px solid var(--color-gray-300);
  transition: all 0.3s ease;
}

.timeline-item.completed .timeline-icon {
  background: var(--color-success);
  border-color: var(--color-success);
}

.timeline-item.completed .timeline-icon svg {
  width: 16px;
  height: 16px;
  color: var(--color-white);
}

.timeline-item.active .timeline-icon {
  background: var(--color-blue-accent);
  border-color: var(--color-blue-accent);
}

.timeline-item.active .timeline-icon .pulse-ring {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 2px solid var(--color-blue-accent);
  border-radius: 50%;
  animation: pulseRing 2s ease-out infinite;
}

@keyframes pulseRing {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}

.timeline-number {
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--color-white);
}

.timeline-item.active .timeline-number {
  color: var(--color-white);
}

.timeline-item:not(.completed):not(.active) .timeline-number {
  color: var(--color-gray-500);
}

.timeline-content {
  flex: 1;
}

.timeline-label {
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--color-gray-700);
}

.timeline-item.completed .timeline-label {
  color: var(--color-gray-600);
}

.timeline-item.active .timeline-label {
  color: var(--color-navy);
}

/* Floating Cards */
.floating-card {
  position: absolute;
  background: var(--color-white);
  border-radius: 12px;
  padding: 1rem 1.25rem;
  box-shadow: var(--shadow-xl);
  border: 1px solid rgba(226, 232, 240, 0.8);
  z-index: 3;
  animation: floatSlow 8s ease-in-out infinite;
}

@keyframes floatSlow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
}

.card-consultation {
  top: -20px;
  right: -40px;
  display: flex;
  align-items: center;
  gap: 0.875rem;
  animation-delay: -2s;
}

.floating-card-icon {
  width: 40px;
  height: 40px;
  background: rgba(59, 130, 246, 0.1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.floating-card-icon svg {
  width: 22px;
  height: 22px;
  color: var(--color-blue-accent);
}

.floating-card-icon.security-icon {
  background: rgba(212, 165, 116, 0.1);
}

.floating-card-icon.security-icon svg {
  color: var(--color-gold);
}

.floating-card-content {
  display: flex;
  flex-direction: column;
}

.floating-card-title {
  font-size: 0.9375rem;
  font-weight: 700;
  color: var(--color-navy-dark);
}

.floating-card-subtitle {
  font-size: 0.75rem;
  color: var(--color-gray-600);
}

.card-security {
  bottom: 40px;
  left: -60px;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  animation-delay: -4s;
}

.floating-card-label {
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--color-navy-dark);
}

.card-response {
  top: 50%;
  right: -80px;
  transform: translateY(-50%);
  animation-delay: -6s;
}

.response-time {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.response-icon {
  width: 36px;
  height: 36px;
  color: var(--color-blue-accent);
  flex-shrink: 0;
}

.response-content {
  display: flex;
  flex-direction: column;
}

.response-value {
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--color-navy-dark);
  line-height: 1.2;
}

.response-label {
  font-size: 0.75rem;
  color: var(--color-gray-600);
  white-space: nowrap;
}

/* ==================== */
/* Responsive Design    */
/* ==================== */

/* Tablet */
@media (max-width: 1024px) {
  .hero-container {
    gap: 3rem;
  }
  
  .hero-title {
    font-size: 3rem;
  }
  
  .card-consultation {
    right: -20px;
  }
  
  .card-security {
    left: -30px;
  }
  
  .card-response {
    right: -40px;
  }
}

@media (max-width: 900px) {
  .navbar-container {
    padding: 1rem 1.5rem;
  }
  
  .navbar-menu {
    position: fixed;
    top: 72px;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(12px);
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    padding: 1.5rem;
    box-shadow: var(--shadow-lg);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .navbar-menu.menu-open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
  
  .nav-links {
    flex-direction: column;
    gap: 0;
    width: 100%;
  }
  
  .nav-links li {
    width: 100%;
  }
  
  .nav-link {
    display: block;
    padding: 1rem 0;
    border-bottom: 1px solid var(--color-gray-200);
  }
  
  .nav-link::after {
    display: none;
  }
  
  .btn-navbar-cta {
    width: 100%;
    justify-content: center;
    margin-top: 1rem;
  }
  
  .menu-toggle {
    display: block;
  }
  
  .hero-container {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
  
  .hero-content {
    order: 1;
  }
  
  .hero-visual {
    order: 2;
  }
  
  .mockup-container {
    min-height: 480px;
  }
}

/* Mobile */
@media (max-width: 640px) {
  .navbar-container {
    padding: 1rem;
  }
  
  .brand-name {
    font-size: 1.125rem;
  }
  
  .logo-icon {
    width: 28px;
    height: 28px;
  }
  
  .hero-section {
    padding: 8rem 1.25rem 4rem;
  }
  
  .hero-title {
    font-size: 2.25rem;
  }
  
  .hero-description {
    font-size: 1rem;
  }
  
  .cta-group {
    flex-direction: column;
    width: 100%;
  }
  
  .btn-primary,
  .btn-secondary {
    width: 100%;
    justify-content: center;
  }
  
  .trust-indicators {
    flex-direction: column;
    gap: 1rem;
  }
  
  .mockup-container {
    min-height: 420px;
  }
  
  .mockup-card {
    padding: 1.5rem;
  }
  
  .card-consultation {
    top: -10px;
    right: -10px;
    padding: 0.75rem 1rem;
  }
  
  .floating-card-icon {
    width: 36px;
    height: 36px;
  }
  
  .floating-card-icon svg {
    width: 20px;
    height: 20px;
  }
  
  .floating-card-title {
    font-size: 0.875rem;
  }
  
  .floating-card-subtitle {
    font-size: 0.6875rem;
  }
  
  .card-security {
    bottom: 30px;
    left: -10px;
    padding: 0.625rem 1rem;
  }
  
  .floating-card-label {
    font-size: 0.8125rem;
  }
  
  .card-response {
    right: -10px;
    padding: 0.875rem 1rem;
  }
  
  .response-icon {
    width: 32px;
    height: 32px;
  }
  
  .response-value {
    font-size: 1.125rem;
  }
  
  .advisor-avatar svg {
    width: 56px;
    height: 56px;
  }
  
  .advisor-name {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .badge-trust {
    font-size: 0.8125rem;
    padding: 0.4rem 0.875rem;
  }
  
  .trust-item span {
    font-size: 0.875rem;
  }
}
</style>
