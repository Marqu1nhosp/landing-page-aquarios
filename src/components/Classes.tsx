import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { ClassesProps, FitnessClass } from '../types';

const Classes: React.FC<ClassesProps> = () => {
  const classes: FitnessClass[] = [
    {
      name: 'Musculação',
      description: 'Aumento de massa muscular com técnicas avançadas de periodização.',
      color: 'from-red-500 to-pink-600',
      icon: '💪',
    },
    {
      name: 'Cross Training',
      description: 'Treinos intensos que combinam diferentes disciplinas para máximo resultado.',
      color: 'from-orange-500 to-red-500',
      icon: '⚡',
    },
    {
      name: 'Funcional',
      description: 'Exercícios que simulam movimentos do dia a dia para melhor funcionalidade.',
      color: 'from-green-500 to-teal-600',
      icon: '🎯',
    },
    {
      name: 'Cardio',
      description: 'Aumento de resistência cardiovascular com alta eficiência calórica.',
      color: 'from-blue-500 to-purple-600',
      icon: '❤️',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section className="py-20 bg-gradient-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-neon-purple/20 rounded-full mix-blend-screen filter blur-3xl opacity-40"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-neon-pink/20 rounded-full mix-blend-screen filter blur-3xl opacity-40"></div>
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
            <span className="text-white">Modalidades de</span>{' '}
            <span className="gradient-text">Treino</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Escolha a modalidade perfeita para suas metas de fitness.
          </p>
        </motion.div>

        {/* Classes Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {classes.map((classItem: FitnessClass, index: number) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-xl cursor-pointer h-80"
            >
              {/* Background gradient */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${classItem.color} opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
              ></motion.div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-between p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 group-hover:border-white/40 transition-colors duration-300">
                {/* Top */}
                <div>
                  <motion.div
                    className="text-5xl mb-4"
                    whileHover={{ scale: 1.3, rotate: 10 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                  >
                    {classItem.icon}
                  </motion.div>
                  <h3 className="text-2xl font-display font-bold text-white mb-3">
                    {classItem.name}
                  </h3>
                </div>

                {/* Bottom */}
                <div>
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed h-12">
                    {classItem.description}
                  </p>
                  <motion.div
                    className="flex items-center gap-2 text-neon-blue font-semibold"
                    whileHover={{ x: 5 }}
                  >
                    <span>Saiba mais</span>
                    <ArrowRight size={18} />
                  </motion.div>
                </div>

                {/* Hover overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${classItem.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}
                ></motion.div>
              </div>

              {/* Animated border on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${classItem.color} rounded-xl opacity-0 group-hover:opacity-20 blur pointer-events-none`}
                initial={false}
                whileHover={{ opacity: 0.2 }}
              ></motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Classes;
