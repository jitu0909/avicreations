import { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import Masonry from 'react-masonry-css';
import SectionTitle from '../components/SectionTitle';

const portfolioItems = [
  // Wedding
  { id: 1, category: "Wedding", img: "https://images.unsplash.com/photo-1595514682333-722e96d2524d?q=80&w=800", height: "auto" }, // Bride Red
  { id: 2, category: "Wedding", img: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=800", height: "auto" }, // Decor
  { id: 3, category: "Wedding", img: "https://images.unsplash.com/photo-1549416876-b930d6718d72?q=80&w=800", height: "auto" }, // Traditional Bride
  // Pre-Wedding / Nature
  { id: 4, category: "Pre-Wedding", img: "https://images.unsplash.com/photo-1623164100984-722881e5b475?q=80&w=800", height: "auto" }, // Couple Greenery
  { id: 5, category: "Pre-Wedding", img: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=800", height: "auto" }, // Landscape
  { id: 11, category: "Pre-Wedding", img: "https://images.unsplash.com/photo-1532712938310-34cb3958d42d?q=80&w=800", height: "auto" }, // Couple Field
  // Haldi
  { id: 6, category: "Haldi", img: "https://images.unsplash.com/photo-1634547263595-5c1a71c8466f?q=80&w=800", height: "auto" }, // Haldi Smear
  // Mehndi
  { id: 7, category: "Mehndi", img: "https://images.unsplash.com/photo-1583934555026-6d85ce8f01b9?q=80&w=800", height: "auto" }, // Mehndi Hands
  // Candid
  { id: 8, category: "Candid", img: "https://images.unsplash.com/photo-1522673607200-1645062cd958?q=80&w=800", height: "auto" }, // Laughing
  // More Indian Wedding
  { id: 9, category: "Wedding", img: "https://images.unsplash.com/photo-1519225448526-06451554c289?q=80&w=800", height: "auto" }, // Details
  { id: 10, category: "Haldi", img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800", height: "auto" } // Yellow Flowers
];

const categories = ["All", "Wedding", "Pre-Wedding", "Haldi", "Mehndi", "Candid"];

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1
};

const Portfolio = () => {
  const [filter, setFilter] = useState("All");

  const filteredItems = filter === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <div className="bg-white min-vh-100 py-5">
      <Container className="py-5">
        <SectionTitle title="Our Portfolio" subtitle="Visual Stories" />
        
        {/* Filter Buttons */}
        <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant="link"
              className={`text-decoration-none text-uppercase letter-spacing-2 px-3 ${
                filter === cat ? 'text-gold border-bottom border-gold' : 'text-secondary'
              }`}
              onClick={() => setFilter(cat)}
              style={{ borderRadius: 0 }}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Masonry Grid */}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {filteredItems.map((item) => (
            <motion.div 
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              key={item.id}
              className="portfolio-item position-relative mb-4 group"
            >
              <div className="overflow-hidden shadow-sm position-relative">
                <img 
                  src={item.img} 
                  alt={item.category} 
                  className="w-100 h-auto d-block transition-transform duration-700 hover:scale-105" 
                />
                <div className="position-absolute bottom-0 start-0 w-100 p-3 bg-gradient-to-t from-black opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-uppercase letter-spacing-2 mb-0 small">{item.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </Masonry>
      </Container>
    </div>
  );
};

export default Portfolio;
