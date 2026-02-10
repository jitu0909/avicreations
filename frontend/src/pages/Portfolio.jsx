import { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import Masonry from 'react-masonry-css';
import SectionTitle from '../components/SectionTitle';

// Updated Portfolio Items with clean Pexels URLs to avoid ORB errors
const portfolioItems = [
  // Wedding
  { id: 1, category: "Wedding", img: "https://images.pexels.com/photos/10356555/pexels-photo-10356555.jpeg?auto=compress&cs=tinysrgb&w=800", height: "auto" }, // Bride Red
  { id: 2, category: "Wedding", img: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800", height: "auto" }, // Couple
  { id: 3, category: "Wedding", img: "https://images.pexels.com/photos/15898335/pexels-photo-15898335.jpeg?auto=compress&cs=tinysrgb&w=800", height: "auto" }, // Groom
  // Pre-Wedding / Nature
  { id: 4, category: "Pre-Wedding", img: "https://images.pexels.com/photos/3352398/pexels-photo-3352398.jpeg?auto=compress&cs=tinysrgb&w=800", height: "auto" }, // Couple Greenery
  { id: 5, category: "Pre-Wedding", img: "https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=800", height: "auto" }, // Sunset
  { id: 11, category: "Pre-Wedding", img: "https://images.pexels.com/photos/3585805/pexels-photo-3585805.jpeg?auto=compress&cs=tinysrgb&w=800", height: "auto" }, // Beach
  // Haldi
  { id: 6, category: "Haldi", img: "https://images.pexels.com/photos/12214660/pexels-photo-12214660.jpeg?auto=compress&cs=tinysrgb&w=800", height: "auto" }, // Haldi Yellow
  // Mehndi
  { id: 7, category: "Mehndi", img: "https://images.pexels.com/photos/5412432/pexels-photo-5412432.jpeg?auto=compress&cs=tinysrgb&w=800", height: "auto" }, // Mehndi Hands
  // Candid
  { id: 8, category: "Candid", img: "https://images.pexels.com/photos/14209598/pexels-photo-14209598.jpeg?auto=compress&cs=tinysrgb&w=800", height: "auto" }, // Laughing
  // More Indian Wedding
  { id: 9, category: "Wedding", img: "https://images.pexels.com/photos/5700204/pexels-photo-5700204.jpeg?auto=compress&cs=tinysrgb&w=800", height: "auto" }, // Cinematic
  { id: 10, category: "Haldi", img: "https://images.pexels.com/photos/11880946/pexels-photo-11880946.jpeg?auto=compress&cs=tinysrgb&w=800", height: "auto" } // Flowers
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
