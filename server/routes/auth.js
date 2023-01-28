import express from "express";

// Importing the handler function formy /login route.
import { loginUser } from "../controllers/auth.js";

// This is going to let us create the routes to which an
// api request can be made
const router = express.Router();

router.get("/login", loginUser);

export default router;
