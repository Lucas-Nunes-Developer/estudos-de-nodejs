// Importando o Express
const express = require('express');

// Inicializando o app
const app = express();

// Definindo uma porta para o servidor
const PORT = 3000;

// Rota básica
app.get('/', (req, res) => {
  res.send('Servidor Express rodando com sucesso!');
});

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});