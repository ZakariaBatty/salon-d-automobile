const express = require('express');
const router = express.Router();

const {
  createClient,
  getAllClients,
  getClientById,
  reserveCar,
  EssaiVoiture,
} = require('../controllers/client.controller');
const { singin, signout, requireSignin } = require('../controllers/auth');

router.post('/singin', singin);
router.get('/signout', signout);
router.post('/createClient', createClient);
router.post('/reserver', reserveCar);
router.post('/EssaiVoiture/:id', EssaiVoiture);
router.get('/getAllClients', getAllClients);
router.get('/getClientById/:id', getClientById);

module.exports = router;
