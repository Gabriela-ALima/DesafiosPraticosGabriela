function conferirPalindromo(){
    let palavraDigitada = document.getElementById('palavra').value.trim();
    let palavraFormatada = palavraDigitada.toLowerCase().replace(/[^a-z0-9]/g, "");
    let palavraInversa = palavraFormatada.split("").reverse().join("");

    if(palavraInversa===palavraFormatada){
        document.getElementById('resultado').innerHTML = 'True';
    } else {
        document.getElementById('resultado').innerHTML = 'false';
    }
}