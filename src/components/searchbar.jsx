import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function SearchBar() {
  const navigate = useNavigate()
  const [filters, setFilters] = useState({
    brand: '',
    category: '',
    transmission: '',
    fuel: ''
  })
  const handleChange = (event) => {
    const {
      name,
      value
    } = event.target
    setFilters({
      ...filters,
      [name]: value
    })
  }
  const handleSearch = () => {
    const params = new URLSearchParams()
    Object.entries(filters).forEach(
      ([key, value]) => {
        if (value) {
          params.set(key, value)
        }
      }
    )
    navigate(`/inventory?${params.toString()}`)
  }

  return (
    <div className="search-box">
      <select
        name="brand"
        value={filters.brand}
        onChange={handleChange}
      >
        <option value="">Select Brand</option>
        <option value="BMW">BMW</option>
        <option value="Audi">Audi</option>
        <option value="Mercedes">Mercedes</option>
        <option value="Ferrari">Ferrari</option>
        <option value="Lamborghini">
          Lamborghini
        </option>
        <option value="Tesla">Tesla</option>
        <option value="Ford">Ford</option>
        <option value="Dodge">Dodge</option>
      </select>
      <select
        name="category"
        value={filters.category}
        onChange={handleChange}
      >
        <option value="">Select Category</option>
        <option value="Sedan">Sedan</option>
        <option value="Sports">Sports</option>
        <option value="Electric">Electric</option>
      </select>
      <select
        name="transmission"
        value={filters.transmission}
        onChange={handleChange}
      >
        <option value="">Transmission</option>
        <option value="Automatic">
          Automatic
        </option>
        <option value="Manual">Manual</option>
      </select>
      <select
        name="fuel"
        value={filters.fuel}
        onChange={handleChange}
      >
        <option value="">Fuel Type</option>
        <option value="Petrol">Petrol</option>
        <option value="Diesel">Diesel</option>
        <option value="Electric">Electric</option>
      </select>
      <button onClick={handleSearch}>
        Search
      </button>
    </div>
  )
}

export default SearchBar