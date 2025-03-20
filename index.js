import express from 'express';
import  Router  from 'express';



// --- config.js --- //
import dotenv from 'dotenv';
const PORT= process.env.PORT || 3000;
const HOST = process.env.HOST || "http://localhost"
const NOMBRE = process.env.NOMBRE || "Mundo"
dotenv.config() // inicializar lectura de variables

const app = express();


// Middlewares

app.use(express.json()) // procesa datos del JSON BODY para procesar el  req.body  
app.use(express.urlencoded({extended:false})) // leer datos de urlEncoded con req.body()


// contenido estático
// app.use("origen", express.static("destino"))
app.use("/uploads", express.static('public/uploads'))

// para cargar la web index.html de dentro de public...
app.use("/web", express.static('public'))

app.get("/", (req , res , next)=>{
    res.setHeader("Content-Type", "text/html")

    const landingHtml = `
    <h2>Hola ${NOMBRE}!</h2>
    <p>Bienvenidos a la prueba del backend para ponerlo en Varcel</p>`;
    res.send(landingHtml)
})

// --- esto iría importado desde routes/index.routes.js
// Rutas de mi API
const router = Router()
router.get("/", (req, res, next)=>{
    res.json({message:"bienvenidos a mi API v1"})
})

router.get("/users", (req, res , next)=>{
    res.json({message: "ruta para obtener usuarios"})
})

// --- routes/index.routes.js ---//

app.use('/api/v1', router)


app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en ${HOST}:${PORT}`);
})