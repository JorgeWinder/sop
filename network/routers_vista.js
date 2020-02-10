const express = require('express')

const routers = function(server){

    const router = express.Router()
    server.use(router)
    

    // ---------- Renderizar diseños --------------- //

    router.get('/pagina-de-inicio', function(req, res){
        res.render('home')
    })

    router.get('/', function(req, res){
        res.render('login', {layout: 'acceso', script_name: 'acceso'})
    })

    router.get('/registrar-movientos-almacen', function(req, res){
        res.render('registrar-movientos-almacen')
    })

    router.get('/mantenimiento-cc-obras', function(req, res){
        res.render('mant-cc-obras')
    })

    router.get('/mantenimiento-partidas-sub-partidas', function(req, res){
        res.render('mant-partidas-subpartidas')
    })

    router.get('/mantenimiento-area', function(req, res){
        res.render('mant-area')
    })

    router.get('/mantenimiento-proveedores', function(req, res){
        res.render('mant-proveedores')
    })

    router.get('/centro-costos-obras', function(req, res){
        res.render('centro-costos-obras')
    })

    router.get('/detalle-centro-costos-obras', function(req, res){
        res.render('detalle-centro-costos-obras')
    })

    router.get('/registro-orden-compra-servicios', function(req, res){
        res.render('registro-orden-compra-servicios')
    })

    router.get('/registro-requerimientos', function(req, res){
        res.render('registro-requerimientos')
    })


    // -------------------------------------------- //


}


module.exports = routers