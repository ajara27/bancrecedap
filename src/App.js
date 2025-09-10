import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import PortalDenuncias from './components/PortalDenuncias';
import IngresarDenuncia from './components/IngresarDenuncia';

const App = () => {
  return (
    <Router>
      {/* Header se muestra en todas las rutas */}
      <Header />

      {/* Contenido principal según la ruta */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Services />
              <About />
              <Contact />
            </>
          }
        />
        <Route path="/portal-denuncias" element={<PortalDenuncias />} />
        <Route path="/ingresar-denuncia" element={<IngresarDenuncia />} /> {/* ← Nueva ruta */}
      </Routes>

      {/* Footer se muestra en todas las rutas */}
      <Footer />
    </Router>
  );
};

export default App;

