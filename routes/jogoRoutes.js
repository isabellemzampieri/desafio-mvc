// Routes - Jogos

import express from 'express';

import {
    listar,
    buscarId,
    buscarFabricante,
    buscarAno,
    cadastrar,
    atualizar,
    excluir
} from '../controllers/jogoController.js';

const router = express.Router();

// GET - Listar todos
router.get('/', listar);

// GET - Buscar por fabricante
router.get('/fabricante/:fabricante', buscarFabricante);

// GET - Buscar por ano
router.get('/ano/:ano', buscarAno);

// GET - Buscar por ID
router.get('/:id', buscarId);

// POST - Cadastrar
router.post('/', cadastrar);

// PUT - Atualizar
router.put('/:id', atualizar);

// DELETE - Excluir
router.delete('/:id', excluir);

export default router;