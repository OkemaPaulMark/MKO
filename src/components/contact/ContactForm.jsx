import { useForm } from 'react-hook-form'
import { submitContactForm } from '../../services/api'

const inputClasses =
  'w-full rounded-card border border-border bg-white px-4 py-2.5 text-sm text-text placeholder:text-text-muted focus:border-primary focus:outline-none'
const errorClasses = 'mt-1 text-xs font-medium text-red-600'

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    clearErrors,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({ mode: 'onBlur' })

  const onSubmit = async (data) => {
    clearErrors('root')
    try {
      await submitContactForm({
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        phone: data.phone,
        subject: data.subject,
        message: data.message,
      })
      reset()
    } catch {
      // TODO(backend): the /api/contact/ endpoint doesn't exist yet, so this
      // will fire until the Django backend is connected.
      setError('root', { message: 'Something went wrong sending your message. Please try again later.' })
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="text-sm font-medium text-text">
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            autoComplete="given-name"
            aria-invalid={errors.firstName ? 'true' : 'false'}
            aria-describedby={errors.firstName ? 'firstName-error' : undefined}
            className={`mt-1.5 ${inputClasses}`}
            {...register('firstName', { required: 'First name is required' })}
          />
          {errors.firstName && (
            <p id="firstName-error" className={errorClasses} role="alert">
              {errors.firstName.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="lastName" className="text-sm font-medium text-text">
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            autoComplete="family-name"
            aria-invalid={errors.lastName ? 'true' : 'false'}
            aria-describedby={errors.lastName ? 'lastName-error' : undefined}
            className={`mt-1.5 ${inputClasses}`}
            {...register('lastName', { required: 'Last name is required' })}
          />
          {errors.lastName && (
            <p id="lastName-error" className={errorClasses} role="alert">
              {errors.lastName.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="text-sm font-medium text-text">
            Email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={`mt-1.5 ${inputClasses}`}
            {...register('email', {
              required: 'Email is required',
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email address' },
            })}
          />
          {errors.email && (
            <p id="email-error" className={errorClasses} role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="text-sm font-medium text-text">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            className={`mt-1.5 ${inputClasses}`}
            {...register('phone')}
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="text-sm font-medium text-text">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          aria-invalid={errors.subject ? 'true' : 'false'}
          aria-describedby={errors.subject ? 'subject-error' : undefined}
          className={`mt-1.5 ${inputClasses}`}
          {...register('subject', { required: 'Subject is required' })}
        />
        {errors.subject && (
          <p id="subject-error" className={errorClasses} role="alert">
            {errors.subject.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-text">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={`mt-1.5 resize-none ${inputClasses}`}
          {...register('message', { required: 'Message is required', minLength: { value: 10, message: 'Message must be at least 10 characters' } })}
        />
        {errors.message && (
          <p id="message-error" className={errorClasses} role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      <div className="flex items-start gap-3">
        <input
          id="consent"
          type="checkbox"
          className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary"
          aria-invalid={errors.consent ? 'true' : 'false'}
          aria-describedby={errors.consent ? 'consent-error' : undefined}
          {...register('consent', { required: 'You must consent to be contacted' })}
        />
        <label htmlFor="consent" className="text-sm text-text-muted">
          I consent to MKO storing my information and contacting me regarding this inquiry.
        </label>
      </div>
      {errors.consent && (
        <p id="consent-error" className={errorClasses} role="alert">
          {errors.consent.message}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-card bg-accent px-6 py-3 font-heading text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {isSubmitting ? 'Sending…' : 'Send Message'}
      </button>

      <p role="status" aria-live="polite" className="text-sm font-medium text-primary">
        {isSubmitSuccessful && !isSubmitting ? 'Thank you — your message has been sent!' : ''}
      </p>
      {errors.root && (
        <p role="alert" className={errorClasses}>
          {errors.root.message}
        </p>
      )}
    </form>
  )
}
