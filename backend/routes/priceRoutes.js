const express = require('express');
const Price = require('../model/price');
const router = express.Router();

router.get('/:symbol', async (req, res) => {
  const { symbol } = req.params;
  try {
    const prices = await Price.find({ symbol }).sort({ timestamp: -1 }).limit(20);
    res.json(prices);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
