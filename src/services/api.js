import axios from 'axios'

// TODO(backend): point this at the deployed Django REST Framework API
// (e.g. via VITE_API_BASE_URL in a .env file) once it is available.
const BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '/api'

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

/**
 * Submits the contact form to the backend.
 * Expected Django endpoint: POST /api/contact/
 * Payload: { first_name, last_name, email, phone, subject, message }
 */
export function submitContactForm(payload) {
  return apiClient.post('/contact/', payload)
}

/**
 * Subscribes an email address to the newsletter.
 * Expected Django endpoint: POST /api/newsletter/
 * Payload: { email }
 */
export function subscribeToNewsletter(email) {
  return apiClient.post('/newsletter/', { email })
}

export default apiClient
