const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imagenBotaoTrocaTema = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () => {


    const modoEescuroEstaAtivo = body.classList.contains("modo-escuro")

    body.classList.toggle("modo-escuro")

    if (modoEescuroEstaAtivo) {

        imagenBotaoTrocaTema.setAttribute("src", "./src/imagens/sun.png")

    } else {
        imagenBotaoTrocaTema.setAttribute("src", "./src/imagens/moon.png")
    }



});