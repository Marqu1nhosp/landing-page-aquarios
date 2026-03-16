import { motion } from 'framer-motion';
import {
  Dumbbell,
  Wind,
  Zap,
  Users,
  TrendingUp,
  Sparkles,
} from 'lucide-react';
import type { BenefitsProps, Benefit } from '../types';

const Benefits: React.FC<BenefitsProps> = () => {
  const benefits: Benefit[] = [
    {
      icon: Dumbbell,
      title: 'Equipamentos Modernos',
      description: 'Tecnologia de ponta para potencializar seus treinos e resultados.',
    },
    {
      icon: Users,
      title: 'Personal Trainers Certificados',
      description: 'Profissionais experientes e dedicados ao seu progresso.',
    },
    {
      icon: Wind,
      title: 'Ambiente Climatizado',
      description: 'Conforto total para treinar em qualquer estação do ano.',
    },
    {
      icon: Zap,
      title: 'Treinos Personalizados',
      description: 'Programas específicos de acordo com seus objetivos.',
    },
    {
      icon: TrendingUp,
      title: 'Resultados Rápidos',
      description: 'Metodologias comprovadas que entregam transformação real.',
    },
    {
      icon: Sparkles,
      title: 'Comunidade Motivadora',
      description: 'Rede de apoio para manter sua motivação em alta.',
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 bg-dark-950 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-neon-blue/10 rounded-full mix-blend-screen filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-purple/10 rounded-full mix-blend-screen filter blur-3xl opacity-30"></div>
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
            <span className="text-white">Por que escolher a</span>{' '}
            <span className="gradient-text">Aquários?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tudo o que você precisa para alcançar seus objetivos de saúde e fitness.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {benefits.map((benefit: Benefit, index: number) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                className="group glass-effect glass-effect-hover p-8 rounded-xl"
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  boxShadow: '0 20px 40px rgba(168, 85, 247, 0.2)',
                }}
              >
                {/* Icon */}
                <motion.div
                  className="mb-6 inline-block p-3 bg-gradient-neon rounded-lg"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  <Icon className="text-white" size={28} />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-display font-bold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Decorative line on hover */}
                <motion.div
                  className="mt-4 h-1 bg-gradient-neon rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
