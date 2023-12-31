import { NavLink } from "react-router-dom";

const Navbar = () => {
    return ( 
        <header className="navbar">
            <h2>Jobs</h2>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/help">Help</NavLink>
            </nav>
        </header>
    );
}
 
export default Navbar;