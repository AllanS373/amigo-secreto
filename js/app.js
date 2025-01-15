let amigos = [];

function adicionar(){
let amigo = document.getElementById('nome-amigo').value.toUpperCase();
let lista = document.getElementById('lista-amigos');

    if (amigo == '') {
        alert('Informe o nome do amigo.');
    } else if(amigos.includes(amigo) ) {
        alert('Nome do amigo já consta na lista.');
        amigo = '';
    } else {
        if(lista.textContent == ''){
            lista.textContent = amigo;
        } else {
            lista.textContent = lista.textContent + ', ' + amigo;
        }
        amigos.push(amigo);
        amigo = '';
    }
}
function sortear() {
    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');
    if (amigos.length < 4) {
        alert('Adicionar no mínimo 4 amigos.')
    } else {
        for (let i = 0; i < amigos.length; i++){

            if (i == amigos.length -1) {
                sorteio.innerHTML =sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
            } else {
                sorteio.innerHTML =sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
            }
        }
    }
    
}

function embaralha(lista) {
    for (let indice = lista.length; indice; indice--){

        const indiceAleatorio = Math.floor(Math.random() * indice);

        [lista[indice - 1], lista[indiceAleatorio]] =
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}