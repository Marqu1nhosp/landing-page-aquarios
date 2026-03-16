import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import type { PricingProps, PricingPlan } from '../types';

const Pricing: React.FC<PricingProps> = () => {
  const plans: PricingPlan[] = [
    {
      name: 'Plano Mensal',
      price: 'R$ 149',
      period: '/mês',
      description: 'Perfeito para começar sua transformação',
      popular: false,
      features: [
        'Acesso completo à academia',
        '4 aulas de personal training',
        'App de acompanhamento',
        'Consulta nutricional inicial',
      ],
    },
    {
      name: 'Plano Trimestral',
      price: 'R$ 399',
      period: '/3 meses',
      description: 'Melhor economia para resultados reais',
      popular: false,
      features: [
        'Tudo do Plano Mensal',
        '12 aulas de personal training',
        'Avaliação física completa',
        'Programa de nutrição personalizado',
        'Acesso a workshops',
      ],
    },
    {
      name: 'Plano Anual',
      price: 'R$ 1.190',
      period: '/ano',
      description: 'Máxima economia e dedicação',
      popular: true,
      badge: 'Mais Popular',
      features: [
        'Tudo do Plano Trimestral',
        '48 aulas de personal training',
        'Assessoria contínua',
        'Acompanhamento semanal',
        'Sessões de suplementação',
        'Prioridade no agendamento',
      ],
    },
  ];

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
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="planos" className="py-20 bg-dark-950 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/10 rounded-full mix-blend-screen filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-green/10 rounded-full mix-blend-screen filter blur-3xl opacity-30"></div>
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
            <span className="text-white">Planos</span>{' '}
            <span className="gradient-text">Flexíveis</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Escolha o plano ideal para começar sua jornada de transformação.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {plans.map((plan: PricingPlan, index: number) => (
            <motion.div
              key={index}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                plan.popular ? 'md:scale-105' : ''
              }`}
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <motion.div
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="bg-gradient-neon px-4 py-1 rounded-full text-white text-sm font-semibold">
                    {plan.badge}
                  </div>
                </motion.div>
              )}

              {/* Card background */}
              <div
                className={`relative p-8 rounded-2xl border h-full flex flex-col ${
                  plan.popular
                    ? 'bg-gradient-card border-neon-purple/50 shadow-glow-purple'
                    : 'glass-effect border-white/10'
                }`}
              >
                {/* Header */}
                <div className="mb-8">
                  <h3 className="text-2xl font-display font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

                  {/* Price */}
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-display font-bold bg-gradient-neon bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex-1 mb-8 space-y-4">
                  {plan.features.map((feature: string, featureIndex: number) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: featureIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Check className="text-neon-green flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-neon text-white hover:shadow-glow-purple'
                      : 'glass-effect glass-effect-hover text-white'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Escolher Plano
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Money back guarantee */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400">
            💯 Garantia de satisfação ou<span className="text-neon-green font-semibold"> 100% reembolso</span> nos primeiros 7 dias
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
