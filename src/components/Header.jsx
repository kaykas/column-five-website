import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <Link to="/" className="logo">COLUMN FIVE</Link>
      <nav>
        <ul>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/work">Work</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
