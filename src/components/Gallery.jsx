import React from 'react';
import { motion } from 'framer-motion';
import { ZoomIn } from 'lucide-react';

const Gallery = () => {
  const images = [
    {
      title: 'Sala de Musculação',
      category: 'Equipamentos',
      image: 'Imagem 1',
    },
    {
      title: 'Área de Crossfit',
      category: 'Treinamento',
      image: 'Imagem 2',
    },
    {
      title: 'Estúdio de Aulas',
      category: 'Aulas',
      image: 'Imagem 3',
    },
    {
      title: 'Piscina',
      category: 'Bem-estar',
      image: 'Imagem 4',
    },
    {
      title: 'Academia Geral',
      category: 'Ambiente',
      image: 'Imagem 5',
    },
    {
      title: 'Vestiários Premium',
      category: 'Infraestrutura',
      image: 'Imagem 6',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 bg-dark-950 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-neon-pink/10 rounded-full mix-blend-screen filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-blue/10 rounded-full mix-blend-screen filter blur-3xl opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            <span className="text-white">Conheça nossa</span>{' '}
            <span className="gradient-text">Infraestrutura</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Espaço moderno e aconchegante para sua melhor experiência.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="group relative h-64 rounded-xl overflow-hidden cursor-pointer"
              variants={itemVariants}
            >
              {/* Image container */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-neon-purple/30 to-neon-blue/30 rounded-xl overflow-hidden"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                {/* Placeholder for gallery image */}
                <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex flex-col items-center justify-center relative">
                  <p className="text-white/60 text-lg font-semibold">{img.image}</p>
                  <p className="text-white/40 text-sm mt-2">Substitua com imagem real</p>

                  {/* Suggested image sources */}
                  <div className="mt-4 text-center text-xs text-white/30 px-4">
                    <p>Sugestão Unsplash:</p>
                    <p className="font-mono text-neon-blue/70">
                      {index === 0 && 'gym-weights'}
                      {index === 1 && 'crossfit-training'}
                      {index === 2 && 'fitness-class'}
                      {index === 3 && 'swimming-pool'}
                      {index === 4 && 'modern-gym'}
                      {index === 5 && 'changing-room'}
                    </p>
                  </div>

                  {/* Overlay background on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 to-neon-blue/20"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  ></motion.div>
                </div>
              </motion.div>

              {/* Content overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent flex flex-col justify-between p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <div className="flex justify-end">
                  <motion.div
                    className="p-2 bg-white/10 rounded-lg backdrop-blur-sm"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ZoomIn className="text-white" size={20} />
                  </motion.div>
                </div>

                <div>
                  <p className="text-neon-blue text-sm font-semibold mb-1">
                    {img.category}
                  </p>
                  <h3 className="text-white font-display font-bold text-lg">
                    {img.title}
                  </h3>
                </div>
              </motion.div>

              {/* Border glow on hover */}
              <motion.div
                className="absolute inset-0 rounded-xl border border-neon-purple/0 group-hover:border-neon-purple/50 transition-all duration-300 pointer-events-none"
              ></motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* View all button */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-8 py-3 bg-gradient-neon rounded-lg text-white font-semibold"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(168, 85, 247, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            Ver Galeria Completa
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
