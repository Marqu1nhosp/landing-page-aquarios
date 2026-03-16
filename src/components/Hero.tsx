import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

// Tipos para o componente
interface HeroProps {
  title?: string;
  subtitle?: string;
}

interface Stat {
  number: string;
  label: string;
}

const Hero: React.FC<HeroProps> = ({
  title = 'Transforme seu corpo e sua mente',
  subtitle = 'Treinos personalizados, equipamentos modernos e acompanhamento profissional. Comece sua jornada de transformação com os melhores personal trainers certificados.',
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const stats: Stat[] = [
    { number: '500+', label: 'Alunos Ativos' },
    { number: '50+', label: 'Personal Trainers' },
    { number: '10+', label: 'Modalidades' },
  ];

  return (
    <section id="inicio" className="relative min-h-screen pt-20 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-dark z-0">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-80 h-80 bg-neon-purple rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-neon-blue rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <motion.div className="space-y-8" variants={itemVariants}>
            {/* Badge */}
            <motion.div
              className="inline-block"
              whileHover={{ scale: 1.05 }}
            >
              <div className="glass-effect glass-effect-hover px-4 py-2 rounded-full w-fit">
                <span className="text-neon-green text-sm font-semibold">🚀 Transformação Física Começa Aqui</span>
              </div>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-tight"
              variants={itemVariants}
            >
              <span className="block text-white">{title.split(' e ')[0]} e</span>
              <span className="gradient-text block">sua mente</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-lg sm:text-xl text-gray-400 max-w-2xl leading-relaxed"
              variants={itemVariants}
            >
              {subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <motion.button
                className="px-8 py-4 bg-gradient-neon rounded-lg text-white font-semibold text-lg btn-glow"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(168, 85, 247, 0.5)' }}
                whileTap={{ scale: 0.95 }}
              >
                Começar Agora
              </motion.button>
              <motion.button
                className="px-8 py-4 glass-effect glass-effect-hover rounded-lg text-white font-semibold text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Aula Experimental Grátis
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex gap-8 pt-8 border-t border-white/10"
              variants={itemVariants}
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-display font-bold bg-gradient-neon bg-clip-text text-transparent">
                    {stat.number}
                  </p>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative h-96 lg:h-full min-h-[500px]"
            variants={itemVariants}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-neon-purple to-neon-blue rounded-2xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Placeholder for hero image */}
              <div className="w-full h-full bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-white/60 text-lg">Imagem Hero</p>
                  <p className="text-white/40 text-sm mt-2">Substitua com imagem de fitness</p>
                  <p className="text-white/40 text-xs mt-4">Sugestão Unsplash:</p>
                  <p className="text-neon-blue text-xs">unsplash.com/?query=fitness+woman</p>
                </div>
              </div>
            </motion.div>

            {/* Floating decoration */}
            <motion.div
              className="absolute -top-10 -right-10 w-40 h-40 bg-neon-green/20 rounded-full blur-3xl"
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            ></motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-neon-purple" size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
