const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/products', async (req, res) => {
  const products = await ProductModel.getAll();

  res.status(200).json(products);
});

router.get('/products/:id', async (req, res) => {
  const product = await ProductModel.getById(req.params.id);

  res.status(200).json(product);
});

router.post('/products', async (req, res) => {
  const { name, brand } = req.body;

  const newProduct = await ProductModel.add(name, brand);

  res.status(201).json(newProduct);
});

router.delete('/products/:id', async (req, res) => {
  const products = await ProductModel.exclude(req.params.id);

  res.status(204).json();
});

router.update('/products/:id', async (req, res) => {
  const { name, brand } = req.body;

  const products = await ProductModel.update(req.params.id, name, brand);

  res.status(200).json(products);
});

module.exports = router;