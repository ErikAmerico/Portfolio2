import './App.css';
import { useState } from 'react';
import PortfolioContainer from './components/PortfolioContainer';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState("About");

  return (
    <div>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      <PortfolioContainer currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Footer />
    </div>
  );
}

export default App
