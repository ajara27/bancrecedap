import React, { useState } from "react";
import { Link } from 'react-router-dom';

const PortalDenuncias = () => {
  const [aceptaTerminos, setAceptaTerminos] = useState(false);

  return (
    <main className="container mx-auto max-w-5xl py-32 px-4 flex-1">
      {/* Título principal */}
      <h1 className="text-5xl font-bold text-center mb-16 text-green-700">
        Portal de Denuncias
      </h1>

      {/* Bloque de explicación */}
      <div className="bg-white p-10 rounded-2xl shadow-lg mb-12 border border-gray-200">
        <h4 className="text-2xl font-semibold mb-4">
          ¿Qué es el canal de denuncias?
        </h4>
        <p className="mb-6 leading-relaxed text-gray-700">
          Es una herramienta efectiva, confiable, segura y anónima por la cual
          colaboradores, clientes, proveedores y cualquier persona puede realizar 
          una denuncia oportuna y segura relacionada con incumplimientos al 
          Modelo de Prevención de Delitos, para que esta pueda ser analizada e 
          investigada por el sujeto Responsable y de esta forma tomar las decisiones 
          correctas y transparentes.
        </p>

        <h4 className="text-2xl font-semibold mb-4">¿Quién puede denunciar?</h4>
        <p className="mb-4 leading-relaxed text-gray-700">
          El proceso para denunciar un delito es sencillo, solo debe estar de acuerdo 
          con las siguientes condiciones:
        </p>
        <ul className="list-disc ml-8 space-y-2 text-gray-700 leading-relaxed">
          <li>Estar de acuerdo con las condiciones y términos establecidos en el protocolo de denuncia por BanCrece.</li>
          <li>Utilizar el Canal de Denuncia con responsabilidad.</li>
          <li>El Canal de Denuncia no es un servicio de reclamos o emergencias.</li>
          <li>Denunciar en forma anónima o reservada.</li>
          <li>Aportar todos los antecedentes de la denuncia de forma clara y precisa.</li>
          <li>Tener contacto si se requiere con el Sujeto Responsable.</li>
          <li>Recepción de clave de seguimiento de su denuncia.</li>
        </ul>
      </div>

      {/* Checkbox de términos */}
      <div className="mb-6 text-lg">
        <input
          type="checkbox"
          id="terminos"
          className="mr-3 w-5 h-5"
          checked={aceptaTerminos}
          onChange={() => setAceptaTerminos(!aceptaTerminos)}
        />
        <label htmlFor="terminos" className="font-medium text-gray-800">
          Acepto los términos y condiciones
        </label>
      </div>

      {/* Botones, aparecen solo si se acepta */}
      {aceptaTerminos && (
  <div className="flex gap-4 mt-4">
    <Link
      to="/ingresar-denuncia"
      className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
    >
      Ingresar Denuncia
    </Link>
    <Link
      to="/consultar-denuncia"
      className="px-4 py-2 bg-gray-600 text-white rounded-lg shadow hover:bg-gray-700 transition"
    >
      Consultar Estado de Denuncia
    </Link>
  </div>
)}
    </main>
  );
};

export default PortalDenuncias;
