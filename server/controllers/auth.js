import admin from "../config/firebase.config.js";
import User from "../models/User.js";
// This is where im going to define all the handler functions
// for the rotues defined inside of my auth.js

// Utility function for creating and saving a new user document inside of
// our users collection.

const newUserData = async (decodedToken, res) => {
  // Creating a New User Document for our users collection.
  const newUser = new User({
    name: decodedToken.name,
    email: decodedToken.email,
    imageURL: decodedToken.picture,
    userId: decodedToken.uid,
    auth_time: decodedToken.auth_time,
  });
  // Saving the user in our users Collection
  await newUser
    .save()
    .then((savedUser) => {
      res.status(200).json({ user: savedUser });
    })
    .catch((err) => {
      res.status(404).json({ error: err.message });
    });
};

const updateUserData = async (decodedToken, res) => {
  await User.findOneAndUpdate(
    { email: decodedToken.email },
    { auth_time: decodedToken.auth_time }
  )
    .then((updatedUser) => {
      res.status(200).json({ success: true, user: updatedUser });
    })
    .catch((err) => {
      res.status(404).json({ success: false, error: err.message });
    });
};

export const loginUser = async (req, res) => {
  const { token } = req.query;
  if (token) {
    try {
      // Here is where im going to verify the user token that
      // im getting from my frontend

      // If this is a valid token then it will be decoded
      // and return a decoded token to us while if its
      // not a valid token then this method wont return
      // anything to us

      const decodeToken = await admin.auth().verifyIdToken(token);

      if (!decodeToken) {
        return res.status(404).json({ message: "Invalid User Token" });
      } else {
        const userExists = await User.findOne({ email: decodeToken.email });
        if (!userExists) {
          // Calling this utility function to basically save our user
          newUserData(decodeToken, res);
        } else {
          updateUserData(decodeToken, res);
        }
      }
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  } else {
    return res.status(404).json({ message: "Token Not Found" });
  }
};
