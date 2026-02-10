import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaYoutube, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-5 mt-auto">
      <Container>
        <Row className="g-4">
          <Col md={4}>
            <h4 className="text-gold mb-4">Avi Creation</h4>
            <p>Capturing your most beautiful moments with elegance and style. Specialized in Pre-wedding, Wedding, and all your functions.</p>
          </Col>
          <Col md={4}>
            <h5 className="mb-4">Contact Us</h5>
            <div className="d-flex align-items-start mb-3">
              <FaMapMarkerAlt className="text-gold mt-1 me-2" />
              <span>Mograwadi shopping center 1 floor sunhieghts app, Valsad 396001, Gujarat</span>
            </div>
            <div className="d-flex align-items-center mb-3">
              <FaPhoneAlt className="text-gold me-2" />
              <span>+91-8758666628</span>
            </div>
          </Col>
          <Col md={4}>
            <h5 className="mb-4">Follow Us</h5>
            <div className="d-flex gap-3">
              <a href="https://www.instagram.com/avicreationvalsad" target="_blank" rel="noreferrer" className="text-white fs-4 hover-gold">
                <FaInstagram />
              </a>
              <a href="https://www.youtube.com/@avicreation0705" target="_blank" rel="noreferrer" className="text-white fs-4 hover-gold">
                <FaYoutube />
              </a>
            </div>
          </Col>
        </Row>
        <hr className="my-4 border-secondary" />
        <div className="text-center text-secondary">
          <small>&copy; {new Date().getFullYear()} Avi Creation. All rights reserved.</small>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
