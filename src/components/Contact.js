import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from 'lucide-react';





const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false); // <-- nuevo estado

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSending) return; // Evita envíos múltiples
    setIsSending(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message
    };

    emailjs.send(
      'service_7o8c1uz',
      'template_6dcz5t7',
      templateParams,
      'h8mqwqjiWvQg8oBk_'
    )
    .then((response) => {
      console.log('Correo enviado!', response.status, response.text);
      setIsSubmitted(true);
      setIsSending(false); // <-- reactivar el botón
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      }, 3000);
    })
    .catch((err) => {
      console.error('Error al enviar correo:', err);
      alert('Ocurrió un error al enviar el mensaje. Intenta nuevamente.');
      setIsSending(false); // <-- reactivar el botón si falla
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* ... tus inputs ... */}
      <button
        type="submit"
        disabled={isSending} // <-- deshabilitado mientras envía
        className="w-full px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
      >
        {isSending ? 'Enviando...' : 'Enviar Mensaje'}
      </button>
    </form>
  );
};

  const contactInfo = [
    {
      icon: Phone,
      title: 'Teléfono',
      details: ['600 360 06 06', '600 360 06 06'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@bancrece.com', 'contacto@bancrece.com'],
      color: 'from-green-400 to-green-600'
    },
    {
      icon: MapPin,
      title: 'Dirección',
      details: ['Casa Matriz Puerta del Sol #55','Las Condes, Santiago, Chile'],
      color: 'from-green-500 to-emerald-700'
    },
    {
      icon: Clock,
      title: 'Horarios',
      details: ['Lun - juev: 9:00 AM - 6:00 PM', 'vier: 9:00 AM - 5:00 PM'],
      color: 'from-lime-500 to-green-600'
    }
  ];

  const services = [
    'Consultoría Empresarial',
    'Análisis Financiero',
    'Gestión de RRHH',
    'Asesoría Legal',
    'Servicios Contables',
    'Gestión de Riesgos'
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/Bancrece/?locale=es_LA', color: 'hover:text-green-600' },
    { icon: Linkedin, href: 'https://cl.linkedin.com/company/bancrece', color: 'hover:text-green-700' },
    { icon: Instagram, href: 'https://www.instagram.com/cooperativabancrece/?hl=es-la', color: 'hover:text-green-600' }
  ];

  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-green-50 via-white to-green-100">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent">
              Contáctanos
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Estamos aquí para ayudarte a impulsar tu negocio. Ponte en contacto con nosotros 
            y descubre cómo podemos transformar tus ideas en resultados exitosos.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            className="lg:col-span-1 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-gray-200/50"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 bg-gradient-to-br ${info.color} rounded-xl`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{info.title}</h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-gray-200/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="font-bold text-gray-900 mb-4">Síguenos</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`p-3 bg-gray-100 rounded-xl text-gray-600 transition-colors duration-300 ${social.color}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-200/50">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500 transition-all duration-300"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500 transition-all duration-300"
                        placeholder="tucorreo@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500 transition-all duration-300"
                        placeholder="+569 5555 5555"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Servicio de Interés
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500 transition-all duration-300"
                      >
                        <option value="">Selecciona un servicio</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500 transition-all duration-300 resize-none"
                      placeholder="Cuéntanos sobre tu consulta....."
                    />
                  </div>

                  <motion.button
  type="submit"
  disabled={isSending} // <-- deshabilita el botón mientras envía
  className={`w-full px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-semibold rounded-2xl shadow-lg transition-all duration-300 flex items-center justify-center gap-3
    ${isSending ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-xl'}`}
  whileHover={isSending ? {} : { scale: 1.02, y: -2 }} // evita hover mientras envía
  whileTap={isSending ? {} : { scale: 0.98 }}
>
  {isSending ? 'Enviando...' : 'Enviar Mensaje'}  {/* cambia el texto */}
  <Send className="w-5 h-5" />
</motion.button>

                </form>
              ) : (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    ¡Mensaje Enviado!
                  </h3>
                  <p className="text-gray-600">
                    Gracias por contactarnos. Te responderemos a la brevedad.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );


export default Contact;
