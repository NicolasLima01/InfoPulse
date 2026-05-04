let btnAbrirPesquisa = document.getElementById("btn-nav-open-search"); // variável que recebe elemento do botão que abre o form depesquisa do navbar
let FormPesquisa = document.getElementById("form-nav-search"); // variável que recebe elemento do botão de pesquisa do navbar
let btnSubmeterPesquisa = document.getElementById("btn-nav-submit-search"); // variável que recebe elemento do botão que conclui pesquisa do navbar

// evento que ocorre ao clicar no botão de pesquisa
btnAbrirPesquisa.addEventListener('click', function () {

    // if ternário que ocorre se o FormPesquisa estiver hidden, tornará o form visível,
    // mas se o FormPesquisa estiver à visível, tornará o form visível
    FormPesquisa.hidden === true ? FormPesquisa.hidden = false : FormPesquisa.hidden = true;

    //if ternário semelhante ao de cima, porém, para o botão de submeter pesquisa
    btnSubmeterPesquisa.hidden === true ? btnSubmeterPesquisa.hidden = false : btnSubmeterPesquisa.hidden = true;
});