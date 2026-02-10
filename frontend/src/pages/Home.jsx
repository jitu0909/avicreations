import { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCamera, FaHeart, FaRing, FaBaby } from 'react-icons/fa';

const heroImages = [
  "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80"
];

const services = [
  { title: "Pre-Wedding", icon: <FaHeart />, desc: "Capture the romance before the big day." },
  { title: "Wedding Photography", icon: <FaCamera />, desc: "Documenting every moment of your special day." },
  { title: "Engagement", icon: <FaRing />, desc: "Freezing the moment you said 'Yes'." },
  { title: "Baby Shower", icon: <FaBaby />, desc: "Welcoming the new member with joy." }
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="hero-section">
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="hero-slide"
            style={{ backgroundImage: `url(${heroImages[currentImageIndex]})` }}
          />
        </AnimatePresence>
        <div className="hero-overlay">
          <Container>
            <motion.h1 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="display-1 fw-bold mb-4"
            >
              Avi Creation
            </motion.h1>
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="lead fs-3 mb-5"
            >
              Capturing Moments, Creating Memories
            </motion.p>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <Button as={Link} to="/contact" variant="outline-light" size="lg" className="rounded-0 px-5 py-3 border-2">
                Book Now
              </Button>
            </motion.div>
          </Container>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-5 bg-light">
        <Container className="py-5">
          <div className="text-center mb-5">
            <h6 className="text-gold text-uppercase letter-spacing-2">What We Do</h6>
            <h2 className="display-4 fw-bold">Our Services</h2>
          </div>
          <Row className="g-4">
            {services.map((service, index) => (
              <Col md={3} sm={6} key={index}>
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="bg-white p-4 h-100 text-center shadow-sm"
                >
                  <div className="text-gold fs-1 mb-3">{service.icon}</div>
                  <h4 className="mb-3">{service.title}</h4>
                  <p className="text-muted">{service.desc}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* About Section Preview */}
      <section className="py-5">
        <Container className="py-5">
          <Row className="align-items-center">
            <Col md={6}>
              <img src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&q=80" alt="About Us" className="img-fluid" />
            </Col>
            <Col md={6} className="ps-md-5 mt-4 mt-md-0">
              <h6 className="text-gold text-uppercase letter-spacing-2">About Us</h6>
              <h2 className="display-4 fw-bold mb-4">We Are Storytellers</h2>
              <p className="lead text-muted mb-4">
                Based in Valsad, Gujarat, Avi Creation is a team of passionate photographers dedicated to preserving your most cherished memories.
              </p>
              <Button as={Link} to="/portfolio" className="btn-gold rounded-0">
                View Our Work
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
