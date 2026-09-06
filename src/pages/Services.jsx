import {
  NavLink,
  Outlet
} from 'react-router-dom'
function Services() {

  return (
    <main className="page-container">
      <div className="page-heading">
        <p>AUTOHUB SERVICES</p>
        <h1>Complete Car Care</h1>
        <span>
          Everything you need before and after
          buying your dream car.
        </span>
      </div>
      <div className="service-navigation">
        <NavLink to="test-drive">
          Test Drive
        </NavLink>
        <NavLink to="car-service">
          Car Service
        </NavLink>
        <NavLink to="insurance">
          Insurance
        </NavLink>
      </div>
      <Outlet />
    </main>
  )
}

export default Services