var express = require('express');
var router = express.Router();
const PlantaService= require('../services/PlantaService');
const service = new PlantaService();;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/plantas',async function (req, res, next) {
  const plantas = await service.find();
  res.json(plantas);
});

router.get('/categorias',async function (req, res, next) {
  const categorias = await service.obtenerCategorias();
  res.json(categorias);
})

router.get('/categoria/:id',async function (req, res, next) {
  const {id} = req.params;
  const plantas = await service.findCateforia(id);
  res.json(plantas);
})

router.post('/venta',async function (req, res, next) {
  const body = req.body;
  const newVenta= await service.crearVenta(body.cliente);
   res.json(newVenta);
});

router.post('/login',async function (req, res, next) {
  const body=req.body;
    const cliente=await service.login(body);
    res.json(cliente);
});



router.post('/detalle-venta',async function (req, res, next) {
  const body = req.body;
  const newVenta= await service.crearDetalleVenta(body);
  res.json(newVenta);
})

router.post('/cliente',async function (req, res, next) {
  const body = req.body;
  const newVenta= await service.crearCliente(body);
  res.json(newVenta);
})

router.get('/getVenta/:id',async function(req,res,next){
  const {id} = req.params;
  const notaVenta=await service.getVenta(id);
  res.json(notaVenta);

  router.post('/compra',async function (req, res, next) {
    const body = req.body;
    const newCompra= await service.crearCompra(body);
    res.json(newCompra);
  });

  router.post('/detalle-compra',async function (req, res, next) {
    const body = req.body;
    const newCompra= await service.crearDetalleCompra(body);
    res.json(newCompra);
  });


})
module.exports = router;
