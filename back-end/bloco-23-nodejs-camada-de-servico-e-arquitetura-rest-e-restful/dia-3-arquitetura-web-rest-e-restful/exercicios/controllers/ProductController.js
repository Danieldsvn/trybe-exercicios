const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/products', async (req, res) => {
  const products = await ProductModel.getAll();
  
  return res.status(200).json(products);
});

router.get('/products/:id', async (req, res) => {
  const product = await ProductModel.getById(req.params.id);
  if(product === null) {
    return res.status(404).json({ message: 'Produto não encontrado'});
  } 

  return res.status(200).json(product);
});

router.post('/products', async (req, res) => {
  const { name, brand } = req.body;

  if(!name || !brand) {
    return res.status(400).json({ message: 'Informações do produto inválidas'});
  } 

  const newProduct = await ProductModel.add(name, brand);

  return res.status(201).json(newProduct);
});

router.delete('/products/:id', async (req, res) => {
  const { id } = req.params;  
  const product = await ProductModel.exclude(id);
  if(product === null) {
    return res.status(404).json({ message: 'Produto não encontrado'})
  }

  return res.status(204).json();
});

router.update('/products/:id', async (req, res) => {
  const { id } = req.params;  
  if( await ProductModel.getById(id) === null) {
    return res.status(404).json({ message: 'Produto não encontrado'});
  }
  const { name, brand } = req.body;

  if(!name || !brand) {
    return res.status(400).json({ message: 'Informações do produto inválidas'});
  } 

  const products = await ProductModel.update(id, name, brand);

  return res.status(200).json(products);
});

module.exports = router;