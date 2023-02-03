const { Pool } = require('pg');

const pool = new Pool({
    connectionString: "postgres://Winssofterp:WsUser!@#37:localhost:5432/wsdb"
}); // 

pool.on('connect', () => {
    //.log('Base de Dados conectado com sucesso!');
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};


