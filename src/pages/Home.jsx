import { useNavigate } from 'react-router-dom'
import cars from '../data/cars'
import CarCard from '../components/carcard'
import SearchBar from '../components/searchbar'
function Home() {
  const navigate = useNavigate()

  return (
    <main>
      <section className="hero">
        <div className="overlay">
          <h1>Drive Your Dream Car</h1>
          <p>
            Find Luxury, Sports, Electric and
            Premium Cars
          </p>
          <div className="hero-buttons">
            <button
              className="explore"
              onClick={() =>
                navigate('/inventory')
              }
            >
              Explore Cars
            </button>
            <button
              className="test-drive"
              onClick={() =>
                navigate('/services/test-drive')
              }
            >
              Book Test Drive
            </button>
          </div>
          <div className="categories">
            <div>
              <img
                src="/icons/sedan.png"
                alt="Sedan"
              />
              <h3>Sedan</h3>
            </div>
            <div>
              <img
                src="/icons/SUV.png"
                alt="SUV"
              />
              <h3>SUV</h3>
            </div>
            <div>
              <img
                src="/icons/Sports.png"
                alt="Sports"
              />
              <h3>Sports</h3>
            </div>
            <div>
              <img
                src="/icons/tesla.png"
                alt="Electric"
              />
              <h3>Electric</h3>
            </div>
            <div>
              <img
                src="/icons/truck.png"
                alt="Pickup"
              />
              <h3>Pickup</h3>
            </div>
          </div>
          <SearchBar />
        </div>
      </section>
      <section className="featured">
        <div className="section-title">
          <h2>Featured Cars</h2>
          <p>
            Explore our premium collection
          </p>
        </div>
        <div className="car-container">
          {cars.slice(0, 6).map((car) => (
            <CarCard
              key={car.id}
              car={car}
            />
          ))}
        </div>
      </section>
      <section className="why-autohub">
        <h2>Why Choose AutoHub?</h2>
        <div className="stats-container">
          <div className="stat">
            <h3>1000+</h3>
            <p>Premium Cars</p>
          </div>
          <div className="stat">
            <h3>500+</h3>
            <p>Happy Customers</p>
          </div>
          <div className="stat">
            <h3>50+</h3>
            <p>Top Brands</p>
          </div>
          <div className="stat">
            <h3>24/7</h3>
            <p>Customer Support</p>
          </div>
        </div>
      </section>
      <section className="testimonials">
        <div className="section-title light-title">
          <h2>What Our Customers Say</h2>
        </div>
        <div className="testimonial-container">
          <div className="testimonial-card">
            <p>
              "Buying my BMW through AutoHub
              was fast and easy."
            </p>
            <h4>- Luffy</h4>
          </div>
          <div className="testimonial-card">
            <p>
              "Excellent service and premium
              quality cars."
            </p>
            <h4>- Sanji</h4>
          </div>
          <div className="testimonial-card">
            <p>
              "Highly recommend AutoHub for
              luxury car lovers."
            </p>
            <h4>- Zoro</h4>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home