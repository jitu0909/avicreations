import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Logo from './Logo';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
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

  // Determine logo color based on scroll state
  const logoColor = scrolled ? '#1a1a1a' : '#ffffff';

  return (
    <Navbar expanded={expanded} onToggle={(val) => setExpanded(val)} 
      expand="lg" 
      fixed="top" 
      className={`py-3 transition-all duration-500 ${scrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}
      variant={scrolled ? 'light' : 'dark'}
    >
      <Container>
        <Navbar.Brand 
          as={Link} onClick={() => setExpanded(false)} 
          to="/" 
          className="d-flex align-items-center"
        >
          <Logo color={logoColor} width={180} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {['Home', 'Portfolio', 'Contact'].map((item) => (
              <Nav.Link 
                as={Link} 
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                key={item} onClick={() => setExpanded(false)}
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
