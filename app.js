
const express = require('express');
/* app.use(morgan('dev')); */
const app = express();
const path = require('path');// para accder a las paginas

app.use(express.static('public'));// nose para que es

app.listen(3030,()=> console.log('Servidor corriendo en http://localhost:3030'));

//Creación de rutas

app.get('/', (req, res) => res.sendFile(path.join(__dirname, './views/index.html')));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, './views/login.html')));
app.get('/productCart', (req, res) => res.sendFile(path.join(__dirname, './views/productCart.html')));
app.get('/productDetail', (req, res) => res.sendFile(path.join(__dirname, './views/productDetail.html')));
app.get('/register', (req, res) => res.sendFile(path.join(__dirname, './views/register.html')));