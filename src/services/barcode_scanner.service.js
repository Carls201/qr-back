import sharp from 'sharp';
import { MultiFormatReader, BarcodeFormat, DecodeHintType, RGBLuminanceSource, BinaryBitmap, HybridBinarizer } from '@zxing/library';

/**
 * Decodifica PDF417 desde buffer de imagen usando Sharp
 * @param {Buffer} imageBuffer - Buffer de la imagen
 * @returns {Promise<string>} Contenido decodificado
 */
export async function decodePDF417(imageBuffer) {
    try {
        // Procesar imagen con Sharp
        const { data, info } = await sharp(imageBuffer)
            .grayscale()
            .raw()
            .toBuffer({ resolveWithObject: true });

        // Configurar ZXing
        const hints = new Map();
        hints.set(DecodeHintType.POSSIBLE_FORMATS, [BarcodeFormat.PDF_417, BarcodeFormat.QR_CODE]);
        hints.set(DecodeHintType.TRY_HARDER, true);

        const luminanceSource = new RGBLuminanceSource(
            Uint8Array.from(data),
            info.width,
            info.height
        );

        const reader = new MultiFormatReader();
        reader.setHints(hints);

        const binaryBitmap = new BinaryBitmap(new HybridBinarizer(luminanceSource));
        const result = reader.decode(binaryBitmap);

        return result.getText();
    } catch (error) {
        console.error('Error decodificando PDF417:', error);
        throw new Error(`Falló la decodificación: ${error.message}`);
    }
}

// Ejemplo de uso
/*
async function test() {
    try {
        const image = await readFile('./ejemplo.png');
        const decoded = await decodePDF417FromImageBuffer(image);
        console.log('Decodificado:', decoded);
    } catch (error) {
        console.error('Error:', error);
    }
}
test();
*/