const express = require("express");
const router = express.Router();
const bodyParse = require("body-parser");

router.get('/',(req,res)=>{
    const valores = {
        precio: req.query.precio,
        años: req.query.años,
        tipoViaje: req.query.tipoViaje
     }
    res.render('index.ejs',valores)
 });
 router.post('/',(req,res)=>{
    const valores = {
        precio: req.body.precio,
        años: req.body.años,
        tipoViaje: req.body.tipoViaje
     }
    res.render('index.ejs',valores)
 });



module.exports=router;