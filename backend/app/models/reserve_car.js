const mongoose = require('mongoose');

const { Schema, model, ObjectId } = mongoose;

const ReserverCar = new Schema(
  {
    id_car: { type: ObjectId, ref: 'Car' },
    id_owner: { type: ObjectId, ref: 'Owner' },
    id_client: { type: ObjectId, ref: 'Client' },
  },
  { timestamps: true }
);

module.exports = model('Reserver_Car', ReserverCar);
