import express from 'express';
import User from '../models/User.js';
import Order from '../models/Order.js';

const router = express.Router();

router.get('/:id/orders', async (req, res) => {
  try {
    const orders = await Order.find({ courier: req.params.id, status: { $in: ['ready_for_pickup', 'in_transit'] } }).sort('-createdAt');
    res.json(orders);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put('/:id/location', async (req, res) => {
  try {
    const { latitude, longitude } = req.body;
    const courier = await User.findByIdAndUpdate(
      req.params.id,
      { location: { type: 'Point', coordinates: [longitude, latitude] } },
      { new: true }
    );
    if (!courier) {
      return res.status(404).json({ error: 'Courier not found' });
    }
    res.json(courier);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;