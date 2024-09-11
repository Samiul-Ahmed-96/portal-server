import express from "express";
import {
    loginProfile,
    registerProfile
} from "../controllers/authController.js";

const router = express.Router();

//Register route
router.post("/register", registerProfile);
//Login route
router.post("/login", loginProfile);

export default router;
