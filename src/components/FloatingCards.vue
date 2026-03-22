<template>
  <div class="floating-cards">
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
</template>

<style scoped>
.floating-cards {
  position: relative;
  width: 100%;
  height: 100%;
}

.floating-card {
  position: absolute;
  background: #ffffff;
  border-radius: 12px;
  padding: 1rem 1.25rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
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
  top: 50%;
  left: -140px;
  transform: translateY(-50%);
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
  color: #3b82f6;
}

.floating-card-icon.security-icon {
  background: rgba(212, 165, 116, 0.1);
}

.floating-card-icon.security-icon svg {
  color: #d4a574;
}

.floating-card-content {
  display: flex;
  flex-direction: column;
}

.floating-card-title {
  font-size: 0.9375rem;
  font-weight: 700;
  color: #0f1e33;
}

.floating-card-subtitle {
  font-size: 0.75rem;
  color: #475569;
}

.card-security {
  bottom: 80px;
  left: -100px;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  animation-delay: -4s;
}

.floating-card-label {
  font-size: 0.875rem;
  font-weight: 700;
  color: #0f1e33;
}

.card-response {
  top: 30px;
  right: -120px;
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
  color: #3b82f6;
  flex-shrink: 0;
}

.response-content {
  display: flex;
  flex-direction: column;
}

.response-value {
  font-size: 1.25rem;
  font-weight: 800;
  color: #0f1e33;
  line-height: 1.2;
}

.response-label {
  font-size: 0.75rem;
  color: #475569;
  white-space: nowrap;
}

@media (max-width: 1024px) {
  .card-consultation {
    left: -70px;
  }
  
  .card-security {
    left: -50px;
    bottom: 40px;
  }
  
  .card-response {
    right: -60px;
    top: 20px;
  }
}
</style>
