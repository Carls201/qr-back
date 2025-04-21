import { pool } from '../../db.js'
export class QrModel {
    static createQr = async (data, latitude, longitude) => {
        const client = await pool.connect();
        try {
            const query = `INSERT INTO qr (info, date, latitude, longitude) VALUES ($1, CURRENT_TIMESTAMP, $2, $3)`;
            const res = await client.query(query, [data, latitude, longitude]);
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
            const query = `
                 SELECT 
        id, 
        info, 
        date AT TIME ZONE 'UTC' AT TIME ZONE 'America/Santiago' AS date, 
        latitude, 
        longitude 
      FROM qr
            `;
            const res = await client.query(query);
            return res.rows;
        } catch (error) {
            console.log(error);
        } finally {
            client.release();
        }
    };
}