function CarService() {
  const services = [
    'General Maintenance',
    'Engine Inspection',
    'Brake Service',
    'Wheel Alignment',
    'Battery Check',
    'Interior Detailing'
  ]
  
  return (
    <section className="service-content">
      <div>
        <p className="small-heading">
          CAR SERVICE
        </p>
        <h2>Professional Vehicle Care</h2>
        <p>
          Maintain your vehicle with trained
          technicians and quality service.
        </p>
      </div>
      <div className="service-grid">
        {services.map((service) => (
          <div
            className="mini-service-card"
            key={service}
          >
            <span>✓</span>
            <h3>{service}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CarService