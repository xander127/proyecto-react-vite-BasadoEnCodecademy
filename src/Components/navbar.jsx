import './navbar.css'
import logo from '../Images/Codecademy.svg'

export function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#"><img id="logo" src={logo} alt="Codecademy" /></a></li>
        <li><a href="#">Catalog</a></li>
        <li><a href="#">Live Courses</a></li>
        <li><a href="#">Resources</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Teams</a></li>
      </ul>
      <ul>
        <li><a href="#">Search</a></li>
        <li><a href="#">Log In</a></li>
        <li ><a href="#" className="btn-color-yellow">Sign Up</a></li>
      </ul>
    </nav>
  )
}