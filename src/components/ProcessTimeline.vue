<template>
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
</template>

<style scoped>
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
  background: #e2e8f0;
}

.timeline-item.completed::after {
  background: #10b981;
}

.timeline-item.active::after {
  background: linear-gradient(to bottom, #3b82f6, #e2e8f0);
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
  background: #ffffff;
  border: 2px solid #cbd5e1;
  transition: all 0.3s ease;
}

.timeline-item.completed .timeline-icon {
  background: #10b981;
  border-color: #10b981;
}

.timeline-item.completed .timeline-icon svg {
  width: 16px;
  height: 16px;
  color: #ffffff;
}

.timeline-item.active .timeline-icon {
  background: #3b82f6;
  border-color: #3b82f6;
}

.timeline-item.active .timeline-icon .pulse-ring {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 2px solid #3b82f6;
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
  color: #ffffff;
}

.timeline-item.active .timeline-number {
  color: #ffffff;
}

.timeline-item:not(.completed):not(.active) .timeline-number {
  color: #64748b;
}

.timeline-content {
  flex: 1;
}

.timeline-label {
  font-size: 0.9375rem;
  font-weight: 600;
  color: #334155;
}

.timeline-item.completed .timeline-label {
  color: #475569;
}

.timeline-item.active .timeline-label {
  color: #1e3a5f;
}
</style>
