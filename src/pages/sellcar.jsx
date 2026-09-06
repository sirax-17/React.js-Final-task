import {
  useEffect,
  useState
} from 'react'
function SellCar() {
  const [listings, setListings] =
    useState([])
  const [loading, setLoading] =
    useState(true)
  const [error, setError] =
    useState('')
  const [editingId, setEditingId] =
    useState(null)
  const [formData, setFormData] = useState({
    owner: '',
    brand: '',
    model: '',
    price: ''
  })
  useEffect(() => {
    const getListings = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users?_limit=3'
        )

        if (!response.ok) {
          throw new Error(
            'Unable to load listings'
          )
        }
        const users =
          await response.json()
        const demoCars = [
          {
            brand: 'BMW',
            model: 'BMW M4',
            price: '₹82,00,000'
          },
          {
            brand: 'Audi',
            model: 'Audi RS7',
            price: '₹95,00,000'
          },
          {
            brand: 'Tesla',
            model: 'Tesla Model S',
            price: '₹1,50,00,000'
          }
        ]
        const formatted = users.map(
          (user, index) => ({
            id: user.id,
            owner: user.name,
            ...demoCars[index]
          })
        )
        setListings(formatted)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }
    getListings()
  }, [])
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]:
        event.target.value
    })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()

    if (
      !formData.owner ||
      !formData.brand ||
      !formData.model ||
      !formData.price
    ) {
      setError(
        'Please complete all fields.'
      )
      return
    }
    try {
      setError('')

      if (editingId) {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${Math.min(
            editingId,
            10
          )}`,
          {
            method: 'PATCH',
            headers: {
              'Content-Type':
                'application/json'
            },
            body: JSON.stringify(formData)
          }
        )

        if (!response.ok) {
          throw new Error(
            'Unable to update listing'
          )
        }
        setListings((current) =>
          current.map((listing) =>
            listing.id === editingId
              ? {
                  ...listing,
                  ...formData
                }
              : listing
          )
        )
        setEditingId(null)
      } else {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users',
          {
            method: 'POST',
            headers: {
              'Content-Type':
                'application/json'
            },
            body: JSON.stringify(formData)
          }
        )

        if (!response.ok) {
          throw new Error(
            'Unable to create listing'
          )
        }
        await response.json()
        setListings((current) => [
          {
            id: Date.now(),
            ...formData
          },
          ...current
        ])
      }
      setFormData({
        owner: '',
        brand: '',
        model: '',
        price: ''
      })
    } catch (error) {
      setError(error.message)
    }
  }
  const handleEdit = (listing) => {
    setEditingId(listing.id)
    setFormData({
      owner: listing.owner,
      brand: listing.brand,
      model: listing.model,
      price: listing.price
    })
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  const handleDelete = async (id) => {
    try {
      if (id <= 10) {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`,
          {
            method: 'DELETE'
          }
        )

        if (!response.ok) {
          throw new Error(
            'Unable to delete listing'
          )
        }
      }
      setListings((current) =>
        current.filter(
          (listing) => listing.id !== id
        )
      )
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <main className="page-container">
      <div className="page-heading">
        <p>SELL WITH AUTOHUB</p>
        <h1>Manage Car Listings</h1>
        <span>
          Create, view, update and delete your
          vehicle listings.
        </span>
      </div>
      <form
        className="sell-form"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="owner"
          placeholder="Owner Name"
          value={formData.owner}
          onChange={handleChange}
        />
        <input
          type="text"
          name="brand"
          placeholder="Brand"
          value={formData.brand}
          onChange={handleChange}
        />
        <input
          type="text"
          name="model"
          placeholder="Model"
          value={formData.model}
          onChange={handleChange}
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
        />
        <button type="submit">
          {editingId
            ? 'Update Listing'
            : 'Add Listing'}
        </button>
      </form>
      {error && (
        <p className="error-message">
          {error}
        </p>
      )}
      {loading ? (
        <p className="loading">
          Loading listings...
        </p>
      ) : (
        <div className="listing-grid">
          {listings.map((listing) => (
            <article
              className="listing-card"
              key={listing.id}
            >
              <span>
                {listing.brand}
              </span>
              <h3>{listing.model}</h3>
              <p>
                Owner: {listing.owner}
              </p>
              <strong>
                {listing.price}
              </strong>
              <div>
                <button
                  className="edit-button"
                  onClick={() =>
                    handleEdit(listing)
                  }
                >
                  Edit
                </button>
                <button
                  className="delete-button"
                  onClick={() =>
                    handleDelete(
                      listing.id
                    )
                  }
                >
                  Delete
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  )
}

export default SellCar