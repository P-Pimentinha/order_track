import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, 'Please provide company name'],
      maxlength: 50,
    },
    order: {
      type: String,
      required: [true, 'Please provide the products you ordered'],
      maxlength: 255,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide user'],
    },
  },
  { timestamps: true }
);

export default mongoose.model('Order', OrderSchema);
