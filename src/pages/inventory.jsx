import { useSearchParams } from 'react-router-dom'
import cars from '../data/cars'
import CarCard from '../components/carcard'

function Inventory() {
  const [
    searchParams,
    setSearchParams
  ] = useSearchParams()
  const brand = searchParams.get('brand') || ''
  const category =
    searchParams.get('category') || ''
  const fuel = searchParams.get('fuel') || ''
  const transmission =
    searchParams.get('transmission') || ''
  const updateFilter = (name, value) => {
    const newParams =
      new URLSearchParams(searchParams)

    if (value) {
      newParams.set(name, value)
    } else {
      newParams.delete(name)
    }
    setSearchParams(newParams)
  }
  const filteredCars = cars.filter((car) => {
    return (
      (!brand || car.brand === brand) &&
      (!category ||
        car.category === category) &&
      (!fuel || car.fuel === fuel) &&
      (!transmission ||
        car.transmission === transmission)
    )
  })
  const clearFilters = () => {
    setSearchParams({})
  }

  return (
    <main className="page-container">
      <div className="page-heading">
        <p>AUTOHUB INVENTORY</p>
        <h1>Find Your Perfect Car</h1>
        <span>
          Search and filter our premium vehicle
          collection.
        </span>
      </div>
      <div className="inventory-filters">
        <select
          value={brand}
          onChange={(event) =>
            updateFilter(
              'brand',
              event.target.value
            )
          }
        >
          <option value="">All Brands</option>
          <option value="BMW">BMW</option>
          <option value="Audi">Audi</option>
          <option value="Mercedes">
            Mercedes
          </option>
          <option value="Ferrari">
            Ferrari
          </option>
          <option value="Lamborghini">
            Lamborghini
          </option>
          <option value="Tesla">Tesla</option>
          <option value="Ford">Ford</option>
          <option value="Dodge">Dodge</option>
        </select>
        <select
          value={category}
          onChange={(event) =>
            updateFilter(
              'category',
              event.target.value
            )
          }
        >
          <option value="">
            All Categories
          </option>
          <option value="Sedan">Sedan</option>
          <option value="Sports">Sports</option>
          <option value="Electric">
            Electric
          </option>
        </select>
        <select
          value={fuel}
          onChange={(event) =>
            updateFilter(
              'fuel',
              event.target.value
            )
          }
        >
          <option value="">All Fuel Types</option>
          <option value="Petrol">Petrol</option>
          <option value="Electric">
            Electric
          </option>
        </select>
        <select
          value={transmission}
          onChange={(event) =>
            updateFilter(
              'transmission',
              event.target.value
            )
          }
        >
          <option value="">
            All Transmissions
          </option>
          <option value="Automatic">
            Automatic
          </option>
          <option value="Manual">Manual</option>
        </select>
        <button onClick={clearFilters}>
          Clear
        </button>
      </div>
      <p className="result-count">
        {filteredCars.length} car(s) found
      </p>
      {filteredCars.length > 0 ? (
        <div className="car-container">
          {filteredCars.map((car) => (
            <CarCard
              key={car.id}
              car={car}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h2>No cars found</h2>
          <p>
            Try changing your filters.
          </p>
        </div>
      )}
    </main>
  )
}

export default Inventory