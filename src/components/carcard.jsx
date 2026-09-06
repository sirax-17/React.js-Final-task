import { Link } from 'react-router-dom'
function CarCard({ car }) {
  return (
    <article className="car-card">
      <img
        src={car.image}
        alt={car.name}
      />
      <div className="car-card-content">
        <span className="brand-tag">
          {car.brand}
        </span>
        <h3>{car.name}</h3>
        <p className="car-price">
          {car.price}
        </p>
        <div className="car-info">
          <span>{car.transmission}</span>
          <span>{car.fuel}</span>
        </div>
        <Link
          className="details-button"
          to={`/inventory/${car.id}`}
        >
          View Details
        </Link>
      </div>
    </article>
  )
}

export default CarCard