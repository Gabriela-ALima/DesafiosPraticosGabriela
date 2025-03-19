let arrayFinal = [];

function gerarArray() {
    let numerosArray = Number(document.getElementById('numeros').value);
    if (isNaN(numerosArray) || document.getElementById('numeros').value === "") {
        document.getElementById('resultado').innerHTML = 'Valor inválido detectado';
        return; 
    }
    arrayFinal.push(numerosArray);

    somaArray(arrayFinal);
}

function somaArray(array) {
    let soma = 0;

    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }

    document.getElementById('resultado').innerHTML = `Array: [${array.join(', ')}] <br> Soma: ${soma}`;
}


