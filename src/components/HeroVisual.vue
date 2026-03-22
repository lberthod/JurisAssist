<template>
  <div class="hero-visual">
    <div class="mockup-container">
      <div class="mockup-card main-card">
        <div class="card-header">
          <div class="status-indicator">
            <span class="status-dot"></span>
            <span class="status-text">Assistance disponible</span>
          </div>
          <div class="card-badge">En ligne</div>
        </div>

        <AdvisorCard />
        <ProcessTimeline />
      </div>

      <FloatingCards />
    </div>
  </div>
</template>

<script setup>
import AdvisorCard from './AdvisorCard.vue'
import ProcessTimeline from './ProcessTimeline.vue'
import FloatingCards from './FloatingCards.vue'
</script>

<style scoped>
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
  background: #ffffff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
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
  border-bottom: 1px solid #e2e8f0;
}

.status-indicator {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.status-dot {
  width: 8px;
  height: 8px;
  background: #10b981;
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
  color: #334155;
}

.card-badge {
  padding: 0.375rem 0.875rem;
  background: rgba(16, 185, 129, 0.1);
  color: #10b981;
  border-radius: 20px;
  font-size: 0.8125rem;
  font-weight: 600;
}

@media (max-width: 900px) {
  .mockup-container {
    min-height: 480px;
  }
}
</style>
