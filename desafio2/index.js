function conferirPrimo() {
    
        let valorDigitado = Number(document.getElementById('numero').value);
    if(valorDigitado <= 0 || isNaN(valorDigitado)){
        document.getElementById('resultado').innerHTML = 'Valor invalido detectado'
        return;
    }
    let isPrime = true;

    if (valorDigitado === 1) {
        isPrime = false;
    } else {
        for (let j = 2; j < valorDigitado; j++) {
            if (valorDigitado % j === 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime) {
        document.getElementById('resultado').innerHTML = 'True';
    } else {
        document.getElementById('resultado').innerHTML = 'false';
    }


}
