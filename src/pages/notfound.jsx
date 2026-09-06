import { Link } from 'react-router-dom'
function NotFound() {
  return (
    <main className="page-container">
      <div className="empty-state">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <Link
          className="primary-link"
          to="/"
        >
          Return Home
        </Link>
      </div>
    </main>
  )
}

export default NotFound