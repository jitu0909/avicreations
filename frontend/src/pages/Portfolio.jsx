import { Container, Row, Col } from 'react-bootstrap';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';

const portfolioItems = [
  { img: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80", category: "Wedding" },
  { img: "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?auto=format&fit=crop&q=80", category: "Pre-Wedding" },
  { img: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&q=80", category: "Decoration" },
  { img: "https://images.unsplash.com/photo-1520854221256-17451cc330e7?auto=format&fit=crop&q=80", category: "Haldi" },
  { img: "https://images.unsplash.com/photo-1621621667797-e06afc217fb0?auto=format&fit=crop&q=80", category: "Portrait" },
  { img: "https://images.unsplash.com/photo-1522673607200-1645062cd958?auto=format&fit=crop&q=80", category: "Wedding" },
];

const Portfolio = () => {
  return (
    <>
      <PageHeader title="Our Portfolio" subtitle="Selected Works" image="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80" />
      <Container className="py-5">
        <Row className="g-4">
          {portfolioItems.map((item, index) => (
            <Col md={4} sm={6} key={index}>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="portfolio-item h-100"
              >
                <img src={item.img} alt={item.category} className="w-100 h-100 object-fit-cover" style={{ height: '300px' }} />
                <div className="portfolio-overlay">
                  <h4 className="text-white">{item.category}</h4>
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
