import { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPlay, FaInstagram } from 'react-icons/fa';
import SectionTitle from '../components/SectionTitle';

const heroImages = [
  "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&q=80", // Indian Wedding Decor
  "https://images.unsplash.com/photo-1583934555026-6d85ce8f01b9?auto=format&fit=crop&q=80", // Indian Bride
  "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&q=80"  // Couple Moment
];

const lovedMoments = [
  { img: "https://images.unsplash.com/photo-1621621667797-e06afc217fb0?auto=format&fit=crop&q=80", title: "The Royal Union", desc: "A traditional Gujarati wedding in Valsad." },
  { img: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80", title: "Sunset Vows", desc: "Intimate beachside engagement." },
  { img: "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?auto=format&fit=crop&q=80", title: "Haldi Joy", desc: "Colors of happiness and laughter." }
];

const films = [
  { img: "https://images.unsplash.com/photo-1520854221256-17451cc330e7?auto=format&fit=crop&q=80", title: "Riya & Arjun", type: "Wedding Film" },
  { img: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&q=80", title: "The Beginning", type: "Pre-Wedding Teaser" }
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Cinematic Hero Section */}
      <div className="hero-section position-relative vh-100 overflow-hidden bg-black">
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{ 
              backgroundImage: `url(${heroImages[currentImageIndex]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.6)'
            }}
          />
        </AnimatePresence>
        
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center text-center text-white z-1">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h6 className="text-gold letter-spacing-4 text-uppercase mb-3">Avi Creation Valsad</h6>
              <h1 className="display-1 fw-bold mb-4 font-serif">Timeless Indian Stories</h1>
              <p className="lead mb-5 opacity-75 mx-auto" style={{ maxWidth: '600px' }}>
                Preserving the soulful moments of your heritage, love, and laughter.
              </p>
              <Button as={Link} to="/contact" variant="outline-light" className="btn-gold text-white border-white">
                Begin Your Journey
              </Button>
            </motion.div>
          </Container>
        </div>
      </div>

      {/* Introduction / About */}
      <section className="py-5 bg-white pattern-overlay">
        <Container className="py-5">
          <Row className="justify-content-center text-center">
            <Col md={8}>
              <SectionTitle title="The Art of Storytelling" subtitle="Who We Are" />
              <p className="lead text-muted font-serif fs-4">
                "We don't just take photographs; we freeze the emotions of your special day into timeless memories."
              </p>
              <p className="text-secondary mt-4">
                Based in the heart of Gujarat, Avi Creation specializes in capturing the vibrant traditions of Indian weddings. From the colorful Haldi to the emotional Vidaai, we are there to document every tear and every smile.
              </p>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Signature_sample.svg/1200px-Signature_sample.svg.png" alt="Signature" className="mt-4 opacity-50" style={{ height: '60px' }} />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Loved Moments (Featured Stories) */}
      <section className="py-5 bg-light">
        <Container className="py-5">
          <SectionTitle title="Loved Moments" subtitle="Real Stories" />
          <Row className="g-4">
            {lovedMoments.map((moment, index) => (
              <Col md={4} key={index}>
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="position-relative overflow-hidden shadow-lg h-100"
                  style={{ borderRadius: '4px' }}
                >
                  <div className="ratio ratio-4x5">
                    <img src={moment.img} alt={moment.title} className="object-fit-cover w-100 h-100" />
                  </div>
                  <div className="position-absolute bottom-0 start-0 w-100 p-4 bg-gradient-to-t from-black text-white" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}>
                    <h3 className="font-serif mb-1">{moment.title}</h3>
                    <p className="text-gold small text-uppercase letter-spacing-2 mb-0">{moment.desc}</p>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-5">
            <Button as={Link} to="/portfolio" className="btn-gold text-dark border-dark">View Full Portfolio</Button>
          </div>
        </Container>
      </section>

      {/* Cinematic Films */}
      <section className="py-5 bg-black text-white">
        <Container className="py-5">
          <SectionTitle title="Cinematic Films" subtitle="Motion Pictures" />
          <Row className="g-4 justify-content-center">
            {films.map((film, index) => (
              <Col md={6} key={index}>
                <div className="position-relative overflow-hidden group cursor-pointer">
                  <div className="ratio ratio-16x9">
                    <img src={film.img} alt={film.title} className="object-fit-cover w-100 h-100 opacity-75" />
                  </div>
                  <div className="position-absolute top-50 start-50 translate-middle">
                    <div className="bg-white rounded-circle p-3 text-gold d-flex align-items-center justify-content-center shadow-lg" style={{ width: '70px', height: '70px' }}>
                      <FaPlay className="ms-1" size={24} />
                    </div>
                  </div>
                  <div className="mt-3">
                    <h4 className="font-serif">{film.title}</h4>
                    <p className="text-muted small">{film.type}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Instagram Feed Preview */}
      <section className="py-5 bg-white">
        <Container className="py-5 text-center">
          <FaInstagram size={40} className="text-gold mb-4" />
          <h2 className="font-serif mb-4">Follow Our Journey</h2>
          <a href="https://www.instagram.com/avicreationvalsad" target="_blank" rel="noreferrer" className="text-dark text-decoration-none letter-spacing-2 text-uppercase fw-bold border-bottom border-dark pb-1">
            @avicreationvalsad
          </a>
        </Container>
      </section>
    </>
  );
};

export default Home;
