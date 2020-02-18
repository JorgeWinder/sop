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

    router.get('/mantenimiento-centro-de-costos-y-obras', function(req, res){
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

    router.get('/consulta-operaciones-obras', function(req, res){
        res.render('consulta-op-obras')
    })

    router.get('/registro-operaciones-centro-costos-obras', function(req, res){
        res.render('reg-op-centrocostos-obras')
    })

    router.get('/consultar-orden-compra-servicios', function(req, res){
        res.render('consultar-orden-compra-servicios')
    })

    router.get('/consultar-requerimientos', function(req, res){
        res.render('consultar-requerimientos')
    })
    
    router.get('/registro-comprobante', function(req, res){
        res.render('registro-comprobante')
    })


    // -------------------------------------------- //


}


module.exports = routers