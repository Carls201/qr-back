import pg from 'pg';
import 'dotenv/config';

const { Pool } = pg;

// Configuración CORRECTA usando connectionString
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

export { pool };