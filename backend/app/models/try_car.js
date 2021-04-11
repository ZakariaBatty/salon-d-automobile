const mongoose = require('mongoose');

const { Schema, model, ObjectId } = mongoose;

const TryCar = new Schema(
  {
    id_car: { type: ObjectId, ref: 'Car' },
    id_client: { type: ObjectId, ref: 'Client' },
  },
  { timestamps: true }
);

module.exports = model('Try_Car', TryCar);
