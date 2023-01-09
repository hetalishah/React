import React from 'react';
import ReactDOM  from 'react-dom/client';
import Header from './Header/header';
import Footer from './Footer/footer';
import MainContent from './MainContent/main-content';
import './index';

function App() {
  return (
    <div>
      <Header />  
      <MainContent />
      <Footer />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);