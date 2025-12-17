import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <Link to="/Feed">
          <li className="nav-logo">TSIPOURA</li>
        </Link>

        <Link to="/Feed">
          <li className="nav-item">Home</li>
        </Link>

        <Link to="/LogIn">
          <li className="nav-item">Log Out</li>
        </Link>

        {/* <Link to="/ContactUs">
          <li className="nav-item">Contact Us</li>
        </Link> */}
      </ul>
    </nav>
  );
}
