import { useReducer } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { addBooking } from '../redux/bookingSlice'
import cars from '../data/cars'
const initialState = {
  name: '',
  email: '',
  phone: '',
  car: '',
  date: ''
}
function formReducer(state, action) {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        [action.field]: action.value
      }
    case 'RESET':
      return initialState
    default:
      return state
  }
}
function TestDrive() {
  const reduxDispatch = useDispatch()
  const [searchParams] = useSearchParams()
  const selectedCar =
    searchParams.get('car') || ''
  const [formData, dispatch] = useReducer(
    formReducer,
    {
      ...initialState,
      car: selectedCar
    }
  )
  const [message, messageDispatch] =
    useReducer(
      (_, action) => action,
      ''
    )
  const handleChange = (event) => {
    dispatch({
      type: 'CHANGE',
      field: event.target.name,
      value: event.target.value
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault()

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.car ||
      !formData.date
    ) {
      messageDispatch(
        'Please complete all fields.'
      )
      return
    }
    reduxDispatch(addBooking(formData))
    messageDispatch(
      'Test drive booked successfully!'
    )
    dispatch({
      type: 'RESET'
    })
  }

  return (
    <section className="service-content">
      <div>
        <p className="small-heading">
          TEST DRIVE
        </p>
        <h2>Experience Your Dream Car</h2>
        <p>
          Choose your preferred vehicle and
          schedule a convenient test drive.
        </p>
      </div>
      <form
        className="modern-form"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />
        <select
          name="car"
          value={formData.car}
          onChange={handleChange}
        >
          <option value="">Select Car</option>
          {cars.map((car) => (
            <option
              value={car.name}
              key={car.id}
            >
              {car.name}
            </option>
          ))}
        </select>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        <button type="submit">
          Book Test Drive
        </button>
        {message && (
          <p className="form-message">
            {message}
          </p>
        )}
      </form>
    </section>
  )
}

export default TestDrive