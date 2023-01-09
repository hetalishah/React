import logo from './logo.svg';
import './header.css';

export default function Header() {
  return (
    <header>
      <nav className="navBar">
        <img className="logoSVG" src={logo} alt=""></img>
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}