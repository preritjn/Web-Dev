import { NavLink } from "react-router-dom";

export default function Navbar() {
  return ( 
    <header className="navbar">
      <h2>Jobs</h2>
        <nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/help">Help</NavLink>
          <NavLink to="/careers">Careers</NavLink>
        </nav>
    </header>
  )
}