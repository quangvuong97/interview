import express from "express";
import { ip } from "./src/router/ip.js";

const apps = express();

apps.use("/", ip);

export const app = apps;
