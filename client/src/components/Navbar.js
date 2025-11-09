import { Link } from "react-router-dom";
export default function Navbar(){
  return (
    <nav style={{padding:"1rem", borderBottom:"1px solid #ddd"}}>
      <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/services">Services</Link> | <Link to="/portfolio">Portfolio</Link> | <Link to="/contact">Contact</Link>
    </nav>
  );
}
