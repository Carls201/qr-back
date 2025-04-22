import { QrModel } from '../models/qr.model.js';
import { decodePDF417 } from '../services/barcode_scanner.service.js';

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

    static decodeImage = async (req, res) => {
        try {

            if (!req.file) {
                return res.status(400).json({ 
                    success: false,
                    error: 'No se proporcionó ninguna imagen' 
                });
            }

            const scanResult = await decodePDF417(req.file.buffer);
            await QrModel.createQr(scanResult, '0', '0');
            console.log(scanResult);
            

            res.status(200).json({
                success: true,
                results: scanResult
            });

        } catch (error) {
            console.error('Error en decodeImage:', error);
            res.status(500).json({ 
                success: false,
                error: 'Error interno al procesar la imagen',
                details: error.message 
            });
        }
    };
};