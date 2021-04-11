const express = require('express');
const router = express.Router();

const {
  createOwner,
  getAllOwners,
  addCar,
  getAllCar,
  getInformationCar,
  createPlace,
  getAllPlace,
} = require('../controllers/owner.controller');

router.post('/createPlace', createPlace);
router.get('/getAllPlace', getAllPlace);
router.post('/addCar', addCar);
router.get('/getAllCar', getAllCar);
router.get('/getInformationCar/:id', getInformationCar);
router.post('/createOwner', createOwner);
router.get('/getAllOwners', getAllOwners);

module.exports = router;
