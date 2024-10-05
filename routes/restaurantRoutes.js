import express from 'express';
import User from '../models/User.js';
import Order from '../models/Order.js';

const router = express.Router();

router.get('/:id/orders', async (req, res) => {
  try {
    const orders = await Order.find({ restaurant: req.params.id }).sort('-createdAt');
    res.json(orders);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { name, address, phone } = req.body;
    const restaurant = await User.findByIdAndUpdate(
      req.params.id,
      { name, address, phone },
      { new: true }
    );
    if (!restaurant) {
      return res.status(404).json({ error: 'Restaurant not found' });
    }
    res.json(restaurant);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;