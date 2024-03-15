export var atual = {
    player: "\0",
    tipo: 0,
    dado: 0
};

export function setAtual(player: string, tipo: number, dado: number) {
    atual.player = player;
    atual.tipo = tipo;
    atual.dado = dado;
}