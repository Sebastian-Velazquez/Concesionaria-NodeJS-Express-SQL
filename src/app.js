//VA SIEMPRE
const express = require('express');
const session = require('express-session');
const path = require('path'); //Es necesario para que la carpeta views pueda estar adentro de la carpeta src
const methodOverride = require('method-override'); // Para poder usar los métodos PUT y DELETE


const app = express();

//muestra infomacion adicional en la consela si se esta enviando informacion 
const morgan = require('morgan');
app.use(morgan('dev'));//muestra infomacion adicional en la consela si se esta enviando informacion 

// Middlewares
app.use(session({ //npm i express-session. Para bloquear a alguno usuarios que no estan loguados // const session = require('express-session');
    secret: "Shh, It's a secret",
    resave: false,
    saveUninitialized: false,
}));
app.use(express.static(path.join(__dirname, '../public')));  // Necesario para los archivos estáticos en el folder /public
app.use(express.urlencoded({ extended: false })); // Para capturar el body
app.use(express.json()); // Para capturar el body
app.use(methodOverride('_method'));//Para crar, eliminar y modificar.. se puede poner cualquier nombre en '_method'

//para usar ejs
app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, '/views')); //Es necesario para que la carpeta views pueda estar adentro de la carpeta src// Define la ubicación de la carpeta de las Vistas

// Importamos routers//const path = require('path');// para accder a las paginas
const homeRouter = require('./routes/homeRouter.js')
const usersRouter = require('./routes/usersRouter.js')
const productsRouter = require('./routes/productsRouter.js')

// Usando los enrutadores importados linea 5
app.use("/", homeRouter);
app.use("/user", usersRouter);
app.use("/products", productsRouter);



const port = process.env.PORT || 3000;
app.listen(port,()=> console.log('Servidor corriendo en http://localhost:3000'));



//es para que la carpeta del proyecto public sea publicom, van html ejs css
app.use(express.static('public'));











//Creación de rutas. 
/* app.get('/', (req, res) => res.sendFile(path.join(__dirname, './views/index.html')));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, './views/login.html')));
app.get('/productCart', (req, res) => res.sendFile(path.join(__dirname, './views/productCart.html')));
app.get('/productDetail', (req, res) => res.sendFile(path.join(__dirname, './views/productDetail.html')));
app.get('/register', (req, res) => res.sendFile(path.join(__dirname, './views/register.html'))); */