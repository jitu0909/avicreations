import { motion } from 'framer-motion';

const PageHeader = ({ title, subtitle, image }) => {
  return (
    <div className="position-relative d-flex align-items-center justify-content-center bg-black overflow-hidden" style={{ height: '50vh', marginTop: '0px' }}>
      <div className="position-absolute w-100 h-100 opacity-50">
        {image && <img src={image} alt={title} className="w-100 h-100 object-fit-cover" />}
        {!image && <div className="w-100 h-100 bg-secondary" />}
      </div>
      <div className="position-relative z-1 text-center text-white mt-5">
        <motion.h6 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-uppercase letter-spacing-4 mb-2 text-gold"
        >
          {subtitle}
        </motion.h6>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="display-4 fw-bold"
        >
          {title}
        </motion.h1>
      </div>
    </div>
  );
};

export default PageHeader;
