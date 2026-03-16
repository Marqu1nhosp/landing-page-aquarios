import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Produto: ['Planos', 'Modalidades', 'App Aquários'],
    Empresa: ['Sobre Nós', 'Blog', 'Carreiras'],
    Legal: ['Privacidade', 'Termos', 'Contato'],
  };

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', link: 'https://facebook.com' },
    { icon: Instagram, label: 'Instagram', link: 'https://instagram.com' },
    { icon: Twitter, label: 'Twitter', link: 'https://twitter.com' },
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
    <footer id="contato" className="bg-dark-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <motion.div
          className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Brand Column */}
          <motion.div className="lg:col-span-1" variants={itemVariants}>
            <motion.div
              className="flex items-center gap-2 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 bg-gradient-neon rounded-lg flex items-center justify-center font-display text-white text-xl font-bold">
                AQ
              </div>
              <span className="text-white font-display text-lg font-bold">
                Aquários
              </span>
            </motion.div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Transformando corpos e mentes através do fitness moderno e profissional.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.link}
                    className="p-2 glass-effect rounded-lg hover:bg-neon-purple/20 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="text-gray-400 hover:text-neon-purple" size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links], columnIndex) => (
            <motion.div key={category} variants={itemVariants}>
              <h4 className="text-white font-display font-bold mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                  >
                    <a
                      href="#"
                      className="text-gray-400 hover:text-neon-purple transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Column */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-display font-bold mb-4">Contate-nos</h4>
            <div className="space-y-4">
              {/* Address */}
              <motion.a
                href="#"
                className="flex gap-3 text-gray-400 hover:text-neon-purple transition-colors group"
                whileHover={{ x: 5 }}
              >
                <MapPin className="text-neon-purple flex-shrink-0 mt-1" size={20} />
                <span className="text-sm leading-relaxed">
                  Av. Copacabana, 240<br />
                  Zabelê
                </span>
              </motion.a>

              {/* Phone */}
              <motion.a
                href="tel:+551133334444"
                className="flex gap-3 text-gray-400 hover:text-neon-purple transition-colors group"
                whileHover={{ x: 5 }}
              >
                <Phone className="text-neon-green flex-shrink-0" size={20} />
                <span className="text-sm">(11) 3333-4444</span>
              </motion.a>

              {/* Hours */}
              <motion.div
                className="flex gap-3 text-gray-400"
                whileHover={{ x: 5 }}
              >
                <Clock className="text-neon-blue flex-shrink-0" size={20} />
                <div className="text-sm">
                  <p>Seg-Sex: 6h - 22h</p>
                  <p>Sáb: 8h - 18h</p>
                  <p>Dom: 8h - 14h</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-neon-purple/30 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        ></motion.div>

        {/* Bottom Footer */}
        <motion.div
          className="py-8 flex flex-col sm:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2024 Aquários Academia. Desenvolvido por Marcos Porto. Todos os direitos reservados.
          </p>

          <motion.div
            className="flex gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <a
              href="#"
              className="text-gray-500 hover:text-neon-purple text-sm transition-colors"
            >
              Política de Privacidade
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-neon-purple text-sm transition-colors"
            >
              Termos de Serviço
            </a>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
