import {
    listarJogos,
    buscarPorId,
    buscarPorFabricante,
    buscarPorAno,
    cadastrarJogo,
    atualizarJogo,
    excluirJogo
} from '../models/jogoModel.js';

export function listar(req, res) {
    res.status(200).json(listarJogos());
}

export function buscarId(req, res) {
    let id = Number(req.params.id);
    let jogo = buscarPorId(id);

    if (!jogo) {
        return res.status(404).json({mensagem: "Jogo não encontrado"});
    }

    res.status(200).json(jogo);
}

export function buscarFabricante(req, res) {
    let fabricante = req.params.fabricante;
    let resultado = buscarPorFabricante(fabricante);

    res.status(200).json(resultado);
}

export function buscarAno(req, res) {
    let ano = Number(req.params.ano);
    let resultado = buscarPorAno(ano);

    res.status(200).json(resultado);
}

export function cadastrar(req, res) {
    let novoJogo = cadastrarJogo(req.body);

    res.status(201).json(novoJogo);
}

export function atualizar(req, res) {
    let id = Number(req.params.id);
    let jogo = atualizarJogo(id, req.body);

    if (!jogo) {
        return res.status(404).json({mensagem: "Jogo não encontrado"});
    }

    res.status(200).json(jogo);
}

export function excluir(req, res) {
    let id = Number(req.params.id);
    let resultado = excluirJogo(id);

    if (!resultado) {
        return res.status(404).json({mensagem: "Jogo não encontrado"});
    }

    res.status(200).json({mensagem: "Jogo excluído com sucesso"});
}