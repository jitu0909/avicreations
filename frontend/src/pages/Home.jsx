import { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPlay, FaInstagram, FaQuoteLeft } from 'react-icons/fa';
import SectionTitle from '../components/SectionTitle';

// High-quality Indian Wedding Images - Genuine & Cinematic
const heroImages = [
  "https://images.unsplash.com/photo-1605218457336-92d3e0984852?q=80&w=1920&auto=format&fit=crop", // Genuine Couple Laughing
  "https://images.unsplash.com/photo-1595514682333-722e96d2524d?q=80&w=1920&auto=format&fit=crop", // Traditional Bride
  "https://images.unsplash.com/photo-1519225448526-06451554c289?q=80&w=1920&auto=format&fit=crop", // Groom Details
  "https://images.unsplash.com/photo-1623164100984-722881e5b475?q=80&w=1920&auto=format&fit=crop"  // Nature Pre-wedding
];

const rituals = [
  { 
    title: "Haldi", 
    desc: "The color of joy and blessings.", 
    img: "https://images.unsplash.com/photo-1634547263595-5c1a71c8466f?q=80&w=800&auto=format&fit=crop" // Joyful Haldi
  },
  { 
    title: "Mehndi", 
    desc: "Intricate patterns of love.", 
    img: "https://images.unsplash.com/photo-1583934555026-6d85ce8f01b9?q=80&w=800&auto=format&fit=crop" // Bride with Mehndi
  },
  { 
    title: "Pheras", 
    desc: "Seven vows for seven lifetimes.", 
    img: "https://images.unsplash.com/photo-1587271407850-8d438913d2cd?q=80&w=800&auto=format&fit=crop" // Fire/Ritual
  }
];

const lovedMoments = [
  { img: "https://images.unsplash.com/photo-1522673607200-1645062cd958?q=80&w=800&auto=format&fit=crop", title: "Aditi & Rahul", location: "Udaipur Palace", date: "Dec 2024" },
  { img: "https://images.unsplash.com/photo-1532712938310-34cb3958d42d?q=80&w=800&auto=format&fit=crop", title: "Priya & Amit", location: "Tithal Beach, Valsad", date: "Jan 2025" },
  { img: "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?q=80&w=800&auto=format&fit=crop", title: "Sana & Kabir", location: "Ahmedabad", date: "Nov 2024" }
];

const films = [
  { img: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=800&auto=format&fit=crop", title: "The Royal Union", type: "Wedding Film" },
  { img: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=800&auto=format&fit=crop", title: "Endless Love", type: "Pre-Wedding Teaser" }
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
      {/* Cinematic Hero Section */}
      <div className="hero-section position-relative vh-100 overflow-hidden bg-black">
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{ 
              backgroundImage: `url(${heroImages[currentImageIndex]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.5)'
            }}
          />
        </AnimatePresence>
        
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center text-center text-white z-1">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="d-inline-block border-top border-bottom border-light py-2 px-4 mb-4">
                <h6 className="text-gold letter-spacing-4 text-uppercase mb-0">Avi Creation Valsad</h6>
              </div>
              <h1 className="display-1 fw-bold mb-4 font-serif text-white">
                Capturing <span className="text-gold fst-italic">Soulful</span> Indian Stories
              </h1>
              <p className="lead mb-5 opacity-75 mx-auto font-serif fst-italic" style={{ maxWidth: '700px', fontSize: '1.5rem' }}>
                "From the joyous Haldi to the emotional Vidaai, we preserve the essence of your heritage."
              </p>
              <div className="d-flex justify-content-center gap-3">
                <Button as={Link} to="/contact" variant="outline-light" className="btn-gold text-white border-white px-5 py-3 rounded-0">
                  Book Your Date
                </Button>
                <Button as={Link} to="/portfolio" variant="link" className="text-white text-decoration-none text-uppercase letter-spacing-2 align-self-center">
                  View Portfolio
                </Button>
              </div>
            </motion.div>
          </Container>
        </div>
      </div>

      {/* About / Introduction */}
      <section className="py-5 bg-white pattern-overlay">
        <Container className="py-5">
          <Row className="justify-content-center text-center">
            <Col md={10} lg={8}>
              <SectionTitle title="The Art of Celebration" subtitle="Our Philosophy" />
              <p className="lead text-dark font-serif fs-3 mb-4">
                "We don't just click pictures; we weave stories."
              </p>
              <p className="text-secondary mb-5" style={{ lineHeight: '1.8' }}>
                Based in <strong>Valsad, Gujarat</strong>, Avi Creation is a team of passionate storytellers dedicated to the grandeur of Indian weddings. We understand that a wedding is not just an event; it's a union of families, a riot of colors, and a treasure trove of emotions. Whether it's the playful banter during the <em>Mehndi</em> or the solemn vows around the sacred fire, we are there to capture it all with elegance and style.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* The Rituals (Indian Context) */}
      <section className="py-5 bg-light">
        <Container className="py-5">
          <SectionTitle title="The Rituals" subtitle="Traditions We Cherish" />
          <Row className="g-0">
            {rituals.map((ritual, index) => (
              <Col md={4} key={index}>
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="position-relative overflow-hidden group h-100"
                  style={{ minHeight: '400px' }}
                >
                  <img src={ritual.img} alt={ritual.title} className="w-100 h-100 object-fit-cover transition-transform duration-700 hover:scale-110" />
                  <div className="position-absolute top-0 start-0 w-100 h-100 bg-black bg-opacity-40 d-flex flex-column justify-content-end p-4 text-white">
                    <h3 className="font-serif display-6 mb-2">{ritual.title}</h3>
                    <p className="opacity-90 font-serif fst-italic">{ritual.desc}</p>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Loved Moments (Featured Stories) */}
      <section className="py-5 bg-white">
        <Container className="py-5">
          <div className="d-flex justify-content-between align-items-end mb-5">
            <div className="text-start">
              <h6 className="text-gold text-uppercase letter-spacing-4 mb-2">Real Love Stories</h6>
              <h2 className="display-4 fw-bold font-serif mb-0">Loved Moments</h2>
            </div>
            <Link to="/portfolio" className="text-dark text-decoration-none text-uppercase letter-spacing-2 border-bottom border-dark pb-1 d-none d-md-block">
              View All Stories
            </Link>
          </div>
          
          <Row className="g-4">
            {lovedMoments.map((moment, index) => (
              <Col md={4} key={index}>
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="cursor-pointer"
                >
                  <div className="overflow-hidden mb-3 shadow-sm">
                    <img src={moment.img} alt={moment.title} className="w-100 object-fit-cover" style={{ height: '500px' }} />
                  </div>
                  <div className="text-center">
                    <h4 className="font-serif mb-1">{moment.title}</h4>
                    <p className="text-muted text-uppercase small letter-spacing-2 mb-0">
                      {moment.location} <span className="mx-2">•</span> {moment.date}
                    </p>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-5 d-md-none">
            <Link to="/portfolio" className="text-dark text-decoration-none text-uppercase letter-spacing-2 border-bottom border-dark pb-1">
              View All Stories
            </Link>
          </div>
        </Container>
      </section>

      {/* Cinematic Films */}
      <section className="py-5 bg-black text-white">
        <Container className="py-5">
          <SectionTitle title="Cinematic Films" subtitle="Motion Pictures" />
          <Row className="g-5 justify-content-center">
            {films.map((film, index) => (
              <Col md={6} key={index}>
                <div className="position-relative overflow-hidden group cursor-pointer shadow-lg border border-secondary border-opacity-25">
                  <div className="ratio ratio-16x9">
                    <img src={film.img} alt={film.title} className="object-fit-cover w-100 h-100 opacity-75 transition-opacity duration-300 hover:opacity-100" />
                  </div>
                  <div className="position-absolute top-50 start-50 translate-middle">
                    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-circle p-4 text-white d-flex align-items-center justify-content-center border border-white border-opacity-50 transition-transform duration-300 hover:scale-110" style={{ width: '80px', height: '80px' }}>
                      <FaPlay className="ms-1" size={24} />
                    </div>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <h3 className="font-serif mb-2">{film.title}</h3>
                  <p className="text-gold text-uppercase letter-spacing-2 small">{film.type}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Testimonials (Love Notes) */}
      <section className="py-5 bg-light pattern-overlay">
        <Container className="py-5">
          <SectionTitle title="Love Notes" subtitle="Kind Words" />
          <Row className="justify-content-center">
            <Col md={8} className="text-center">
              <FaQuoteLeft className="text-gold mb-4" size={30} />
              <p className="lead font-serif fst-italic mb-4 fs-3">
                "Avi Creation made our dream wedding in Valsad look like a Bollywood movie. Every photo captures the emotion perfectly. We are forever grateful!"
              </p>
              <h5 className="font-serif fw-bold">– Meera & Rohan</h5>
              <p className="text-muted small text-uppercase letter-spacing-2">Married in Valsad, 2024</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Instagram Feed Preview */}
      <section className="py-5 bg-white">
        <Container className="py-5 text-center">
          <FaInstagram size={40} className="text-gold mb-4" />
          <h2 className="font-serif mb-4">Follow Our Journey</h2>
          <p className="text-muted mb-4">Join our community of {`10k+`} followers on Instagram</p>
          <a href="https://www.instagram.com/avicreationvalsad" target="_blank" rel="noreferrer" className="text-dark text-decoration-none letter-spacing-2 text-uppercase fw-bold border-bottom border-dark pb-1">
            @avicreationvalsad
          </a>
        </Container>
      </section>
    </>
  );
};

export default Home;
