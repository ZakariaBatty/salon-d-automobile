const OwenrSchema = require('../models/owner');
const CarSchema = require('../models/car');
const placeSchema = require('../models/place');
const OwnerCar = require('../models/owner_Car');
const {
  ownerValidation,
  carValidation,
  palceValidation,
} = require('../validation/validation');

// Create Owner
const createOwner = async (req, res) => {
  // validation
  const { error } = ownerValidation(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  // else not erorr create owner
  const Owner = new OwenrSchema({ ...req.body });
  try {
    const owner = await Owner.save();
    res.json({ error: null, owner: owner });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

// getAllOwners
const getAllOwners = async (req, res) => {
  try {
    const Owner = await OwenrSchema.find();
    res.json({ error: null, Owner: Owner });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

// add car
const addCar = async (req, res) => {
  // validation
  const { error } = carValidation(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  // else not erorr create car
  const Car = await new CarSchema({ ...req.body });
  try {
    const car = await Car.save();
    if (car) {
      const id_car = car.id;
      const id_owner = '606cd9cf261abc4afc9b877c';
      const id_place = '606dad3cb58b3c1e6c7ffab6';
      const Owner_car = await new OwnerCar({ id_owner, id_car, id_place });
      const ownerCar = await Owner_car.save();
      res.json({ car: car, ownerCar: ownerCar });
    }
  } catch (err) {
    res.status(400).json({ error: error });
  }
};

//get all car
const getAllCar = async (req, res) => {
  try {
    const car = await CarSchema.find();
    res.status(200).json({ car: car });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

// get One Car by Id
const getInformationCar = async (req, res) => {
  try {
    const owner_car = await OwnerCar.findOne({ id_car: req.params.id });
    const idCar = owner_car.id_car;
    const idPlace = owner_car.id_place;
    const car = await CarSchema.findOne({ _id: idCar });
    const place = await placeSchema.findOne({ _id: idPlace });
    res.status(200).json({ Ownercar: owner_car, car: car, place: place });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

// create palce
const createPlace = async (req, res) => {
  // validation error
  const { error } = palceValidation(req.body);
  //check if error
  if (error) return res.status(400).json({ error: error.details[0].message });
  // else not erorr create owner
  const Place = await new placeSchema({ ...req.body });
  try {
    const place = await Place.save();
    res.json({ error: null, place: place });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

// getAllPlace
const getAllPlace = async (req, res) => {
  try {
    const Place = await placeSchema.find();
    res.json({ error: null, Place: Place });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

module.exports = {
  createOwner,
  getAllOwners,
  addCar,
  getAllCar,
  getInformationCar,
  createPlace,
  getAllPlace,
};
