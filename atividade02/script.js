// função para retornar uma promise bem sucedida com um timeout que espera o resultado por 3 segundos

function concluida3s() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Concluído após 3 segundos');
        }, 3000);
    });
}

/* para esperar os 3 segundos sem executar o próximo comando é utilizado async e await em conjunto 
já que o await só pode ser usado em uma função async (assíncrona) */

async function teste() {
    console.log('A');
    const msg = await concluida3s();
    console.log(msg);
    console.log('B');
}

teste();