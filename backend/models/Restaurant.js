import mongoose from 'mongoose';

const foodItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    default: 0
  }
});

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  cuisine: {
    type: [String],
    required: true
  },
  costForTwo: {
    type: Number,
    required: true
  },
  items: [foodItemSchema]
});

export default mongoose.model('Restaurant', restaurantSchema);
