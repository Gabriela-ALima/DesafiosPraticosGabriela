const jogoPc = ['Pedra', 'Papel', 'Tesoura'];

function sortearJogo(jogo) {
    
    let indiceAleatorio = Math.floor(Math.random() * jogoPc.length);
    
    return jogoPc[indiceAleatorio];
}


let jogoSorteado = sortearJogo(jogoPc);

function jogar(){
    let escolhaJogador = document.getElementById('jog').value;

    if(escolhaJogador === jogoSorteado){
        document.getElementById('resultado').innerHTML = 'Pc escolheu: ' +jogoSorteado + 'Você Ganhou';
    } else {
        document.getElementById('resultado').innerHTML = 'Pc escolheu: ' +jogoSorteado + 'Você Perdeu';;
    }
}
