import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <header className="navbar container">
            <NavLink to='#'>Prerit Kumar Jain</NavLink>
            <nav>
                <NavLink to='#about'>About</NavLink>
                <NavLink to='#experience'>Experience</NavLink>
                <NavLink to='#projects'>Projects</NavLink>
                <NavLink to='#contact'>Contact</NavLink>
            </nav>
        </header>
    )
}