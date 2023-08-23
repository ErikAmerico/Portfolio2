import './App.css';
import { useState } from 'react';
import PortfolioContainer from './components/PortfolioContainer';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState("About");

  return (
    <>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      <PortfolioContainer currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Footer />
    </>
  )
}

export default App
