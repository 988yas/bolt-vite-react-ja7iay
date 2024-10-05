import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  courier: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  items: [{ 
    name: String, 
    price: Number, 
    quantity: Number 
  }],
  totalPrice: { type: Number, required: true },
  status: { 
    type: String, 
    enum: ['pending', 'preparing', 'ready_for_pickup', 'in_transit', 'delivered', 'cancelled'], 
    default: 'pending' 
  },
  deliveryAddress: { type: String, required: true },
  currentLocation: {
    type: { type: String, default: 'Point' },
    coordinates: { type: [Number], default: [0, 0] }
  }
}, { timestamps: true });

orderSchema.index({ currentLocation: '2dsphere' });

export default mongoose.model('Order', orderSchema);