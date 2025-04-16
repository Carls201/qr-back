import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";

import {
    indexRoutes
} from './src/routes/qr.route.js';

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors());
app.use(morgan('dev'));

app.use('/api', indexRoutes);

export {app};