import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

export default function PortfolioContainer({ currentPage, setCurrentPage }) {
    const renderPage = () => {
        switch (currentPage) {
            case 'About':
                return <About />;
            case 'Contact':
                return <Contact />;
            case 'Resume':
                return <Resume />;
            default:
                return <Portfolio />;
        }
    };

    return (
        <div>
            <main>{renderPage(currentPage)}</main>
        </div>
    );
}