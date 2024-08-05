const { Pool } = require("pg");

console.log(process.env.APP_PORT)

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: process.env.NODE_ENV === 'production' ? true : false
});

const initDatabase = async () => {
    const db = await pool.connect();
    await db.query(`
            CREATE TABLE IF NOT EXISTS experiencias   (
                id SERIAL PRIMARY KEY,
                titulo VARCHAR(255) NOT NULL,
                tipo VARCHAR(255) NOT NULL,
                descricao TEXT NOT NULL,
                "anoInicio" INT NOT NULL,
                "anoFim" INT
            )
        `);

    await db.query(`
            CREATE TABLE IF NOT EXISTS portfolio   (
                id SERIAL PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                link VARCHAR(255) NOT NULL,
                image VARCHAR(255) NOT NULL
            )
        `);

    await db.query(`
            CREATE TABLE IF NOT EXISTS imformacoes   (
                id SERIAL PRIMARY KEY,
                foto VARCHAR(255) NOT NULL,
                nome VARCHAR(255) NOT NULL,
                cargo VARCHAR(255) NOT NULL,
                resumo TEXT NOT NULL
            )
        `);

    await db.query(`
            CREATE TABLE IF NOT EXISTS usuarios (
                id INT PRIMARY KEY,
                email VARCHAR(255) NOT NULL,
                password VARCHAR(255) NOT NULL
            )
        `);

    console.log("Banco de dados inicializado com sucesso!");
};

module.exports = { pool, initDatabase };