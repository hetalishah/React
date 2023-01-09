import React from 'react';
import ReactDOM  from 'react-dom/client';
import Header from './header.js';
import Footer from './footer.js';
import MainContent from './main-content.js';
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





ReactDOM.createRoot(document.getElementById('root')).render(<Page />);