import pg from 'pg';
const { Pool } = pg;

// Configuración de la conexión (ajusta según tu entorno)
const pool = new Pool({
  user: 'postgres',           // Usuario por defecto de PostgreSQL
  host: 'localhost',          // Host (si está en Docker en tu máquina local)
  database: 'qrsdb',          // Nombre de la base de datos (opcional)
  password: 'mi-contraseña',  // Contraseña que definiste al crear el contenedor
  port: 5432,                 // Puerto mapeado en Docker (5432 por defecto)
});


export { pool };