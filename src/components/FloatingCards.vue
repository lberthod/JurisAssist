<template>
  <div class="hero-floating-cards" aria-hidden="true">


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

<style scoped>
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
  animation: floatingCardIdle 6s ease-in-out infinite;
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

.card-security {
  top: 120%;
  left: 50%;
  min-width: 330px;
  animation-delay: 0s;
}

.card-consultation {
  top: 100%;
  left: 50%;
  transform: translateY(-50%);
  min-width: 300px;
  animation-delay: 1.2s;
}

.card-response {

   top: 90%;
  left: 50%;
  min-width: 320px;
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

.card-consultation {
  animation-name: floatingCardIdleCentered;
}

@keyframes floatingCardIdleCentered {
  0%,
  100% {
    transform: translateY(-50%);
  }
  50% {
    transform: translateY(calc(-50% - 6px));
  }
}

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
    top: 10%;
    left: 2%;
    min-width: 290px;
  }

  .card-consultation {
    top: 48%;
    left: 0;
    min-width: 270px;
  }

  .card-response {
    right: 1%;
    bottom: 10%;
    min-width: 290px;
  }
}

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
</style>
