import express from "express";
import {QrController} from "../controllers/qr.controller.js";

const api = express.Router();
api.post('/post', QrController.createQr);
api.get('/get', QrController.getQrs);

export const indexRoutes = api;