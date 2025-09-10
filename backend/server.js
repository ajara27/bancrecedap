import express from "express";
import mysql from "mysql2";
import cors from "cors";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import crypto from "crypto";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000; // Render define el puerto en process.env.PORT

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configuración nodemailer
const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false,
  auth: {
    user: "botbancrece@bancrece.cl",
    pass: "bancrece.2019"
  }
});

// Conexión MySQL usando variables de entorno en Render
const db = mysql.createConnection({
  host: process.env.DB_HOST || "201.148.104.254",
  user: process.env.DB_USER || "bancr_UsrBDCanal",
  password: process.env.DB_PASSWORD || "vmm010370@",
  database: process.env.DB_NAME || "bancrece_CanaldeDenuncias"
});

db.connect((err) => {
  if (err) {
    console.error("Error conectando a la base de datos:", err.message);
  } else {
    console.log("Conexión MySQL exitosa");
  }
});

// Función para enviar correo
const enviarCorreoDenuncia = async (denuncia) => {
  const { id, credenciales, Relacion, OP, SocNom, SocApe, SocMail, SocTel1, FecVal, SocObs } = denuncia;

  const mensaje = `
Nueva denuncia registrada:

Número de denuncia: ${id}
ID de acceso: ${credenciales.ID}
Contraseña: ${credenciales.Contrasena}

Datos del denunciante:
Nombre: ${SocNom} ${SocApe}
Correo: ${SocMail}
Teléfono: ${SocTel1}
Relación con Bancrece: ${Relacion}
Denuncia anónima: ${OP}

Datos de la denuncia:
Fecha de ocurrencia: ${FecVal}
Descripción: ${SocObs}
`;

  await transporter.sendMail({
    from: '"Canal de Denuncias" <botbancrece@bancrece.cl>',
    to: "botbancrece@bancrece.cl",
    subject: `Nueva denuncia #${id}`,
    text: mensaje
  });

  console.log("Correo de denuncia enviado con éxito!");
};

// Endpoint para guardar denuncia
app.post("/ingresar-denuncia", (req, res) => {
  let {
    Relacion,
    OP,
    SocNom,
    SocApe,
    SocMail,
    SocMail2,
    SocTel1,
    FecVal,
    OP2,
    SocObs,
    Conocimiento,
    SocNomotro,
    Lugar
  } = req.body;

  if (OP === "SI") {
    SocNom = "ANONIMO";
    SocApe = "ANONIMO";
    SocMail = "ANONIMO";
    SocMail2 = "ANONIMO";
    SocTel1 = "000000000";
    FecVal = FecVal || new Date().toISOString().split("T")[0]; 
    OP2 = "X";
    SocObs = SocObs || "";
    Conocimiento = Conocimiento || "";
    SocNomotro = SocNomotro || "";
    Lugar = Lugar || "ANONIMO";       
  }

  if (OP === "NO" && SocMail !== SocMail2) {
    return res.status(400).json({ success: false, msg: "Los correos no coinciden" });
  }

  const archivo = "Terreneitor.jpg";

  const idGenerado = crypto.randomBytes(5).toString("hex");
  const contrasenaGenerada = crypto.randomBytes(5).toString("hex");

  const sql = `
    INSERT INTO registrocanaldenuncia(
      id_relacion, DenunciaSiNo, Nombrequiendenuncia, ApellidoquienDenuncia,
      CorreoDenunciante, FonoDenunciante, FechaDenuncio, Identificarpersona,
      DescripcionHecho, IdComoTomoconocimiento, LugardeOcurrencia, OtroLugar,
      NombreArchivo, FechadeIngresoSistema, IDEstado, Fecha_Proceso, Fecha_Termino,
      ID, Contrasena
    ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,NOW(),2,NULL,NULL,?,?)
  `;

  db.query(
    sql,
    [Relacion, OP, SocNom, SocApe, SocMail, SocTel1, FecVal, OP2, SocObs, Conocimiento, Lugar, SocNomotro, archivo, idGenerado, contrasenaGenerada],
    async (err, result) => {
      if (err) {
        console.error("Error al insertar:", err);
        return res.status(500).json({ success: false, msg: "Error en servidor", error: err.message });
      }

      const credenciales = { ID: idGenerado, Contrasena: contrasenaGenerada };

      try {
        await enviarCorreoDenuncia({ ...req.body, id: result.insertId, credenciales });
      } catch (mailErr) {
        console.error("Error enviando correo:", mailErr);
      }

      return res.json({ success: true, id: result.insertId, credenciales });
    }
  );
});

// Endpoint de prueba
app.get("/test-db", (req, res) => {
  db.query("SELECT NOW() AS ahora", (err, result) => {
    if (err) {
      console.error("Error DB:", err);
      return res.status(500).json({ success: false, msg: "Error DB", error: err.message });
    }
    res.json({ success: true, result });
  });
});

// Servir React build
app.use(express.static(path.join(__dirname, "../build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

app.listen(PORT, () => console.log(`Servidor backend en http://localhost:${PORT}`));
