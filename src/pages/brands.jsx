import cars from '../data/cars'
function Brands() {
  const brands = [
    ...new Map(
      cars.map((car) => [
        car.brand,
        car
      ])
    ).values()
  ]
  return (
    <main className="page-container">
      <div className="page-heading">
        <p>PREMIUM PARTNERS</p>
        <h1>Top Brands</h1>
        <span>
          Choose from the world's leading
          automobile brands.
        </span>
      </div>
      <div className="brand-container">
        {brands.map((car) => (
          <article
            className="brand-card"
            key={car.brand}
          >
            <img
              src={car.image}
              alt={car.brand}
            />
            <h3>{car.brand}</h3>
          </article>
        ))}
      </div>
    </main>
  )
}

export default Brands