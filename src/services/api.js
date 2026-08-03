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

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

/**
 * Sends the contact form straight to MKO's inbox via Web3Forms — no backend
 * required. The recipient is whichever email address the access key was
 * generated for at https://web3forms.com; set the key as
 * VITE_WEB3FORMS_ACCESS_KEY in .env (see .env.example).
 *
 * TODO(backend): once the Django REST Framework API exists, this can be
 * swapped for `apiClient.post('/contact/', payload)` (POST /api/contact/,
 * same payload shape) without touching ContactForm.jsx.
 */
export async function submitContactForm({ first_name, last_name, email, phone, subject, message }) {
  if (!WEB3FORMS_ACCESS_KEY) {
    throw new Error('Missing VITE_WEB3FORMS_ACCESS_KEY — see .env.example')
  }

  const response = await axios.post(WEB3FORMS_ENDPOINT, {
    access_key: WEB3FORMS_ACCESS_KEY,
    subject: `New contact form message: ${subject}`,
    from_name: `${first_name} ${last_name}`,
    email,
    phone,
    message,
  })

  if (!response.data?.success) {
    throw new Error(response.data?.message || 'Web3Forms rejected the submission')
  }

  return response
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
