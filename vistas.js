
const express = require('express')
const bodyParse = require('body-parser')
const hbs = require('express-handlebars')
const router = express.Router()
const chalk = require('chalk')

const app = express()

app.use(bodyParse.json())
app.use(bodyParse.urlencoded({extended: false}))
app.use(router)

// Definir motor de plantillas //

app.engine( 'html', hbs( {
    extname: '.html',
    //defaultView: 'main',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/'
  }));

app.set('view engine', 'html');

// ---------- Renderizar diseños ------------------ //
  

router.get('/pagina-inicial', function(req, res){
    //res.render('home', {layout: 'main', titulo_pagina: 'Página de inicio'})
    //res.render('home', {titulo_pagina: 'Página de inicio 2020', Nombre: 'Jorge', Password: '12345'})
    res.render('home')
})

router.get('/login', function(req, res){
    res.render('login', {titulo_pagina: 'Página de inicio 2020', Nombre: 'Jorge', Password: '12345'})
})

// -------------------------------------------- //

app.use('/app', express.static('public'))

app.listen('3000', function(){
    console.log( `Servidor prendido en el puerto 3000: ${chalk.bgMagenta(chalk.yellow('http://localhost:3000'))}`)
})

