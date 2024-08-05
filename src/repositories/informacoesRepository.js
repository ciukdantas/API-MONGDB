const { pool } = require("../config/db");

exports.getInformacoes = async () => {
    const result = await pool.query("SELECT * FROM imformacoes");
    return result.rows[0];
}

exports.createInformacoes = async (informacoes) => {
    const result = await pool.query(`
    INSERT INTO imformacoes (id, foto, nome, cargo, resumo)
    VALUES (1, $1, $2, $3, $4)
    RETURNING *
    `, [informacoes.foto, informacoes.nome, informacoes.cargo, informacoes.resumo]);
    return result.rows[0];
}

exports.updateInformacoes = async (informacoes) => {
    const result = await pool.query(`
        UPDATE imformacoes
        SET foto = $1, nome = $2, cargo = $3, resumo = $4
        WHERE id = 1
        RETURNING *
    `, [informacoes.foto, informacoes.nome, informacoes.cargo, informacoes.resumo]);
       return result.rows[0];
}

exports.deleteInformacoes = async () => {
    await pool.query("DELETE FROM imformacoes WHERE id = 1",);
}