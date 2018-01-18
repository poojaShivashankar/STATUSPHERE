var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
//var applicant = require('../models/applicant');
var influencer = require('../models/influencer')


// passport.use(new LocalStrategy({
//     usernameField: 'username'
//   },
//   function(username, password, done) {
//     applicant.findOne({ username: username }, function (err,applicant) {
//       if (err) { return done(err); }
//       // Return if user not found in database
//       if (!applicant) {
//         return done(null, false, {
//           message: 'Influencer not found'
//         });
//       }
     
//       //Return if password is wrong
//       if (applicant.password!=password) {
//         return done(null, false, {
//           message: 'Please enter the correct password'
//         });
//       }
//      // If credentials are correct, return the user object
//       return done(null, applicant);
//     });
//   }
// ));


passport.use(new LocalStrategy({
    usernameField: 'username'
  },
  function(username, password, done) {
    influencer.findOne({ influencer_username: username }, function (err,influencer) {
      if (err) { return done(err); }
      // Return if user not found in database
      if (!influencer) {
        return done(null, false, {
          message: 'Influencer not found'
        });
      }
     
      //Return if password is wrong
      if (influencer.influencer_password!=password) {
        return done(null, false, {
          message: 'Please enter the correct password'
        });
      }
     // If credentials are correct, return the user object
      return done(null, influencer);
    });
  }
));
// passport.use(new BasicStrategy(
//   function(username, password, callback) {
//     applicant.findOne({ username: username }, function (err, Applicant) {
//       if (err) { return callback(err); }

//       // No user found with that username
//       if (!Applicant) { return callback(null, false); }

//       // Make sure the password is correct
//       Applicant.verifyPassword(password, function(err, isMatch) {
//         if (err) { return callback(err); }

//         // Password did not match
//         if (!isMatch) { return callback(null, false); }

//         // Success
//         return callback(null, Applicant);
//       });
//     });
//   }
// ));

// exports.isAuthenticated = passport.authenticate('basic', { session : false });
