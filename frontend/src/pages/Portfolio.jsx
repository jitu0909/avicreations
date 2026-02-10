import { Container, Row, Col } from 'react-bootstrap';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';

const portfolioItems = [
  { img: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80", category: "Wedding", height: "400px" },
  { img: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&q=80", category: "Decoration", height: "300px" },
  { img: "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?auto=format&fit=crop&q=80", category: "Pre-Wedding", height: "500px" },
  { img: "https://images.unsplash.com/photo-1621621667797-e06afc217fb0?auto=format&fit=crop&q=80", category: "Portrait", height: "350px" },
  { img: "https://images.unsplash.com/photo-1520854221256-17451cc330e7?auto=format&fit=crop&q=80", category: "Haldi", height: "450px" },
  { img: "https://images.unsplash.com/photo-1522673607200-1645062cd958?auto=format&fit=crop&q=80", category: "Candid", height: "380px" },
  { img: "https://images.unsplash.com/photo-1583934555026-6d85ce8f01b9?auto=format&fit=crop&q=80", category: "Bridal", height: "420px" },
  { img: "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&q=80", category: "Couple", height: "320px" }
];

const Portfolio = () => {
  return (
    <>
      <PageHeader 
        title="Our Portfolio" 
        subtitle="Visual Artistry" 
        image="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80" 
      />
      <Container className="py-5">
        <Row className="g-4" data-masonry='{"percentPosition": true }'>
          {portfolioItems.map((item, index) => (
            <Col md={4} sm={6} key={index}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="portfolio-item position-relative mb-4 group"
              >
                <div className="overflow-hidden shadow-sm" style={{ borderRadius: '2px' }}>
                  <img 
                    src={item.img} 
                    alt={item.category} 
                    className="w-100 object-fit-cover transition-transform duration-700 hover:scale-105" 
                    style={{ height: item.height }} 
                  />
                </div>
                <div className="portfolio-overlay d-flex flex-column justify-content-center align-items-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 position-absolute top-0 start-0 w-100 h-100">
                  <h4 className="text-white font-serif letter-spacing-2">{item.category}</h4>
                  <div className="w-10 h-0.5 bg-gold mt-2"></div>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Portfolio;
