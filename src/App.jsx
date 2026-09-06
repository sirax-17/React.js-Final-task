import {
  Navigate,
  Route,
  Routes
} from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './pages/Home'
import Inventory from './pages/inventory'
import CarDetails from './pages/cardetails'
import Brands from './pages/Brands'
import Services from './pages/Services'
import TestDrive from './pages/TestDrive'
import CarService from './pages/carservice'
import Insurance from './pages/insurance'
import Contact from './pages/contact'
import Profile from './pages/profile'
import SellCar from './pages/sellcar'
import NotFound from './pages/notfound'
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/inventory"
          element={<Inventory />}
        />
        <Route
          path="/inventory/:id"
          element={<CarDetails />}
        />
        <Route
          path="/brands"
          element={<Brands />}
        />
        <Route
          path="/services"
          element={<Services />}
        >
          <Route
            index
            element={
              <Navigate
                to="test-drive"
                replace
              />
            }
          />
          <Route
            path="test-drive"
            element={<TestDrive />}
          />
          <Route
            path="car-service"
            element={<CarService />}
          />
          <Route
            path="insurance"
            element={<Insurance />}
          />
        </Route>
        <Route
          path="/contact"
          element={<Contact />}
        />
        <Route
          path="/profile"
          element={<Profile />}
        />
        <Route
          path="/sell-car"
          element={<SellCar />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App