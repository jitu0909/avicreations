import { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPlay, FaInstagram, FaQuoteLeft, FaOm } from 'react-icons/fa'; // Added Om icon for culture
import SectionTitle from '../components/SectionTitle';

// STRICTLY INDIAN TRADITIONAL COUPLE IMAGES ONLY (Groom Turban/Sherwani & Bride Lehenga)
const heroImages = [
  "https://images.pexels.com/photos/8565495/pexels-photo-8565495.jpeg?auto=compress&cs=tinysrgb&w=1600", // Groom Turban + Bride Lehenga (Perfect Match)
  "https://images.pexels.com/photos/6544197/pexels-photo-6544197.jpeg?auto=compress&cs=tinysrgb&w=1600", // Traditional Groom Pagdi + Bride Red Lehenga
  "https://images.pexels.com/photos/13974866/pexels-photo-13974866.jpeg?auto=compress&cs=tinysrgb&w=1600", // Royal Couple (Turban & Lehenga)
  "https://images.pexels.com/photos/30155180/pexels-photo-30155180.jpeg?auto=compress&cs=tinysrgb&w=1600", // New Romantic Embrace (Trending)
  "https://images.pexels.com/photos/19733687/pexels-photo-19733687.jpeg?auto=compress&cs=tinysrgb&w=1600", // Gujarat Couple (Royal Classic)
];

const rituals = [
  { 
    title: "The Royal Engagement", 
    desc: "A promise of forever, celebrated with elegance and grace.", 
    img: "https://images.pexels.com/photos/19230329/pexels-photo-19230329.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  { 
    title: "Sangeet & Celebration", 
    desc: "A night of music, dance, and royal festivities.", 
    img: "https://images.pexels.com/photos/6544197/pexels-photo-6544197.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  { 
    title: "The Eternal Vows", 
    desc: "The seven sacred steps binding two souls in eternal love.", 
    img: "https://images.pexels.com/photos/30171219/pexels-photo-30171219.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

const lovedMoments = [
  { img: "https://images.pexels.com/photos/6544197/pexels-photo-6544197.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Riya & Dev", location: "Royal Palace, Udaipur", date: "Shubh Vivah" },
  { img: "https://images.pexels.com/photos/19733687/pexels-photo-19733687.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Anjali & Vikram", location: "Tithal Beach, Valsad", date: "Mangal Parinay" },
  { img: "https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Priya & Amit", location: "Grand Hyatt, Mumbai", date: "Saptapadi" }
];

const films = [
  { img: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Vivaha Sanskar", type: "Wedding Film" },
  { img: "https://images.pexels.com/photos/3585805/pexels-photo-3585805.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Preet Ki Dor", type: "Pre-Wedding Teaser" }
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000); // 3 seconds interval as requested
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Royal Hero Section */}
      <div className="hero-section position-relative vh-100 overflow-hidden bg-black">
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{ 
              backgroundImage: `url(${heroImages[currentImageIndex]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center 20%', // ALIGNMENT FIX: Focus slightly higher than center for faces
              filter: 'brightness(0.55)'
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
              <div className="d-inline-block border-top border-bottom border-warning py-2 px-4 mb-4">
                <h6 className="text-warning letter-spacing-4 text-uppercase mb-0 fw-bold">
                  <FaOm className="me-2" /> Avi Creation Valsad
                </h6>
              </div>
              <h1 className="display-1 fw-bold mb-4 font-serif text-white">
                The Royal <span className="text-warning fst-italic">Indian</span> Wedding
              </h1>
              <p className="lead mb-5 opacity-90 mx-auto font-serif" style={{ maxWidth: '700px', fontSize: '1.4rem', color: '#f8f9fa' }}>
                "Celebrating Traditions, Capturing Emotions, Creating Legacy."
              </p>
              <div className="d-flex justify-content-center gap-3">
                <Button as={Link} to="/contact" variant="warning" className="text-dark fw-bold px-5 py-3 rounded-0 shadow-lg">
                  Book Your Dates
                </Button>
                <Button as={Link} to="/portfolio" variant="outline-light" className="text-white px-5 py-3 rounded-0 border-2">
                  View Gallery
                </Button>
              </div>
            </motion.div>
          </Container>
        </div>
      </div>

      {/* Rituals Section */}
      <div className="py-5" style={{ backgroundColor: '#fffdf5' }}>
        <Container className="py-5">
          <SectionTitle title="Our Traditions" subtitle="The Sacred Rituals" />
          <Row className="g-4">
            {rituals.map((ritual, index) => (
              <Col md={4} key={index}>
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="bg-white p-3 shadow-sm h-100 border border-warning border-opacity-25"
                >
                  <div className="overflow-hidden mb-3" style={{ height: '300px' }}>
                    <img src={ritual.img} alt={ritual.title} className="w-100 h-100 object-fit-cover" />
                  </div>
                  <h3 className="h4 font-serif mb-2 text-dark">{ritual.title}</h3>
                  <p className="text-muted small mb-0 font-serif">{ritual.desc}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* Cinematic Films Section */}
      <div className="py-5 bg-dark text-white">
        <Container className="py-5">
          <SectionTitle title="Cinematic Films" subtitle="Timeless Memories" />
          <Row className="g-4">
            {films.map((film, index) => (
              <Col md={6} key={index}>
                <div className="position-relative group overflow-hidden border border-secondary">
                  <div className="ratio ratio-16x9">
                    <img src={film.img} alt={film.title} className="object-fit-cover opacity-75" />
                  </div>
                  <div className="position-absolute top-50 start-50 translate-middle">
                    <div className="bg-warning rounded-circle p-3 shadow-lg d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', cursor: 'pointer' }}>
                      <FaPlay className="text-dark ms-1" size={20} />
                    </div>
                  </div>
                  <div className="position-absolute bottom-0 start-0 w-100 p-4 bg-gradient-to-t from-black">
                    <h3 className="h4 mb-1 font-serif text-warning">{film.title}</h3>
                    <p className="mb-0 small text-white-50 text-uppercase">{film.type}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* Loved Moments */}
      <div className="py-5 bg-white">
        <Container className="py-5">
          <SectionTitle title="Real Weddings" subtitle="Love Stories" />
          <Row className="g-4">
            {lovedMoments.map((moment, index) => (
              <Col md={4} key={index}>
                <div className="position-relative">
                  <div className="ratio ratio-4x5 mb-3">
                    <img src={moment.img} alt={moment.title} className="object-fit-cover shadow" />
                  </div>
                  <div className="text-center">
                    <h4 className="font-serif mb-1">{moment.title}</h4>
                    <p className="text-warning small text-uppercase letter-spacing-2 mb-1">{moment.location}</p>
                    <p className="text-muted small fst-italic">{moment.date}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* Quote Section */}
      <div className="py-5 bg-warning bg-opacity-10">
        <Container className="text-center py-5">
          <FaQuoteLeft className="text-warning mb-4" size={40} />
          <h2 className="display-6 font-serif fst-italic mb-4" style={{ color: '#5a461b' }}>
            "Marriage is not just a union of two souls, but a celebration of two families, traditions, and eternal love."
          </h2>
          <p className="lead mb-0 font-serif">— Avi Creation</p>
        </Container>
      </div>
    </>
  );
};

export default Home;
