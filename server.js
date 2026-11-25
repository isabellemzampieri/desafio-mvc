// Servidor - Desafio MVC

import express from 'express';
import jogoRoutes from './routes/jogoRoutes.js';

const app = express();

const port = 3000;

app.use(express.json());

// Rotas dos jogos
app.use('/jogos', jogoRoutes);

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});