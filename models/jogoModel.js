export const jogos = [
    {idjogo: 1, nomejogo: "GTA VI", fabricante: "Rockstar", idademin: 18, anolanc: 2026},
    {idjogo: 2, nomejogo: "Minecraft", fabricante: "Mojang", idademin: 10, anolanc: 2011},
    {idjogo: 3, nomejogo: "The Sims 4", fabricante: "EA", idademin: 12, anolanc: 2014},
    {idjogo: 4, nomejogo: "Fortnite", fabricante: "Epic Games", idademin: 12, anolanc: 2017},
    {idjogo: 5, nomejogo: "Red Dead Redemption 2", fabricante: "Rockstar", idademin: 18, anolanc: 2018}
];

export function listarJogos() {
    return jogos;
}

export function buscarPorId(id) {
    return jogos.find(jogo => jogo.idjogo === id);
}

export function buscarPorFabricante(fabricante) {
    return jogos.filter(jogo => jogo.fabricante.toLowerCase() === fabricante.toLowerCase());
}

export function buscarPorAno(ano) {
    return jogos.filter(jogo => jogo.anolanc === ano);
}

export function cadastrarJogo(dados) {
    let id = jogos.length > 0 ? Math.max(...jogos.map(jogo => jogo.idjogo)) + 1 : 1;

    let novoJogo = {
        idjogo: id,
        ...dados
    };

    jogos.push(novoJogo);

    return novoJogo;
}

export function atualizarJogo(id, dados) {
    let jogo = buscarPorId(id);

    if (!jogo) {
        return null;
    }

    jogo.nomejogo = dados.nomejogo;
    jogo.fabricante = dados.fabricante;
    jogo.idademin = dados.idademin;
    jogo.anolanc = dados.anolanc;

    return jogo;
}

export function excluirJogo(id) {
    let indice = jogos.findIndex(jogo => jogo.idjogo === id);

    if (indice === -1) {
        return false;
    }

    jogos.splice(indice, 1);

    return true;
}