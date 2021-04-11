require('dotenv').config({ path: './app/config/.env' });
const clientSchema = require('../models/client');
const ownerSchema = require('../models/owner');
const expressJwt = require('express-jwt');
const jwt = require('jsonwebtoken');

// sign in
const singin = (req, res) => {
  // get user by email and check if email find
  clientSchema.findOne({ email: req.body.email }, (err, clinet) => {
    // check if error or ! clinet
    if (err || !clinet) {
      //  res.status(404).json({ message: 'Acune donnée trovée' });
      ownerSchema.findOne({ email: req.body.email }, (err, owner) => {
        // check if error or ! owner
        if (err || !owner) {
          return res.json({ error: 'Acune donnée trovée' });
        }
        // function for compare password owner if correct or not
        owner.comparePassword(req.body.password, (err, isMatch) => {
          if (!isMatch) {
            return res.json({ error: 'Email and password doesnot match' });
          }
          // create token
          const token = jwt.sign({ _id: owner._id }, process.env.JWT_SECRET);
          // stock token in cookie
          res.cookie('token', token, {
            expire: new Date() + 9999,
          });
          // return
          return res.json({
            token,
            owner,
          });
        });
      });
    } else {
      // function for compare password client if correct or not
      clinet.comparePassword(req.body.password, (err, isMatch) => {
        if (!isMatch) {
          return res.json({ error: 'Email and password doesnot match' });
        }
        // create token
        const token = jwt.sign({ _id: clinet._id }, process.env.JWT_SECRET);
        // stock token in cookie
        res.cookie('token', token, {
          expire: new Date() + 9999,
        });
        // return
        return res.json({
          token,
          clinet,
        });
      });
    }
  });
};

// singnout
const signout = (req, res) => {
  res.clearCookie('token');
  res.json({ message: 'Déconnecté' });
};

// middlewares
const requireSignin = expressJwt({
  secret: process.env.JWT_SECRET,
  userProperty: 'auth',
  algorithms: ['HS256'],
});

// const hasAuthorization = (req, res, next) => {
//   const authorized =  req.auth && req.profile._id == req.auth._id;
//   if (!authorized) {
//     return res.json({ statuserror: 'Non authorisé' });
//   }
//   next();
// };

module.exports = {
  singin,
  signout,
  requireSignin,
};
