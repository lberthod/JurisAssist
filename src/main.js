import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    if ('performance' in window) {
      const perfData = window.performance.timing
      const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart
      const connectTime = perfData.responseEnd - perfData.requestStart
      const renderTime = perfData.domComplete - perfData.domLoading
      
      if (typeof gtag !== 'undefined') {
        gtag('event', 'page_performance', {
          event_category: 'Performance',
          page_load_time: pageLoadTime,
          connect_time: connectTime,
          render_time: renderTime
        })
      }
      
      console.log('Performance Metrics:', {
        pageLoadTime: `${pageLoadTime}ms`,
        connectTime: `${connectTime}ms`,
        renderTime: `${renderTime}ms`
      })
    }
  })

  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.entryType === 'largest-contentful-paint') {
        if (typeof gtag !== 'undefined') {
          gtag('event', 'LCP', {
            event_category: 'Web Vitals',
            value: Math.round(entry.startTime),
            event_label: entry.element?.tagName
          })
        }
      }
      
      if (entry.entryType === 'first-input') {
        if (typeof gtag !== 'undefined') {
          gtag('event', 'FID', {
            event_category: 'Web Vitals',
            value: Math.round(entry.processingStart - entry.startTime),
            event_label: entry.name
          })
        }
      }
    }
  })
  
  try {
    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input'] })
  } catch (e) {
    console.warn('Performance Observer not supported')
  }
}

app.mount('#app')
