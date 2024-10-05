import express from 'express';
import Order from '../models/Order.js';
import { Client } from "@googlemaps/google-maps-services-js";

const router = express.Router();
const googleMapsClient = new Client({});

router.post('/', async (req, res) => {
  try {
    const { clientId, restaurantId, items, totalPrice, deliveryAddress } = req.body;
    const order = new Order({
      client: clientId,
      restaurant: restaurantId,
      items,
      totalPrice,
      deliveryAddress
    });
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put('/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    const order = await Order.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put('/:id/location', async (req, res) => {
  try {
    const { latitude, longitude } = req.body;
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { currentLocation: { type: 'Point', coordinates: [longitude, latitude] } },
      { new: true }
    );
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/:id/directions', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    const response = await googleMapsClient.directions({
      params: {
        origin: `${order.currentLocation.coordinates[1]},${order.currentLocation.coordinates[0]}`,
        destination: order.deliveryAddress,
        key: process.env.GOOGLE_MAPS_API_KEY
      }
    });

    res.json(response.data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;