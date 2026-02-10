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
      className={`py-3 transition-all duration-500 ${scrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}
      variant={scrolled ? 'light' : 'dark'}
    >
      <Container>
        <Navbar.Brand 
          as={Link} 
          to="/" 
          className={`font-serif fw-bold ${scrolled ? 'text-dark' : 'text-white'}`}
          style={{ letterSpacing: '2px' }}
        >
          AVI CREATION
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {['Home', 'Portfolio', 'Contact'].map((item) => (
              <Nav.Link 
                as={Link} 
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                key={item}
                className={`mx-3 text-uppercase letter-spacing-2 ${
                  location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`) 
                    ? 'text-gold' 
                    : (scrolled ? 'text-dark' : 'text-white')
                }`}
                style={{ fontSize: '0.8rem' }}
              >
                {item}
              </Nav.Link>
            ))}
            <a 
              href="https://wa.me/918758666628" 
              target="_blank" 
              rel="noreferrer" 
              className={`btn btn-sm ms-3 ${scrolled ? 'btn-outline-dark' : 'btn-outline-light'} rounded-0 px-4 py-2 text-uppercase letter-spacing-2`}
              style={{ fontSize: '0.75rem' }}
            >
              Inquire
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
