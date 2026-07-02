// NAVBAR

let navBar = document.getElementById('navbar'); //declarando variável que recebe navbar
let LogoNavBar = document.getElementById('logo-navbar');

// LogoNavBar.hidden = true;
// LogoNavBar.style.width = 0;

// Evento que ocorre quando o usuário scrollar
window.addEventListener("scroll", () => {

    // Ocorre se a distancia vertical do usuario for superior a 500px do topo da página
    if (window.scrollY > 500) {
        navBar.classList.add("sticky-top");
        // LogoNavBar.hidden = false;
        LogoNavBar.style.width = "100px";
    }
    // Ocorre se a distancia vertical do usuario for inferior a 500px do topo da página
    else {
        navBar.classList.remove("sticky-top");
        // LogoNavBar.hidden = true;
        LogoNavBar.style.width = 0;
    }
})


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


// Código para tirar o underline do texto enquanto o mouse estiver por cima do topico

// let itemUltimaNoticiaTopico = document.querySelector(".item-ultimas-noticias div .fw-light");
// let itemUltimaNoticiaTexto = document.querySelector(".item-ultimas-noticias div .fw-bold");

// itemUltimaNoticiaTopico.addEventListener('mouseover', function () {
//     itemUltimaNoticiaTexto.style.textDecoration = "none";
//     itemUltimaNoticiaTexto.style.textDecorationLine = "none";
// })