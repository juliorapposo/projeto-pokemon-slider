/* 
Objetivo 1- quando clicar na seta de avançar temos que mostrar o próximo cartão da lista.

    Passo 1: dar um jeito de pegar o elemento HTML da seta avançar

    Passo 2: dar um jeito de identificar o clique do usuário na seta avançar

    Passo 3: fazer aparecer o próximo cartão da lista

    Passo 4: buscar o cartão selecionado e esconder
*/

const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
const cartoes = document.querySelectorAll('.cartao');
let cartaoAtual = 0;

function esconderCartaoSelecionado () {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove('selecionado');
}

function mostrarCartao (indiceCartao) {
    cartoes[indiceCartao].classList.add('selecionado');  
} 

btnAvancar.addEventListener('click', function getClick () {
    if(cartaoAtual === cartoes.length - 1) return // se chegou no ultimo cartão o código para de executar

    esconderCartaoSelecionado();
    cartaoAtual++;
    // fazer aparecer o proximo cartao da lista
    mostrarCartao(cartaoAtual);  
});

/* Objetivo 2 - fazer o mesmo processo com o botão voltar */

btnVoltar.addEventListener('click', function getClick () {
    if(cartaoAtual === 0) return;
    esconderCartaoSelecionado();
    cartaoAtual--;
    mostrarCartao(cartaoAtual);
});