import {
  useRef,
  useState
} from 'react'
import {
  useDispatch,
  useSelector
} from 'react-redux'
import useFetch from '../Hooks/usefetch'
import { deleteBooking } from '../redux/bookingslice'
function Profile() {
  const dispatch = useDispatch()
  const fileInputRef = useRef()
  const [profileImage, setProfileImage] =
    useState('')
  const bookings = useSelector(
    (state) => state.booking.bookings
  )
  const {
    data,
    loading,
    error
  } = useFetch(
    'https://jsonplaceholder.typicode.com/users/1'
  )
  const handleImage = (event) => {
    const file = event.target.files[0]

    if (file) {
      setProfileImage(
        URL.createObjectURL(file)
      )
    }
  }

  return (
    <main className="page-container">
      <div className="page-heading">
        <p>MY AUTOHUB</p>
        <h1>Profile</h1>
      </div>
      {loading && (
        <p className="loading">
          Loading profile...
        </p>
      )}
      {error && (
        <p className="error-message">
          {error}
        </p>
      )}
      {data && (
        <section className="profile-card">
          <div className="profile-avatar">
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile"
              />
            ) : (
              <span>
                {data.name.charAt(0)}
              </span>
            )}
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            hidden
            onChange={handleImage}
          />
          <button
            className="secondary-button"
            onClick={() =>
              fileInputRef.current.click()
            }
          >
            Upload Photo
          </button>
          <h2>{data.name}</h2>
          <p>{data.email}</p>
          <p>{data.phone}</p>
          <p>{data.address.city}</p>
        </section>
      )}
      <section className="booking-section">
        <h2>My Test Drive Bookings</h2>
        {bookings.length === 0 ? (
          <div className="empty-state">
            <p>
              You have no test drive bookings
              yet.
            </p>
          </div>
        ) : (
          <div className="booking-grid">
            {bookings.map((booking) => (
              <div
                className="booking-card"
                key={booking.id}
              >
                <h3>{booking.car}</h3>
                <p>{booking.name}</p>
                <p>{booking.date}</p>
                <button
                  onClick={() =>
                    dispatch(
                      deleteBooking(
                        booking.id
                      )
                    )
                  }
                >
                  Cancel Booking
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}

export default Profile