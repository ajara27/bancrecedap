import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  // Slides del carrusel
  const slides = [
    {
      title: 'Impulsa tu negocio',
      subtitle: 'Asesoría experta en consultoría empresarial',
      cta: 'Comenzar Ahora',
      bgImage: '/imagenes/slide1.jpg'
    },
    {
      title: 'Transforma tus ideas',
      subtitle: 'Soluciones personalizadas para tu empresa',
      cta: 'Conocer Más',
      bgImage: '/imagenes/slide2.jpg'
    },
    {
      title: 'Resultados exitosos',
      subtitle: 'Más de 500 clientes satisfechos',
      cta: 'Contáctanos',
      bgImage: '/imagenes/slide4.jpg'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Cambio automático del carrusel cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section id="inicio" className="relative w-full h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        {slides.map(
          (slide, index) =>
            index === currentSlide && (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 flex items-center justify-center text-center"
                style={{
                  backgroundImage: `url(${slide.bgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {/* Overlay oscuro */}
                <div className="absolute inset-0 bg-black/50" />

                {/* Contenido del slide */}
                <div className="relative z-10 p-8 text-white max-w-3xl">
                  <h1 className="text-4xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
                    {slide.title}
                  </h1>
                  <p className="text-lg lg:text-2xl mb-6 drop-shadow-md">
                    {slide.subtitle}
                  </p>
                  <button className="px-6 py-3 bg-green-600 hover:bg-emerald-700 rounded-2xl font-semibold transition flex items-center gap-2 mx-auto shadow-lg">
                    {slide.cta}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            )
        )}
      </AnimatePresence>

      {/* Puntos de navegación */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition ${
              index === currentSlide
                ? 'bg-green-600'
                : 'bg-green-300 hover:bg-green-500'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
