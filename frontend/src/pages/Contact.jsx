import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import PageHeader from '../components/PageHeader';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <>
      <PageHeader title="Contact Us" subtitle="Get in Touch" image="https://images.unsplash.com/photo-1520854221256-17451cc330e7?auto=format&fit=crop&q=80" />
      <Container className="py-5">
        <Row className="g-5">
          <Col md={6}>
            <h2 className="fw-bold mb-4">Let's Discuss Your Event</h2>
            <p className="text-muted mb-5">
              We would love to hear from you! Reach out to us for bookings, inquiries, or just to say hello.
            </p>
            
            <div className="mb-4">
              <div className="d-flex align-items-center mb-3">
                <div className="bg-light p-3 rounded-circle me-3 text-gold">
                  <FaPhoneAlt size={20} />
                </div>
                <div>
                  <h5 className="mb-1">Phone</h5>
                  <p className="mb-0 text-muted">+91-8758666628</p>
                </div>
              </div>
              
              <div className="d-flex align-items-center mb-3">
                <div className="bg-light p-3 rounded-circle me-3 text-gold">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h5 className="mb-1">Address</h5>
                  <p className="mb-0 text-muted">Mograwadi shopping center 1 floor sunhieghts app, Valsad 396001, Gujarat</p>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <div className="bg-light p-3 rounded-circle me-3 text-gold">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h5 className="mb-1">Email</h5>
                  <p className="mb-0 text-muted">contact@avicreation.com</p>
                </div>
              </div>
            </div>
          </Col>
          
          <Col md={6}>
            <div className="bg-light p-5 h-100">
              <Form>
                <Form.Group className="mb-3">
                  <Form.Control type="text" placeholder="Your Name" className="p-3 border-0" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control type="email" placeholder="Your Email" className="p-3 border-0" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Select className="p-3 border-0 text-muted">
                    <option>Select Event Type</option>
                    <option>Pre-Wedding</option>
                    <option>Wedding</option>
                    <option>Engagement</option>
                    <option>Other</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Control as="textarea" rows={4} placeholder="Your Message" className="p-3 border-0" />
                </Form.Group>
                <Button className="btn-gold w-100 py-3">Send Message</Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
