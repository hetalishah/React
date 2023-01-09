import React from 'react';
import ReactDOM  from 'react-dom/client';
import logo from './logo.svg';
import './index.css';

function Page() {
  return (
    <div>
      <Header />  
      <MainContent />
      <Footer />
    </div>
  )
}

function Header() {
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

function Footer() {
  return (
    <footer className="footer">
      <small> © 2023 Hetali Shah development. All rights reserved. </small>
    </footer>
  )
}

function MainContent() {
  return (
    <div>
      <h1 className="title">Reasons I'm excited to learn React</h1>
      <ol>
        <li>Single-page application</li>
        <li>Popular library</li>
        <li>Declarative library</li>
      </ol>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Page />);