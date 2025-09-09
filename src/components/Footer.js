import React from 'react';
import { motion } from 'framer-motion';
import Logo from '../assets/logo1.png'
import { 
  TrendingUp, 
  Phone, 
  Mail, 
  MapPin,
  Facebook,
  Linkedin,
  Instagram,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    servicios: [
      'Consultoría Empresarial',
      'Análisis Financiero',
      'Gestión de RRHH',
      'Asesoría Legal',
      'Servicios Contables',
      'Gestión de Riesgos'
    ],
    empresa: [
      'Sobre Nosotros',
      'Nuestro Equipo',
      'Casos de Éxito',
      'Testimonios',
      'Carreras',
      'Blog'
    ],
    recursos: [
      'Centro de Ayuda',
      'Documentación',
      'Guías y Tutoriales',
      'Webinars',
      'Newsletter',
      'Contacto'
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/Bancrece/?locale=es_LA', color: 'hover:text-green-400' },
    { icon: Linkedin, href: 'https://cl.linkedin.com/company/bancrece', color: 'hover:text-green-500' },
    { icon: Instagram, href: 'https://www.instagram.com/cooperativabancrece/?hl=es-la', color: 'hover:text-green-400' }
  ];

  return (
    <footer className="bg-[#0d1b2a] text-white relative overflow-hidden">
      {/* Línea superior en degradado */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-600" />
      
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <motion.div 
              className="lg:col-span-2 space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3">
                <div className="p-1 rounded-full bg-white shadow-md">
                           <img src={Logo} alt="Bancrece Logo" className="w-10 h-10 object-contain" />
                    </div>
                <div>
                  <h3 className="text-2xl font-bold">Bancrece</h3>
                  <p className="text-green-300 text-sm">Asesoría & Servicios </p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                Transformamos ideas en resultados exitosos a través de asesoría experta 
                y soluciones innovadoras que impulsan el crecimiento sostenible de tu empresa.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-5 h-5 text-green-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-5 h-5 text-green-400" />
                  <span>info@bancrece.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-green-400" />
                  <span>Casa Matriz, Puerta del Sol #55</span>
                </div>
              </div>

              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                     rel="noopener noreferrer"
                    className={`p-3 bg-[#14213d] rounded-xl text-gray-300 transition-all duration-300 ${social.color} hover:bg-green-600 hover:text-white`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Secciones */}
            {Object.entries(footerLinks).map(([title, links], i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * (i+1) }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-bold mb-6 text-green-400 capitalize">{title}</h4>
                <ul className="space-y-3">
                  {links.map((link, index) => (
                    <li key={index}>
                      <a 
                        href="#" 
                        className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Bottom Section */}
          <motion.div 
            className="border-t border-green-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="text-gray-400 text-sm">
              © 2025 Bancrece Asesoría & Servicios SPA. Todos los derechos reservados.
            </div>
            
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Términos de Servicio
              </a>
              <motion.button
                onClick={scrollToTop}
                className="p-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowUp className="w-4 h-4 text-white" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
