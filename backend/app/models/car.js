const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const CarSchema = new Schema(
  {
    registration_Number: { type: String, required: true },
    name: { type: String, required: true },
    mark: { type: String, required: true },
    color: { type: String, required: true },
    price: { type: Number, required: true },
    fuel: { type: String, required: true },
    is_Saled: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = model('Car', CarSchema);
