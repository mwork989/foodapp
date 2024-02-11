import express from 'express';
import mongoose from 'mongoose';
import restaurantRoutes from '../routes/restaurantRoutes.js';
import orderRoutes from '../routes/orderRoutes.js';
import authRoutes from '../routes/authRoutes.js';
const app = express();
const port = process.env.PORT || 4000;

// Database connection
mongoose.connect('mongodb://localhost/restaurantDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/restaurants', restaurantRoutes);
app.use('/api/orders', orderRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
