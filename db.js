import pg from 'pg';
import 'dotenv/config';

const { Pool } = pg;

// Configuración CORRECTA usando connectionString
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false // Necesario para Render.com y otros servicios cloud
  }
});

export { pool };