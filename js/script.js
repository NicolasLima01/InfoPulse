// ----------------------------------------
//                LOGO NAVBAR
// ----------------------------------------

let navBar = document.getElementById('navbar'); //declarando variável que recebe navbar
let LogoNavBar = document.getElementById('logo-navbar'); //declarando variável que recebe Logo no navbar

// window.addEventListener("resize", () => {
//     if (window.innerWidth > 991){
//         LogoNavBar.style.width = 0;
//         navBar.classList.remove("sticky-top"); //adiciona classe bootstrap que deixe oo header fixado
//     }
//     else{
//         LogoNavBar.style.width = "100px"; //Altera a largura da logo para 100px
//         navBar.classList.add("sticky-top"); //adiciona classe bootstrap que deixe oo header fixado
//     }
// })

if (window.innerWidth > 991) {

    // Evento que ocorre quando o usuário rolar a página
    window.addEventListener("scroll", () => {

        // Ocorre se a distancia vertical do usuario for superior a 500px do topo da página
        if (window.scrollY > 500) {
            navBar.classList.add("sticky-top"); //adiciona classe bootstrap que deixe oo header fixado
            LogoNavBar.style.width = "100px"; //Altera a largura da logo para 100px
        }

        // Ocorre se a distancia vertical do usuario for inferior a 500px do topo da página
        else {
            navBar.classList.remove("sticky-top"); //adiciona classe bootstrap que deixe oo header fixado
            LogoNavBar.style.width = 0; //Altera a largura do logo para 0, fazendo a logo desapearecer
        }

    })
}

else {
    navBar.classList.add("sticky-top"); //adiciona classe bootstrap que deixe oo header fixado
    LogoNavBar.style.width = "100px"; //Altera a largura da logo para 100px
}


// ----------------------------------------
//             PESQUISA NAVBAR
// ----------------------------------------

let btnAbrirPesquisa = document.getElementById("btn-nav-open-search"); // variável que recebe elemento do botão que abre o form depesquisa do navbar
let FormPesquisa = document.getElementById("form-nav-search"); // variável que recebe elemento do botão de pesquisa do navbar
let btnSubmeterPesquisa = document.getElementById("btn-nav-submit-search"); // variável que recebe elemento do botão que conclui pesquisa do navbar

// evento que ocorre ao clicar no botão de pesquisa
btnAbrirPesquisa.addEventListener('click', function () {

    // Ocorre se o FormPesquisa estiver escondido
    if (FormPesquisa.hidden === true) {
        FormPesquisa.hidden = false //Faz o form ficar visível
        FormPesquisa.focus(); //Faz o input de pesquisa ficar em foco
    }

    // Ocorre se FormPesquisa estiver  estiver à mostra
    else {
        FormPesquisa.hidden = true; //Faz o form ficar escondido
    }

    // if ternário, se o btn de submit estiver escondido, o btn ficará visível,
    // senão, o btn ficará escondido
    btnSubmeterPesquisa.hidden === true ? btnSubmeterPesquisa.hidden = false : btnSubmeterPesquisa.hidden = true;

    if (window.innerWidth <= 526) {
        if (LogoNavBar.hidden === false)
            LogoNavBar.hidden = true;
        else
            LogoNavBar.hidden = false;
    }
});

// Código para tirar o underline do texto enquanto o mouse estiver por cima do topico

// let itemUltimaNoticiaTopico = document.querySelector(".item-ultimas-noticias div .fw-light");
// let itemUltimaNoticiaTexto = document.querySelector(".item-ultimas-noticias div .fw-bold");

// itemUltimaNoticiaTopico.addEventListener('mouseover', function () {
//     itemUltimaNoticiaTexto.style.textDecoration = "none";
//     itemUltimaNoticiaTexto.style.textDecorationLine = "none";
// })


let linkOffCanvas = document.querySelector("#offcanvas-topicos div ul li a");
// let linkOffCanvas = document.getElementById("sim");
linkOffCanvas.addEventListener("click", () => {
    let href = linkOffCanvas.href;
    window.location.href = href;
})