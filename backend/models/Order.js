import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  customerName: String,
  customerAddress: String,
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Restaurant'
  },
  items: [{
    item: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Item'
    },
    quantity: Number
  }],
  total: Number,
  status: {
    type: String,
    default: 'Pending'
  }
});

export default mongoose.model('Order', orderSchema);

