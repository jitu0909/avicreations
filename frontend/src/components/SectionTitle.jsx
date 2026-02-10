import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`mb-5 ${centered ? 'text-center' : ''}`}>
      {subtitle && (
        <motion.h6 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-gold text-uppercase letter-spacing-4 mb-2 font-serif"
          style={{ fontSize: '0.9rem' }}
        >
          {subtitle}
        </motion.h6>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="display-4 fw-bold section-title"
      >
        {title}
      </motion.h2>
    </div>
  );
};

export default SectionTitle;
