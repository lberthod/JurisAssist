<template>
  <Transition name="modal">
    <div v-if="isOpen" class="modal-overlay" @click.self="closeModal">
      <div class="modal-container">
        <button class="modal-close" @click="closeModal" aria-label="Fermer">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>

        <div class="modal-header">
          <h2 class="modal-title">Contactez un conseiller</h2>
          <p class="modal-subtitle">Choisissez votre mode de contact préféré</p>
        </div>

        <div class="contact-options">
          <button 
            class="contact-option" 
            :class="{ active: mode === 'phone' }"
            @click="mode = 'phone'"
          >
            <div class="option-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16.92V19.92C22 20.49 21.54 20.97 20.97 21C20.72 21.01 20.47 21.02 20.22 21.02C10.44 21.02 2.48 13.06 2.48 3.28C2.48 3.03 2.49 2.78 2.5 2.53C2.53 1.96 3.01 1.5 3.58 1.5H6.58C7.12 1.5 7.57 1.92 7.61 2.45C7.66 3.11 7.75 3.76 7.9 4.4C8.03 4.91 7.87 5.45 7.5 5.82L5.81 7.51C7.46 10.68 10.21 13.43 13.38 15.08L15.07 13.39C15.44 13.02 15.98 12.86 16.49 12.99C17.13 13.14 17.78 13.23 18.44 13.28C18.98 13.32 19.4 13.78 19.4 14.32V17.32C19.4 17.62 19.32 17.9 19.17 18.13C19.02 18.36 18.8 18.54 18.54 18.64C18.28 18.74 18 18.77 17.72 18.72C17.44 18.67 17.18 18.54 16.97 18.35C16.76 18.16 16.6 17.91 16.52 17.63C16.44 17.35 16.44 17.05 16.52 16.77C16.6 16.49 16.76 16.24 16.97 16.05L18.66 14.36C18.44 14.27 18.22 14.19 18 14.12V16.92H22Z" fill="currentColor"/>
              </svg>
            </div>
            <div class="option-content">
              <span class="option-title">Appel immédiat</span>
              <span class="option-desc">Parlez directement à un conseiller</span>
            </div>
          </button>

          <button 
            class="contact-option" 
            :class="{ active: mode === 'callback' }"
            @click="mode = 'callback'"
          >
            <div class="option-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2"/>
                <path d="M8 2V6M16 2V6M3 10H21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
            <div class="option-content">
              <span class="option-title">Demander un rappel</span>
              <span class="option-desc">Un conseiller vous rappelle sous 2min</span>
            </div>
          </button>
        </div>

        <div v-if="mode === 'phone'" class="phone-section">
          <div class="phone-number-display">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 16.92V19.92C22 20.49 21.54 20.97 20.97 21C20.72 21.01 20.47 21.02 20.22 21.02C10.44 21.02 2.48 13.06 2.48 3.28C2.48 3.03 2.49 2.78 2.5 2.53C2.53 1.96 3.01 1.5 3.58 1.5H6.58C7.12 1.5 7.57 1.92 7.61 2.45C7.66 3.11 7.75 3.76 7.9 4.4C8.03 4.91 7.87 5.45 7.5 5.82L5.81 7.51C7.46 10.68 10.21 13.43 13.38 15.08L15.07 13.39C15.44 13.02 15.98 12.86 16.49 12.99C17.13 13.14 17.78 13.23 18.44 13.28C18.98 13.32 19.4 13.78 19.4 14.32V17.32C19.4 17.62 19.32 17.9 19.17 18.13C19.02 18.36 18.8 18.54 18.54 18.64C18.28 18.74 18 18.77 17.72 18.72C17.44 18.67 17.18 18.54 16.97 18.35C16.76 18.16 16.6 17.91 16.52 17.63C16.44 17.35 16.44 17.05 16.52 16.77C16.6 16.49 16.76 16.24 16.97 16.05L18.66 14.36C18.44 14.27 18.22 14.19 18 14.12V16.92H22Z" fill="currentColor"/>
            </svg>
            <div class="phone-info">
              <span class="phone-label">Numéro direct</span>
              <a href="tel:+33175432100" class="phone-link">01 75 43 21 00</a>
              <span class="phone-availability">Disponible 24/7</span>
            </div>
          </div>
          <p class="phone-notice">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
              <path d="M12 16V12M12 8H12.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            Appel gratuit depuis un fixe. Tarif selon opérateur depuis un mobile.
          </p>
        </div>

        <form v-else-if="mode === 'callback'" class="callback-form" @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name" class="form-label">Nom complet *</label>
            <input 
              type="text" 
              id="name" 
              v-model="formData.name" 
              class="form-input"
              placeholder="Jean Dupont"
              required
            >
          </div>

          <div class="form-group">
            <label for="phone" class="form-label">Numéro de téléphone *</label>
            <input 
              type="tel" 
              id="phone" 
              v-model="formData.phone" 
              class="form-input"
              placeholder="06 12 34 56 78"
              required
            >
          </div>

          <div class="form-group">
            <label for="email" class="form-label">Email *</label>
            <input 
              type="email" 
              id="email" 
              v-model="formData.email" 
              class="form-input"
              placeholder="jean.dupont@email.com"
              required
            >
          </div>

          <div class="form-group">
            <label for="subject" class="form-label">Type de demande</label>
            <select id="subject" v-model="formData.subject" class="form-input">
              <option value="">Sélectionnez un type</option>
              <option value="droit-civil">Droit civil</option>
              <option value="droit-social">Droit social</option>
              <option value="droit-famille">Droit de la famille</option>
              <option value="droit-immobilier">Droit immobilier</option>
              <option value="autre">Autre</option>
            </select>
          </div>

          <div class="form-group">
            <label for="message" class="form-label">Message (optionnel)</label>
            <textarea 
              id="message" 
              v-model="formData.message" 
              class="form-input form-textarea"
              placeholder="Décrivez brièvement votre situation..."
              rows="4"
            ></textarea>
          </div>

          <div class="form-group checkbox-group">
            <label class="checkbox-label">
              <input type="checkbox" v-model="formData.consent" required>
              <span class="checkbox-text">
                J'accepte d'être contacté par JurisAssist et j'ai pris connaissance de la 
                <a href="#" @click.prevent class="privacy-link">politique de confidentialité</a>
              </span>
            </label>
          </div>

          <button type="submit" class="submit-button" :disabled="isSubmitting">
            <span v-if="!isSubmitting">Demander un rappel</span>
            <span v-else class="loading">
              <svg class="spinner" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-dasharray="31.4 31.4" />
              </svg>
              Envoi en cours...
            </span>
          </button>

          <p v-if="submitSuccess" class="success-message">
            ✓ Demande envoyée ! Un conseiller vous contactera dans les 2 minutes.
          </p>
        </form>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])

const mode = ref('callback')
const isSubmitting = ref(false)
const submitSuccess = ref(false)

const formData = ref({
  name: '',
  phone: '',
  email: '',
  subject: '',
  message: '',
  consent: false
})

const closeModal = () => {
  emit('close')
  setTimeout(() => {
    mode.value = 'callback'
    submitSuccess.value = false
    resetForm()
  }, 300)
}

const resetForm = () => {
  formData.value = {
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
    consent: false
  }
}

const handleSubmit = async () => {
  isSubmitting.value = true
  
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  console.log('Form submitted:', formData.value)
  
  if (typeof gtag !== 'undefined') {
    gtag('event', 'generate_lead', {
      event_category: 'Contact',
      event_label: 'Callback Request',
      value: formData.value.subject
    })
  }
  
  isSubmitting.value = false
  submitSuccess.value = true
  
  setTimeout(() => {
    closeModal()
  }, 3000)
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.75);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 1rem;
}

.modal-container {
  background: #ffffff;
  border-radius: 24px;
  max-width: 580px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 
    0 25px 50px rgba(15, 23, 42, 0.25),
    0 10px 20px rgba(15, 23, 42, 0.15);
  padding: 2.5rem;
}

.modal-close {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  width: 40px;
  height: 40px;
  border: none;
  background: rgba(15, 23, 42, 0.05);
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64748b;
  transition: all 0.2s ease;
}

.modal-close:hover {
  background: rgba(15, 23, 42, 0.1);
  color: #0f172a;
}

.modal-header {
  margin-bottom: 2rem;
}

.modal-title {
  font-size: 28px;
  font-weight: 800;
  color: #0f172a;
  letter-spacing: -0.02em;
  margin-bottom: 0.5rem;
}

.modal-subtitle {
  font-size: 16px;
  color: #64748b;
  font-weight: 500;
}

.contact-options {
  display: grid;
  gap: 1rem;
  margin-bottom: 2rem;
}

.contact-option {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem;
  border: 2px solid #e2e8f0;
  border-radius: 16px;
  background: #ffffff;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
}

.contact-option:hover {
  border-color: #cbd5e1;
  background: #f8fafc;
}

.contact-option.active {
  border-color: #3b82f6;
  background: #eff6ff;
}

.option-icon {
  width: 48px;
  height: 48px;
  min-width: 48px;
  background: #eff6ff;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3b82f6;
}

.contact-option.active .option-icon {
  background: #3b82f6;
  color: #ffffff;
}

.option-content {
  display: flex;
  flex-direction: column;
}

.option-title {
  font-size: 16px;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 0.25rem;
}

.option-desc {
  font-size: 14px;
  color: #64748b;
}

.phone-section {
  background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
}

.phone-number-display {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.phone-number-display svg {
  color: #3b82f6;
}

.phone-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.phone-label {
  font-size: 14px;
  color: #64748b;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.phone-link {
  font-size: 32px;
  font-weight: 800;
  color: #0f172a;
  text-decoration: none;
  letter-spacing: -0.02em;
}

.phone-link:hover {
  color: #3b82f6;
}

.phone-availability {
  font-size: 14px;
  color: #10b981;
  font-weight: 600;
}

.phone-notice {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
  font-size: 13px;
  color: #64748b;
}

.phone-notice svg {
  color: #94a3b8;
}

.callback-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-label {
  font-size: 14px;
  font-weight: 600;
  color: #334155;
}

.form-input {
  padding: 0.875rem 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 15px;
  color: #0f172a;
  transition: all 0.2s ease;
  font-family: inherit;
}

.form-input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.form-textarea {
  resize: vertical;
  min-height: 100px;
}

.checkbox-group {
  margin-top: 0.5rem;
}

.checkbox-label {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  cursor: pointer;
}

.checkbox-label input[type="checkbox"] {
  margin-top: 0.25rem;
  width: 18px;
  height: 18px;
  cursor: pointer;
}

.checkbox-text {
  font-size: 14px;
  color: #64748b;
  line-height: 1.5;
}

.privacy-link {
  color: #3b82f6;
  text-decoration: underline;
}

.submit-button {
  padding: 1rem 2rem;
  background: #3b82f6;
  color: #ffffff;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 0.5rem;
}

.submit-button:hover:not(:disabled) {
  background: #2563eb;
  transform: translateY(-1px);
  box-shadow: 0 10px 20px rgba(59, 130, 246, 0.3);
}

.submit-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.spinner {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.success-message {
  padding: 1rem;
  background: #d1fae5;
  border: 2px solid #10b981;
  border-radius: 12px;
  color: #065f46;
  font-weight: 600;
  text-align: center;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
  transition: transform 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container {
  transform: scale(0.9) translateY(20px);
}

.modal-leave-to .modal-container {
  transform: scale(0.95) translateY(10px);
}

@media (max-width: 640px) {
  .modal-container {
    padding: 1.75rem;
    border-radius: 20px;
  }

  .modal-title {
    font-size: 24px;
  }

  .phone-link {
    font-size: 28px;
  }

  .contact-option {
    padding: 1rem;
  }

  .option-icon {
    width: 44px;
    height: 44px;
    min-width: 44px;
  }
}
</style>
