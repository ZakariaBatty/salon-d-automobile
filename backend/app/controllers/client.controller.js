const ClientSchema = require('../models/client');
const ReserverCar = require('../models/reserve_car');
const TryCar = require('../models/try_car');
const { clientValidation } = require('../validation/validation');

// Create client
const createClient = async (req, res) => {
  // validation
  const { error } = clientValidation(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  // else not erorr create client
  const Client = new ClientSchema({ ...req.body });
  try {
    const client = await Client.save();
    res.status(200).json({ error: null, client: client });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

// getAllClients
const getAllClients = async (req, res) => {
  try {
    const Client = await ClientSchema.find();
    res.json({ error: null, Client: Client });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

// get Client by id
const getClientById = async (req, res) => {
  try {
    const Client = await ClientSchema.findById(req.params.id);
    res.status(200).json({ Client: Client });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

// d’essai de la voiture
const EssaiVoiture = async (req, res) => {
  try {
    const IdCar = await TryCar.findById(req.params.id);
    if (IdCar) res.status(400).json({ message: 'rah dija kin' });
    const client = await ClientSchema.findOne({ _id: req.body.id_client });
    if (client.globalTries < 11)
      updateClient = await ClientSchema.findByIdAndUpdate({
        _id: req.body.id_client,
      });
    updateClient.globalTries = +1;
    const updated = await updateClient.save();
    const id_car = req.params.id;
    const id_client = updateClient._id;
    if (updated) Insert = await TryCar({ id_car, id_client });
    const try_car = await Insert.save();
    res.status(200).json({ client: updated, trycar: try_car });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

// reserve car
const reserveCar = async (req, res) => {
  const reserver = new ReserverCar({ ...req.body });
  try {
    const reserverCar = await reserver.save();
    res.status(200).json({ reserver: reserverCar });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

module.exports = {
  createClient,
  getAllClients,
  getClientById,
  reserveCar,
  EssaiVoiture,
};
