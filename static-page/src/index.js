import React from 'react';
import ReactDOM  from 'react-dom/client';
import logo from './logo.svg';

function Page() {
  return (
    <div>
      <header>
        <nav>
          <img src={logo} width="50px"></img>
        </nav>
      </header>
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li>Single-page application</li>
        <li>Popular library</li>
        <li>Declarative library</li>
      </ol>
      <footer>
        <small> © 2023 Hetali Shah development. All rights reserved. </small>
      </footer>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Page />);