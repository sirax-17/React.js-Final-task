import {
  useRef,
  useState
} from 'react'
function Contact() {
  const nameRef = useRef()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [success, setSuccess] =
    useState(false)
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]:
        event.target.value
    })
  }
  const validateForm = () => {
    const newErrors = {}

    if (formData.name.trim().length < 3) {
      newErrors.name =
        'Name must contain at least 3 characters.'
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.email
      )
    ) {
      newErrors.email =
        'Enter a valid email.'
    }

    if (
      !/^[0-9]{10}$/.test(formData.phone)
    ) {
      newErrors.phone =
        'Phone number must contain 10 digits.'
    }

    if (
      formData.message.trim().length < 10
    ) {
      newErrors.message =
        'Message must contain at least 10 characters.'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    setSuccess(false)

    if (!validateForm()) {
      nameRef.current.focus()
      return
    }
    setSuccess(true)
    setErrors({})
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    })
  }

  return (
    <main className="page-container">
      <div className="page-heading">
        <p>GET IN TOUCH</p>
        <h1>Contact AutoHub</h1>
        <span>
          Have a question? Our team is ready
          to help.
        </span>
      </div>
      <div className="contact-layout">
        <div className="contact-info">
          <h2>Let's Talk Cars</h2>
          <p>
            Email: autohub@gmail.com
          </p>
          <p>
            Phone: +91 9876543210
          </p>
          <p>Location: Chennai, India</p>
          <p>Support: Available 24/7</p>
        </div>
        <form
          className="modern-form"
          onSubmit={handleSubmit}
        >
          <div>
            <input
              ref={nameRef}
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />

            {errors.name && (
              <small>{errors.name}</small>
            )}
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <small>{errors.email}</small>
            )}
          </div>
          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <small>{errors.phone}</small>
            )}
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Write your message"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && (
              <small>
                {errors.message}
              </small>
            )}
          </div>
          <button type="submit">
            Send Message
          </button>
          {success && (
            <p className="success-message">
              Message sent successfully!
            </p>
          )}
        </form>
      </div>
    </main>
  )
}

export default Contact