<template>
  <div class="legal-header">
    <Navbar />

    <section class="hero-section">
      <div class="hero-container">
        <HeroContent />
        <HeroVisual />
      </div>
    </section>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import HeroContent from './components/HeroContent.vue'
import HeroVisual from './components/HeroVisual.vue'
</script>

<style scoped>
.legal-header {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
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

@media (max-width: 900px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
}

@media (max-width: 640px) {
  .hero-section {
    padding: 8rem 1.25rem 4rem;
  }
}
</style>