import pg from 'pg';
import 'dotenv/config';

const { Pool } = pg;

// Configuración CORRECTA usando connectionString
const pool = new Pool({
  user: 'carlos710',
  host: 'localhost',
  database: 'qrsdb',
  password: 'Hola.1234@',
  port: 5432,
  // connectionString: process.env.DATABASE_URL,
  // ssl: {
  //   rejectUnauthorized: false // Necesario para Render.com y otros servicios cloud
  // }
});

export { pool };