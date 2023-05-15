
// Objetivo 1 - quando clicar no botão de troca de tema, adicionar a classse modo-escuro no body pra que os estilos do modo escuro sejam aplicados e mudar a imagem para a lua

// Passo 1 - pegar no Js o elemento HTML correspondente ao botão de trocar de tema
const botaoAlterarTema = document.getElementById("botao-alterar-tema")
// Passo 2 - dar um jeito de pegar no Js o elemento HTML correspondente ao body
const body = document.querySelector("body")
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

// Passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema
botaoAlterarTema.addEventListener("click", () => {
    
    // Objetivo 2 - quando clicar no botão de troca de tema, caso o body ja tenha a classe modo-escuro, remover a classe para mudar pro modo claro e mudar a imagem para o sol

    // Passo 6 - verificar se o body ja tem o modo escuro
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro")

    body.classList.toggle("modo-escuro")

    if(modoEscuroEstaAtivo) {
        // Passo 7 - remover a classe do modo-escuro (esta na linha 20)

        // Passo 8 - trocar a imagem do botão de alterar tema para o sol
        imagemBotaoTrocaDeTema.setAttribute("src", "./scr/imagens/sun.png")

    } else {
        // Passo 4 - adicionar a classe modo-escuro no body (esta na linha 20)

        // Passo 5 - trocar a imagem do botão de alterar o tema para a lua
        imagemBotaoTrocaDeTema.setAttribute("src", "./scr/imagens/moon.png")
    }

})

