// src/server.js
const express = require('express');
const cors = require('cors');
require('dotenv').config(); // Carrega as variáveis de ambiente
const routes = require('./src/routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors()); // Permite requisições de outras origens (seu frontend)
app.use(express.json()); // Habilita o parsing de JSON no corpo das requisições

app.use('/api', routes); // Usa as rotas definidas em routes.js com prefixo /api

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});