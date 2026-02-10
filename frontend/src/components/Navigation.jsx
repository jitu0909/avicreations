import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className={`py-3 transition-all ${scrolled || !isHome ? 'bg-white shadow-sm' : 'bg-transparent'}`}
      variant={scrolled || !isHome ? 'light' : 'dark'}
      style={{ transition: 'background-color 0.3s ease' }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className={`fw-bold ${scrolled || !isHome ? 'text-dark' : 'text-white'}`}>
          AVI CREATION
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className={location.pathname === '/' ? 'active fw-bold' : ''}>Home</Nav.Link>
            <Nav.Link as={Link} to="/portfolio" className={location.pathname === '/portfolio' ? 'active fw-bold' : ''}>Portfolio</Nav.Link>
            <Nav.Link as={Link} to="/contact" className={location.pathname === '/contact' ? 'active fw-bold' : ''}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
