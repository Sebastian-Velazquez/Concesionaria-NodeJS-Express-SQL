
//VA SIEMPRE
const express = require('express');
//muestra infomacion adicional en la consela si se esta enviando informacion 
const morgan = require('morgan');
const app = express();

// Importamos routers//const path = require('path');// para accder a las paginas
const homeRouter = require('./routes/homeRouter.js')

//muestra infomacion adicional en la consela si se esta enviando informacion 
app.use(morgan('dev'));

//es para que la carpeta del proyecto public sea publicom, van html ejs css
app.use(express.static('public'));

//para usar ejs
app.set('view engine', 'ejs'); 

// Usando los enrutadores importados linea 5
app.use("/", homeRouter);

const port = process.env.PORT || 3000;
app.listen(port,()=> console.log('Servidor corriendo en http://localhost:3000'));



//Creación de rutas. 
/* app.get('/', (req, res) => res.sendFile(path.join(__dirname, './views/index.html')));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, './views/login.html')));
app.get('/productCart', (req, res) => res.sendFile(path.join(__dirname, './views/productCart.html')));
app.get('/productDetail', (req, res) => res.sendFile(path.join(__dirname, './views/productDetail.html')));
app.get('/register', (req, res) => res.sendFile(path.join(__dirname, './views/register.html'))); */