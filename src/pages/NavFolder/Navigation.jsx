
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './Nav.css';

function Navigation() {
  const currentPage = useLocation().pathname;

  return (
    <Navbar expand="md" variant="light" bg="light" className='nav nav-tabs navbar'>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link
            as={Link}
            to="/"
            className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
          >
            <span className="nav-link-text">About</span>
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/Portfolio"
            className={
              currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'
            }
          >
            <span className="nav-link-text">Portfolio</span>
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/Resume"
            className={
              currentPage === '/Resume' ? 'nav-link active' : 'nav-link'
            }
          >
            <span className="nav-link-text">Resume</span>
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/Contact"
            className={
              currentPage === '/Contact' ? 'nav-link active' : 'nav-link'
            }
          >
            <span className="nav-link-text">Contact</span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
