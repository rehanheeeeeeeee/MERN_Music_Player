import express from "express";
// Cors for transferring data between browser and server and cross domain
// sharing of data.
import cors from "cors";
// Dotenv for creating and using dotenv pacakges.
import dotenv from "dotenv";
// Importing mongoose for making calls to our mongoDB database
import mongoose from "mongoose";

// Importing the routes

// Importing the routes defined inside of my auth.js
import authRoutes from "./routes/auth.js";

/* CONFIGURATIONS */
dotenv.config();
// Creating the express application
const app = express();
// Utilizing the cors package in our app so we can exchange date b/w
// the browser and the server.
app.use(cors());
app.use(express.json());

// Defining the routes that going to exist inside of my server

// All the routes defined inside of my auth.js are going to be
// prefixed by /auth route.
app.use("/auth", authRoutes);

// Importing the port variable defined in our dotenv file
const PORT = process.env.PORT || 9001;

// We will only start to host our server only after we have connected
// our app to our MongoDB database.

// So that all calls to the database are made by our API's only after
// our App is connected to our database.

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    // Hosting the server only after our app is connected to the database.
    app.listen(PORT, () =>
      console.log(`Successfully Hosted the app on Port ${PORT}`)
    );
  })
  .catch((err) => console.log(err.message));
