function parOuImpar(num) {
    return new Promise((resolve, reject) => {
        num % 2 === 0 ? resolve('Número é par') : reject('O número é ímpar');
    });
}

function teste() {
    const num = 13;
    parOuImpar(num)
    .then(valor => console.log(valor))
    .catch(err => console.log(err))
    .finally(() => console.log('Número passado: ', num));
}

teste();