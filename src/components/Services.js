import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  TrendingUp, 
  Users, 
  FileText, 
  Calculator, 
  Shield,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Briefcase,
      title: 'Consultoría Empresarial',
      description: 'Estrategias personalizadas para optimizar procesos y aumentar la rentabilidad de tu negocio.',
      features: ['Análisis de mercado', 'Planificación estratégica', 'Optimización de procesos'],
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: TrendingUp,
      title: 'Análisis Financiero',
      description: 'Evaluación completa de la salud financiera y proyecciones para el crecimiento sostenible.',
      features: ['Estados financieros', 'Proyecciones de flujo', 'Análisis de rentabilidad'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Users,
      title: 'Gestión de Recursos Humanos',
      description: 'Desarrollo del talento humano y optimización de la estructura organizacional.',
      features: ['Reclutamiento', 'Capacitación', 'Evaluación de desempeño'],
      color: 'from-purple-500 to-violet-600'
    },
    {
      icon: FileText,
      title: 'Asesoría Legal',
      description: 'Acompañamiento jurídico integral para proteger y hacer crecer tu empresa.',
      features: ['Contratos comerciales', 'Cumplimiento normativo', 'Resolución de conflictos'],
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Calculator,
      title: 'Servicios Contables',
      description: 'Gestión contable completa y asesoría tributaria para mantener tu empresa en regla.',
      features: ['Contabilidad general', 'Declaraciones fiscales', 'Auditorías internas'],
      color: 'from-teal-500 to-cyan-600'
    },
    {
      icon: Shield,
      title: 'Gestión de Riesgos',
      description: 'Identificación y mitigación de riesgos para proteger la continuidad del negocio.',
      features: ['Análisis de riesgos', 'Planes de contingencia', 'Seguros empresariales'],
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-white">
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
              Nuestros Servicios
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ofrecemos una gama completa de servicios profesionales diseñados para impulsar 
            el crecimiento y éxito de tu empresa en cada etapa de su desarrollo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <motion.div 
                    className={`p-4 bg-gradient-to-br ${service.color} rounded-2xl`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.1) + 0.3 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  className="w-full mt-6 px-6 py-3 bg-gray-50 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-700 text-gray-700 hover:text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Más Información
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;