<template>
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
</template>

<style scoped>
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
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.advisor-info {
  flex: 1;
}

.advisor-name {
  font-size: 1.125rem;
  font-weight: 700;
  color: #0f1e33;
  margin-bottom: 0.25rem;
}

.advisor-title {
  font-size: 0.875rem;
  color: #475569;
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
  color: #1e3a5f;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
}
</style>
