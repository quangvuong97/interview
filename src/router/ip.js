import express from "express";
import { addIp, getIps } from "../controller/ip.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

router.get("/echo", auth, addIp);

router.get("/list", getIps);

export const ip = router;
