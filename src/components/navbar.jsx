import {
  NavLink,
  useNavigate
} from 'react-router-dom'
import { useTheme } from '../context/themecontext'
function Navbar() {
  const navigate = useNavigate()
  const {
    theme,
    toggleTheme
  } = useTheme()

  return (
    <header className="navbar">
      <div
        className="logo"
        onClick={() => navigate('/')}
      >
        <img
          src="/images/logo.png"
          alt="AutoHub Logo"
        />
        <h2>AutoHub</h2>
      </div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/inventory">Inventory</NavLink>
        <NavLink to="/brands">Brands</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </nav>
      <div className="nav-buttons">
        <button
          className="theme-button"
          onClick={toggleTheme}
        >
          {theme === 'light' ? 'Dark' : 'Light'}
        </button>
        <button
          className="sell-button"
          onClick={() => navigate('/sell-car')}
        >
          Sell Car
        </button>
      </div>
    </header>
  )
}

export default Navbar