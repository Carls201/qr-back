import { pool } from '../../db.js'
export class QrModel {
    static createQr = async (data) => {
        const client = await pool.connect();
        try {
            const query = `INSERT INTO qr (info, date) VALUES ($1, CURRENT_TIMESTAMP)`;
            const res = await client.query(query, [data]);
            return res;
        } catch (err) {
            console.log(err);
            
        } finally {
            client.release();
        }   
    };

    static getQrs = async () => {
        const client = await pool.connect();
        try {
            const query = 'SELECT * FROM qr';
            const res = await client.query(query);
            return res.rows;
        } catch (error) {
            console.log(error);
        } finally {
            client.release();
        }
    };
}