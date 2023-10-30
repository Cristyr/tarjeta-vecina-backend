import mongoose from 'mongoose';

const tarjetaSchema = new mongoose.Schema({
  number: { 
    type: Number,
    unique:true, 
    required: true 
  },
  expirationDate: { 
    type: Date,
     required: true,
     default: () => {
      const now = new Date();
      now.setFullYear(now.getFullYear() + 1); 
      return now;
    }, 
    },
  discounts: [
    {
      storeName: { 
        type: String
      },
      discountPercentage: { 
        type: Number 
      },
    },
  ],
});

const Tarjeta = mongoose.model('Tarjeta', tarjetaSchema);

export default Tarjeta;

