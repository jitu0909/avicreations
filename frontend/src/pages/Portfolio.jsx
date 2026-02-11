import { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Masonry from 'react-masonry-css';
import SectionTitle from '../components/SectionTitle';

// STRICTLY INDIAN TRADITIONAL IMAGES ONLY (No Western content)
const portfolioItems = [
  // Wedding (Red/Gold & Trending)
  { id: 1, category: "Wedding", img: "https://images.pexels.com/photos/8565495/pexels-photo-8565495.jpeg?auto=compress&cs=tinysrgb&w=800", height: "auto" }, // Groom Turban + Bride Lehenga
  { id: 2, category: "Wedding", img: "https://images.pexels.com/photos/6544197/pexels-photo-6544197.jpeg?auto=compress&cs=tinysrgb&w=800", height: "auto" }, // Traditional Couple
  { id: 4, category: "Wedding", img: "https://images.pexels.com/photos/30155180/pexels-photo-30155180.jpeg?auto=compress&cs=tinysrgb&w=800", height: "auto" }, // New Romantic Embrace
  { id: 5, category: "Wedding", img: "https://images.pexels.com/photos/19733687/pexels-photo-19733687.jpeg?auto=compress&cs=tinysrgb&w=800", height: "auto" }, // Gujarat Couple
  { id: 6, category: "Wedding", img: "https://images.pexels.com/photos/31965606/pexels-photo-31965606.jpeg?auto=compress&cs=tinysrgb&w=800", height: "auto" }, // Holding Hands Detail
  
  // Engagement (Ring Ceremony & Young Couples)
  { id: 7, category: "Engagement", img: "https://images.pexels.com/photos/35625250/pexels-photo-35625250.jpeg?auto=compress&cs=tinysrgb&w=800", height: "auto" }, // New Outdoor Natural
  { id: 8, category: "Engagement", img: "https://images.pexels.com/photos/19230329/pexels-photo-19230329.jpeg?auto=compress&cs=tinysrgb&w=800", height: "auto" }, // Young Couple
  { id: 9, category: "Engagement", img: "https://images.pexels.com/photos/13768856/pexels-photo-13768856.jpeg?auto=compress&cs=tinysrgb&w=800", height: "auto" }, // Sunset Silhouette
  { id: 10, category: "Engagement", img: "https://images.pexels.com/photos/18628263/pexels-photo-18628263.jpeg?auto=compress&cs=tinysrgb&w=800", height: "auto" }, // Hands Detail
  
  // Pre-Wedding (Outdoors & Scenic)
  { id: 11, category: "Pre-Wedding", img: "https://images.pexels.com/photos/13768856/pexels-photo-13768856.jpeg?auto=compress&cs=tinysrgb&w=800", height: "auto" }, // Sunset Silhouette
  { id: 12, category: "Pre-Wedding", img: "https://images.pexels.com/photos/19733687/pexels-photo-19733687.jpeg?auto=compress&cs=tinysrgb&w=800", height: "auto" }, // Couple Outdoor
  { id: 13, category: "Pre-Wedding", img: "https://images.pexels.com/photos/6544197/pexels-photo-6544197.jpeg?auto=compress&cs=tinysrgb&w=800", height: "auto" }, // Couple Standing
  { id: 14, category: "Pre-Wedding", img: "https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=800", height: "auto" }, // Silhouette
  
  // Reception (Evening, Party, Dance)
  { id: 15, category: "Reception", img: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800", height: "auto" }, // Couple Dancing
  { id: 16, category: "Reception", img: "https://images.pexels.com/photos/5412353/pexels-photo-5412353.jpeg?auto=compress&cs=tinysrgb&w=800", height: "auto" }, // Petal Shower Celebration
  { id: 17, category: "Reception", img: "https://images.pexels.com/photos/19230329/pexels-photo-19230329.jpeg?auto=compress&cs=tinysrgb&w=800", height: "auto" }, // Couple Night
  { id: 18, category: "Reception", img: "https://images.pexels.com/photos/15898335/pexels-photo-15898335.jpeg?auto=compress&cs=tinysrgb&w=800", height: "auto" }  // Groom Evening
];

const categories = ["All", "Wedding", "Engagement", "Pre-Wedding", "Reception"];

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
    <div className="min-vh-100 py-5" style={{ backgroundColor: '#fffdf5' }}>
      <Container className="py-5">
        <SectionTitle title="Shubh Vivah" subtitle="Our Gallery" />
        
        {/* Filter Buttons */}
        <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant="link"
              className={`text-decoration-none text-uppercase letter-spacing-2 px-3 ${
                filter === cat ? 'text-warning border-bottom border-warning fw-bold' : 'text-secondary'
              }`}
              onClick={() => setFilter(cat)}
              style={{ borderRadius: 0, fontSize: '1.1rem', fontFamily: 'serif' }}
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
          {filteredItems.map((item, index) => (
            <motion.div 
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              key={`${item.id}-${index}`} // unique key for duplicates
              className="portfolio-item position-relative mb-4 group"
            >
              <div className="overflow-hidden shadow-sm position-relative border border-warning border-opacity-10">
                <img 
                  src={item.img} 
                  alt={item.category} 
                  className="w-100 h-auto d-block transition-transform duration-700 hover:scale-105" 
                />
                <div className="position-absolute bottom-0 start-0 w-100 p-3 bg-gradient-to-t from-black opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-uppercase letter-spacing-2 mb-0 small font-serif">{item.category}</p>
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
