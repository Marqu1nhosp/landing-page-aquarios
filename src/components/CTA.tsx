import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import type { CTAProps } from '../types';

const CTA: React.FC<CTAProps> = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="cta" className="py-20 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 via-dark-950 to-neon-blue/20 z-0"></div>

      {/* Decorative animated elements */}
      <motion.div
        className="absolute top-10 left-10 w-72 h-72 bg-neon-purple/30 rounded-full mix-blend-screen filter blur-3xl"
        animate={{
          y: [0, 30, 0],
          x: [0, 15, 0],
        }}
        transition={{ duration: 6, repeat: Infinity }}
      ></motion.div>

      <motion.div
        className="absolute bottom-10 right-10 w-72 h-72 bg-neon-blue/30 rounded-full mix-blend-screen filter blur-3xl"
        animate={{
          y: [0, -30, 0],
          x: [0, -15, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
      ></motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Icon */}
          <motion.div
            className="inline-block mb-6"
            animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="p-4 bg-gradient-neon rounded-full">
              <Zap className="text-white" size={32} />
            </div>
          </motion.div>

          {/* Title */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
            <span className="text-white">Pronto para começar sua</span>
            <br />
            <span className="gradient-text">transformação?</span>
          </h2>

          {/* Description */}
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            Não deixe para depois. Comece hoje mesmo sua jornada para uma vida mais
            saudável, forte e confiante. Nossa equipe está pronta para te ajudar!
          </p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="px-8 sm:px-10 py-4 bg-gradient-neon rounded-lg text-white font-semibold text-lg btn-glow flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(168, 85, 247, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              Agendar Aula Experimental
              <ArrowRight size={20} />
            </motion.button>
            <motion.button
              className="px-8 sm:px-10 py-4 glass-effect glass-effect-hover rounded-lg text-white font-semibold text-lg flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              💬 Falar no WhatsApp
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            className="mt-12 flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">✅</span>
              <span>Pronta entrega de resultados</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <span>Clientes 100% satisfeitos</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🔒</span>
              <span>Garantia de 7 dias</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
