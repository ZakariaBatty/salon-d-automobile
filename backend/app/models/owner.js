const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const OwenerShema = new Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    cin: { type: String, required: true },
    email: { type: String, required: true, unique: true, trim: true },
    rib: { type: Number, required: true },
    telephone: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = model('Owner', OwenerShema);
