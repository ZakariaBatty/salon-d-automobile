const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const placeSchema = new Schema(
  {
    palceNumber: { type: Number, required: true },
    is_free: { type: Boolean, required: true, default: true },
  },
  { timestamps: true }
);

module.exports = model('place', placeSchema);
