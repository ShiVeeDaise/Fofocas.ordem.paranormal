
// =============================
// MODO ESCURO
// =============================

const botaoTema =
    document.getElementById("botaoTema");

function alternarTema() {

    document.body.classList.toggle("escuro");

    if (document.body.classList.contains("escuro")) {

        botaoTema.textContent = "☀ Modo claro";

    } else {

        botaoTema.textContent = "🌙 Modo escuro";

    }
}

// =============================
// ALTERAR TEXTO
// =============================

const botaoMensagem =
    document.getElementById("botaoMensagem");

const mensagem =
    document.getElementById("mensagem");

function alterarTexto() {

    mensagem.textContent =
