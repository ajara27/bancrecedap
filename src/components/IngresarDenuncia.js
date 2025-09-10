import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom";





const IngresarDenuncia = () => {
    const navigate = useNavigate();
  const [relacion, setRelacion] = useState("");
  const [esAnonima, setEsAnonima] = useState("");
  const [captchaValue, setCaptchaValue] = useState(null);
  

  const [formData, setFormData] = useState({
    SocNom: "",
    SocApe: "",
    SocMail: "",
    SocMail2: "",
    SocTel1: "",
    FecVal: "",
    OP2: "",
    SocObs: "",
    Conocimiento: "",
    SocOtroConocimiento: "",
    Lugar: "",
    SocNomotro: "",
    fileToUpload: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
    console.log("Captcha value:", value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaValue) {
      alert("Por favor, completa el captcha antes de enviar.");
      return;
    }

    const data = {
      ...formData,
      Relacion: relacion,
      OP: esAnonima === "Si" ? "SI" : "NO",
      captchaValue,
    };

    try {
      const res = await fetch("/ingresar-denuncia", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        alert("Denuncia enviada con éxito ✅");
        navigate("/portal-denuncias"); 
      } else {
        alert(result.msg || "Hubo un error ❌");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Error de conexión con servidor");
    }
  };

  return (
    <main className="flex-1 container mx-auto px-6 py-32 max-w-4xl">
      <h1 className="text-5xl font-bold text-center mb-16 text-green-700">
        Ingresar Denuncia
      </h1>

      <form
        className="bg-white p-10 rounded-2xl shadow-xl space-y-8"
        onSubmit={handleSubmit}
      >
        {/* Relación con Bancrece */}
        <div>
  <label className="block font-medium mb-2">
    ¿Cuál es su relación con Bancrece?
  </label>
  <select
    name="Relacion"
    value={relacion}
    onChange={(e) => setRelacion(e.target.value)}
    className="w-full border rounded-lg p-3"
    required
  >
    <option value="">Seleccione...</option>
    <option value="1">Socio</option>
    <option value="2">Colaborador</option>
    <option value="3">Proveedor</option>
    <option value="4">Otros</option>
  </select>
</div>


        {/* Es anónima */}
        <div>
          <label className="block font-medium mb-2">
            ¿Desea que la denuncia sea anónima?
          </label>
          <select
            name="OP"
            value={esAnonima}
            onChange={(e) => setEsAnonima(e.target.value)}
            className="w-full border rounded-lg p-3"
            required
          >
            <option value="">Seleccione...</option>
            <option value="Si">Sí</option>
            <option value="No">No</option>
          </select>
        </div>

        {/* Campos si NO es anónima */}
        {esAnonima === "No" && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="SocNom"
                placeholder="Nombre"
                value={formData.SocNom}
                onChange={handleChange}
                className="border rounded-lg p-3 w-full"
                required
              />
              <input
                type="text"
                name="SocApe"
                placeholder="Apellido"
                value={formData.SocApe}
                onChange={handleChange}
                className="border rounded-lg p-3 w-full"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="email"
                name="SocMail"
                placeholder="Correo"
                value={formData.SocMail}
                onChange={handleChange}
                className="border rounded-lg p-3 w-full"
                required
              />
              <input
                type="email"
                name="SocMail2"
                placeholder="Confirmar correo"
                value={formData.SocMail2}
                onChange={handleChange}
                className="border rounded-lg p-3 w-full"
                required
              />
            </div>
            <input
              type="tel"
              name="SocTel1"
              placeholder="Teléfono de contacto"
              value={formData.SocTel1}
              onChange={handleChange}
              className="border rounded-lg p-3 w-full"
              required
            />
          </>
        )}

        {/* Fecha ocurrencia */}
        <input
          type="date"
          name="FecVal"
          value={formData.FecVal}
          onChange={handleChange}
          className="border rounded-lg p-3 w-full"
          required
        />

        {/* Personas comprometidas */}
        <div>
          <label className="block font-medium mb-2">
            ¿Puede identificar a las personas comprometidas?
          </label>
          <select
            name="OP2"
            value={formData.OP2}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          >
            <option value="">Seleccione...</option>
            <option value="SI">Sí</option>
            <option value="NO">No</option>
            <option value="NOS">No sé/No desea revelar</option>
          </select>
        </div>

        {/* Descripción */}
        <textarea
          name="SocObs"
          placeholder="Describa los hechos"
          value={formData.SocObs}
          onChange={handleChange}
          className="border rounded-lg p-3 w-full h-40"
          required
        />

        {/* Cómo se enteró */}
        <div>
          <label className="block font-medium mb-2">
            ¿Cómo tomó conocimiento de la situación?
          </label>
          <select
            name="Conocimiento"
            value={formData.Conocimiento}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          >
            <option value="">Seleccione...</option>
            <option value="1">Lo escuché</option>
            <option value="2">Me paso a mi</option>
            <option value="3">Lo observe</option>
            <option value="4">Un compañero de la oficina me lo mencionó</option>
            <option value="5">Por casualidad encontre un documento</option>
            <option value="6">Otro</option>
          </select>
        </div>

        <input
          type="text"
          name="SocOtroConocimiento"
          placeholder="Otro (si corresponde)"
          value={formData.SocOtroConocimiento}
          onChange={handleChange}
          className="border rounded-lg p-3 w-full"
        />

        {/* Lugar de ocurrencia */}
        <div>
          <label className="block font-medium mb-2">Indique el lugar de ocurrencia</label>
          <select
            name="Lugar"
            value={formData.Lugar}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          >
            <option value="">Seleccione...</option>
            <option value="1">Casa Matriz</option>
            <option value="2">Moneda</option>
            <option value="3">Viña del mar</option>
            <option value="4">Talca</option>
            <option value="5">Concepción</option>
            <option value="6">Puerto Montt</option>
            <option value="7">Otro</option>
          </select>
        </div>

        {/* Otro lugar */}
        {formData.Lugar === "5" && (
          <input
            type="text"
            name="SocNomotro"
            placeholder="Indique otro lugar"
            value={formData.SocNomotro}
            onChange={handleChange}
            className="border rounded-lg p-3 w-full"
          />
        )}

        {/* Archivo */}
        <div>
          <label className="block font-medium mb-2">Adjuntar archivo</label>
          <input
            type="file"
            name="fileToUpload"
            onChange={handleChange}
            className="w-full"
          />
        </div>

        {/* reCAPTCHA */}
        <div className="flex justify-center mt-4">
          <ReCAPTCHA
            sitekey="6LfexsMrAAAAAGNY3HbDtlmIgFNztMj9iXyjjmOm"
            onChange={handleCaptchaChange}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-4 rounded-2xl font-semibold hover:bg-green-700 transition text-lg mt-4"
        >
          Enviar
        </button>
      </form>
    </main>
  );
};  

export default IngresarDenuncia;
