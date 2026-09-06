import {
  Link,
  useParams
} from 'react-router-dom'
import cars from '../data/cars'
function CarDetails() {
  const { id } = useParams()
  const car = cars.find(
    (car) => car.id === Number(id)
  )

  if (!car) {
    return (
      <main className="page-container">
        <div className="empty-state">
          <h1>Car Not Found</h1>
          <Link
            className="primary-link"
            to="/inventory"
          >
            Back to Inventory
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="page-container">
      <div className="car-details">
        <div className="details-image">
          <img
            src={car.image}
            alt={car.name}
          />
        </div>
        <div className="details-content">
          <span className="brand-tag">
            {car.brand}
          </span>
          <h1>{car.name}</h1>
          <h2>{car.price}</h2>
          <p>{car.description}</p>
          <div className="spec-grid">
            <div>
              <span>Category</span>
              <strong>{car.category}</strong>
            </div>
            <div>
              <span>Transmission</span>
              <strong>
                {car.transmission}
              </strong>
            </div>
            <div>
              <span>Fuel</span>
              <strong>{car.fuel}</strong>
            </div>
            <div>
              <span>Engine</span>
              <strong>{car.engine}</strong>
            </div>
            <div>
              <span>Seats</span>
              <strong>{car.seats}</strong>
            </div>
          </div>
          <Link
            className="primary-link"
            to={`/services/test-drive?car=${encodeURIComponent(
              car.name
            )}`}
          >
            Book Test Drive
          </Link>
        </div>
      </div>
    </main>
  )
}

export default CarDetails