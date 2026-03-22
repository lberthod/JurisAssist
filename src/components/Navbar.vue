<template>
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

      <div class="navbar-menu" :class="{ 'menu-open': isMobileMenuOpen }">
        <ul class="nav-links">
          <li><a href="#accueil" class="nav-link">Accueil</a></li>
          <li><a href="#services" class="nav-link">Services</a></li>
          <li><a href="#fonctionnement" class="nav-link">Fonctionnement</a></li>
          <li><a href="#assistance" class="nav-link">Assistance</a></li>
          <li><a href="#contact" class="nav-link">Contact</a></li>
          <li><a href="#Login" class="nav-link">Login</a></li>
        </ul>
        
        <button class="btn-navbar-cta" @click="handleCTAClick">
          <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 16.92V19.92C22 20.4696 21.5523 20.9152 21.0028 20.9194C18.0456 20.9605 15.1809 19.8251 12.93 17.7302C10.8575 15.8006 9.4576 13.2554 8.92 10.4802C8.74877 9.62582 8.94562 8.73811 9.46942 8.03692L10.49 6.69002C10.8361 6.24605 10.7708 5.61261 10.34 5.24002L7.50997 2.96002C7.04141 2.55625 6.34485 2.59867 5.92997 3.05002L4.69997 4.44002C3.78457 5.48637 3.35576 6.88171 3.51997 8.27002C4.01092 12.2727 5.94926 15.9674 8.99997 18.73C12.1452 21.584 16.2122 23.2401 20.45 23.38C21.8359 23.4287 23.1736 22.8767 24.12 21.87L25.38 20.49C25.8007 20.0353 25.8246 19.3322 25.43 18.85L23.02 16.09C22.6474 15.6592 22.0139 15.5939 21.57 15.94L20.22 16.96C19.5188 17.4838 18.631 17.6806 17.7766 17.5094C14.9914 16.974 12.4662 15.5741 10.5366 13.5016C8.43171 11.2507 7.29629 8.38602 7.33997 5.42882C7.34418 4.87929 7.78981 4.43158 8.33937 4.43158H11.34C11.7897 4.43158 12.1554 4.79732 12.1554 5.24696V6.92C12.1554 7.36964 12.5211 7.73538 12.9708 7.73538H14.65" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Parler à un conseiller
        </button>
      </div>

      <button class="menu-toggle" @click="toggleMobileMenu" aria-label="Toggle menu">
        <span class="menu-icon" :class="{ 'menu-icon-open': isMobileMenuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>
    </div>

    <ContactModal :isOpen="isContactModalOpen" @close="closeContactModal" />
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import ContactModal from './ContactModal.vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const isContactModalOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const handleCTAClick = () => {
  isContactModalOpen.value = true
  isMobileMenuOpen.value = false
  if (typeof gtag !== 'undefined') {
    gtag('event', 'click', {
      event_category: 'CTA',
      event_label: 'Parler à un conseiller - Navbar'
    })
  }
}

const closeContactModal = () => {
  isContactModalOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
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
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
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
  color: #1e3a5f;
}

.brand-name {
  font-size: 1.375rem;
  font-weight: 700;
  color: #0f1e33;
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
  color: #334155;
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
  background: #1e3a5f;
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: #1e3a5f;
}

.nav-link:hover::after {
  width: 100%;
}

.btn-navbar-cta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: #1e3a5f;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 0.9375rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.btn-navbar-cta .icon {
  width: 18px;
  height: 18px;
}

.btn-navbar-cta:hover {
  background: #0f1e33;
  transform: translateY(-1px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
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
  background: #1e3a5f;
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
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
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
    border-bottom: 1px solid #e2e8f0;
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
}

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
}
</style>
