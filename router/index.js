const express = require("express");
const router = express.Router();
const bodyParse = require("body-parser");

router.get('/',(req,res)=>{
    const valores = {
        precio: req.query.precio,
        años: req.query.años,
        tipoViaje: req.query.tipoViaje,
        boleto: req.query.boleto,
        destino: req.query.destino,
        nombreCliente: req.query.nombreCliente,
        tipoViaje: req.query.tipoViaje
     }
    res.render('index.html',valores)
 });
 router.post('/',(req,res)=>{
    const valores = {
        precio: req.body.precio,
        años: req.body.años,
        tipoViaje: req.body.tipoViaje,
        boleto: req.body.boleto,
        destino: req.body.destino,
        nombreCliente: req.body.nombreCliente,
        tipoViaje: req.body.tipoViaje
     }
    res.render('index.html',valores)
 });

module.exports=router;