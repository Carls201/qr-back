import express from "express";
import { QrController } from "../controllers/qr.controller.js";
import upload from "../config/multer.config.js"; // Importa desde el archivo de configuración

const api = express.Router();
api.post('/post', QrController.createQr);
api.get('/get', QrController.getQrs);
api.post('/img', upload.single('image'), QrController.decodeImage);

export const indexRoutes = api;