
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';


// eslint-disable-next-line react/prop-types, no-unused-vars
export default function PortfolioContainer({ currentPage, setCurrentPage }) {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <Portfolio />;
  }
