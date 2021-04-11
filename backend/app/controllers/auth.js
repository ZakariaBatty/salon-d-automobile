require('dotenv').config({ path: './app/config/.env' });
const clientSchema = require('../models/client');
const ownerSchema = require('../models/owner');
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
        if (err || !owner)
          res.status(404).json({ message: 'Acune donnée trovée' });
        // function for compare password owner if correct or not
        owner.comparePassword(req.body.password, (err, isMatch) => {
          if (!isMatch) {
            res.json({ error: 'Email and password doesnot match' });
          }
          // create token
          const tokenOwner = jwt.sign(
            { _id: owner._id },
            process.env.JWT_SECRET
          );
          // stock token in cookie
          res.cookie('tokenOwner', tokenOwner, {
            expire: new Date() + 9999,
          });
          // return
          return res.json({
            tokenOwner,
            owner,
          });
        });
      });
    } else {
      // function for compare password client if correct or not
      clinet.comparePassword(req.body.password, (err, isMatch) => {
        if (!isMatch) {
          res.json({ error: 'Email and password doesnot match' });
        }
        // create token
        const tokenClient = jwt.sign(
          { _id: clinet._id },
          process.env.JWT_SECRET
        );
        // stock token in cookie
        res.cookie('tokenClient', tokenClient, {
          expire: new Date() + 9999,
        });
        // returnF
        return res.json({
          tokenClient,
          clinet,
        });
      });
    }
  });
};

module.exports = {
  singin,
};
