import { QrModel } from '../models/qr.model.js';
import { request} from 'express';
export class QrController {
    static createQr = async (req, res) => {
        const { info, latitude, longitude } = req.body;
        await QrModel.createQr(info, latitude, longitude);
        res.status(200).json({ msg: 'ok'});
    };

    static getQrs = async (req, res) => {
        const resp = await QrModel.getQrs();
        res.status(200).json(resp);
    }
};