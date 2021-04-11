const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const { Schema, model} = mongoose;

const OwnerCar = new Schema(
  {
    id_owner: { type: ObjectId, ref: 'Owner' },
    id_car: { type: ObjectId, ref: 'Car' },
    id_place: { type: ObjectId, ref: 'place' },
  },
  { timestamps: true }
);

module.exports = model('Owner_Car', OwnerCar);
