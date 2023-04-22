//VA SIEMPRE
const express = require('express');
const session = require('express-session');
const path = require('path'); //Es necesario para que la carpeta views pueda estar adentro de la carpeta src
const methodOverride = require('method-override'); // Para poder usar los métodos PUT y DELETE
const cookie = require('cookie-parser');//modulo para guardar datos del lado del servidor. cache
const cors = require('cors')//para abilitar que consuman las Apis.. investigar CORS poque es seguridad informatica

const app = express();

//muestra infomacion adicional en la consela si se esta enviando informacion 
const morgan = require('morgan');
app.use(morgan('dev'));//muestra infomacion adicional en la consela si se esta enviando informacion 


const userLoggedMiddleware = require("./middlewares/global/userLoggedMiddleware")//global - para ver caundo esta logueado
// Middlewares
app.use(session({ //npm i express-session. Para bloquear a alguno usuarios que no estan loguados // const session = require('express-session');
    secret: "Shh, It's a secret",
    resave: false,
    saveUninitialized: false,
}));
app.use(cors())//CORS para habilitar Apis
app.use(cookie());
app.use(express.static(path.join(__dirname, '../public')));  // Necesario para los archivos estáticos en el folder /public
app.use(express.urlencoded({ extended: false })); // Para capturar el body
app.use(express.json()); // Para capturar el body
app.use(methodOverride('_method'));//Para crar, eliminar y modificar.. se puede poner cualquier nombre en '_method'
app.use(userLoggedMiddleware);

//para usar ejs
app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, '/views')); //Es necesario para que la carpeta views pueda estar adentro de la carpeta src// Define la ubicación de la carpeta de las Vistas

// Importamos routers//const path = require('path');// para accder a las paginas
const homeRouter = require('./routes/homeRouter.js')
const productsRouter = require('./routes/productsRouter.js')
const userRouter = require('./routes/userRouter.js')
const apiReact = require('./routes/apiReact.js')
//const usersRouter = require('./routes/usersRouter.js')
//const productsRouter = require('./routes/productsRouter.js')

// Usando los enrutadores importados linea 5
app.use("/", homeRouter);
app.use("/product", productsRouter);
app.use("/users", userRouter);
app.use("/api", apiReact);
//app.use("/user", usersRouter);
//app.use("/products", productsRouter);

// Middleware para manejar errores 404
app.use((req, res, next) => {
    // Crea un objeto de error personalizado
    const err = new Error('Página no encontrada');
    err.status = 404;
    //res.status(404).send('La página que buscas no se encontró');
    res.status(404).render('error404', { mensaje: 'La página que buscas no se encontró' });
  });
  
  // Middleware de manejo de errores
app.use((err, req, res, next) => {
    // Maneja otros errores que puedan ocurrir en la aplicación
    // Puedes personalizar la forma en que manejas los errores
    // en función de tus necesidades
    res.status(err.status || 500).send('Ha ocurrido un error en el servidor');
  });

const port = process.env.PORT || 3001;
app.listen(port,()=> console.log('Servidor corriendo en http://localhost:3001'));



//es para que la carpeta del proyecto public sea publicom, van html ejs css
app.use(express.static('public'));

