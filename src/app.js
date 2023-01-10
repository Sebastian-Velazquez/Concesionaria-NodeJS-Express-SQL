//VA SIEMPRE
const express = require('express');
const path = require('path'); //Es necesario para que la carpeta views pueda estar adentro de la carpeta src
const methodOverride = require('method-override'); // Para poder usar los métodos PUT y DELETE


const app = express();

//muestra infomacion adicional en la consela si se esta enviando informacion 
const morgan = require('morgan');

// Middlewares
app.use(express.static(path.join(__dirname, '../public')));  // Necesario para los archivos estáticos en el folder /public
app.use(express.urlencoded({ extended: false })); // Para capturar el body
app.use(express.json()); // Para capturar el body
app.use(methodOverride('_method'));

//para usar ejs
app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, '/views')); //Es necesario para que la carpeta views pueda estar adentro de la carpeta src// Define la ubicación de la carpeta de las Vistas

// Importamos routers//const path = require('path');// para accder a las paginas
const homeRouter = require('./routes/homeRouter.js')
const usersRouter = require('./routes/usersRouter.js')
const productsRouter = require('./routes/productsRouter.js')

// Usando los enrutadores importados linea 5
app.use("/", homeRouter);
app.use("/", usersRouter);
app.use("/", productsRouter);



const port = process.env.PORT || 3000;
app.listen(port,()=> console.log('Servidor corriendo en http://localhost:3000'));

//muestra infomacion adicional en la consela si se esta enviando informacion 
app.use(morgan('dev'));

//es para que la carpeta del proyecto public sea publicom, van html ejs css
app.use(express.static('public'));











//Creación de rutas. 
/* app.get('/', (req, res) => res.sendFile(path.join(__dirname, './views/index.html')));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, './views/login.html')));
app.get('/productCart', (req, res) => res.sendFile(path.join(__dirname, './views/productCart.html')));
app.get('/productDetail', (req, res) => res.sendFile(path.join(__dirname, './views/productDetail.html')));
app.get('/register', (req, res) => res.sendFile(path.join(__dirname, './views/register.html'))); */