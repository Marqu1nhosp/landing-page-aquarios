import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ana Silva',
      role: 'Executiva',
      avatar: '👩‍💼',
      rating: 5,
      text: 'Transformei meu corpo em 3 meses. Os personal trainers são incríveis e motivam a gente todos os dias. Recomendo muito!',
      image: 'Foto de Ana',
    },
    {
      name: 'Carlos Santos',
      role: 'Empresário',
      avatar: '👨‍💼',
      rating: 5,
      text: 'A Academia Aquários superou minhas expectativas. Ambiente moderno, treinos eficientes e uma comunidade incrível.',
      image: 'Foto de Carlos',
    },
    {
      name: 'Marina Costa',
      role: 'Designer',
      avatar: '👩‍🦰',
      rating: 5,
      text: 'Melhor decisão que tomei! Saí do sedentarismo e agora tenho uma vida muito mais saudável e equilibrada.',
      image: 'Foto de Marina',
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
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="depoimentos" className="py-20 bg-gradient-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-10 right-40 w-80 h-80 bg-neon-blue/10 rounded-full mix-blend-screen filter blur-3xl opacity-30"></div>
        <div className="absolute top-10 left-40 w-80 h-80 bg-neon-green/10 rounded-full mix-blend-screen filter blur-3xl opacity-30"></div>
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
            <span className="text-white">O que nossos</span>{' '}
            <span className="gradient-text">alunos falam</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Histórias reais de transformação e sucesso.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="glass-effect glass-effect-hover p-8 rounded-xl"
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: '0 20px 25px rgba(168, 85, 247, 0.15)' }}
            >
              {/* Stars */}
              <motion.div
                className="flex gap-1 mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
              >
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </motion.div>

              {/* Testimonial Text */}
              <p className="text-gray-300 mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <motion.div
                  className="w-12 h-12 rounded-full bg-gradient-neon flex items-center justify-center text-2xl"
                  whileHover={{ scale: 1.1 }}
                >
                  {testimonial.avatar}
                </motion.div>
                <div>
                  <p className="font-display font-bold text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats section */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          {[
            { number: '4.9', label: 'Avaliação Média' },
            { number: '500+', label: 'Alunos Satisfeitos' },
            { number: '98%', label: 'Taxa de Retenção' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="glass-effect p-8 rounded-xl text-center"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-4xl font-display font-bold bg-gradient-neon bg-clip-text text-transparent mb-2">
                {stat.number}
              </p>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
