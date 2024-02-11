import express from 'express';
import Order from '../models/Order.js';

const router = express.Router();

// Place a new order
router.post('/', async (req, res) => {
  const order = new Order(req.body);
  try {
    const newOrder = await order.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Mock payment endpoint
router.post('/:id/pay', async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, { status: 'Paid' }, { new: true });
    res.json({ message: 'Payment successful', order });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
