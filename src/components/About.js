import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, TrendingUp, Shield } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Enfoque en Resultados',
      description: 'Nos comprometemos con objetivos medibles y resultados tangibles para tu negocio.'
    },
    {
      icon: Shield,
      title: 'Confiabilidad',
      description: 'Construimos relaciones duraderas basadas en la transparencia y la confianza mutua.'
    },
    {
      icon: TrendingUp,
      title: 'Innovación Continua',
      description: 'Aplicamos las mejores prácticas y tecnologías más avanzadas del mercado.'
    },
    {
      icon: Users,
      title: 'Equipo Experto',
      description: 'Profesionales altamente calificados con amplia experiencia en diversas industrias.'
    }
  ];

  const achievements = [
    { number: '500+', label: 'Proyectos Completados' },
    { number: '15+', label: 'Años de Experiencia' },
    { number: '98%', label: 'Satisfacción del Cliente' },
    { number: '50+', label: 'Empresas Transformadas' }
  ];

  return (
    <section id="nosotros" className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
              Sobre Nosotros
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Somos una empresa líder en asesoría y servicios empresariales, dedicada a transformar 
            ideas en resultados exitosos a través de soluciones innovadoras y personalizadas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Misión */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-green-500 to-green-700 rounded-xl">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Nuestra Misión</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                Empoderar a las empresas con estrategias innovadoras y soluciones personalizadas 
                que impulsen su crecimiento sostenible y maximicen su potencial en el mercado competitivo actual.
              </p>
            </div>

            {/* Visión */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-green-400 to-green-600 rounded-xl">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Nuestra Visión</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                Ser reconocidos como la firma de asesoría más confiable y efectiva, 
                transformando el panorama empresarial a través de la excelencia en el servicio 
                y la innovación constante.
              </p>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 text-center shadow-lg border border-green-200/50"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-gray-600 font-medium text-sm">
                    {achievement.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full opacity-20 blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-green-300 to-green-500 rounded-full opacity-20 blur-xl" />
          </motion.div>
        </div>

        {/* Valores */}
        <motion.div
          className="space-y-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Nuestros Valores</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Los principios que guían cada decisión y acción en nuestra empresa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center space-y-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="flex justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-4 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl">
                    <value.icon className="w-8 h-8 text-green-600" />
                  </div>
                </motion.div>
                <h4 className="text-xl font-bold text-gray-900">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
