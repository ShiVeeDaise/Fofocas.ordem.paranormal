// ===================================
// MODO ESCURO
// ===================================

// Seleciona o botão do tema

const botaoTema = document.getElementById("botaoTema");


// Função para alternar o tema

function alternarTema() {

    document.body.classList.toggle("escuro");


    // Altera o texto do botão

    if (document.body.classList.contains("escuro")) {

        botaoTema.textContent = "☀️ Modo claro";

    } else {

        botaoTema.textContent = "🌙 Modo escuro";

    }

}


// Evento de clique

botaoTema.addEventListener("click", alternarTema);



// ===================================
// ALTERAR TEXTO
// ===================================

const botaoMensagem = document.getElementById("botaoMensagem");

const mensagem = document.getElementById("mensagem");


// Função para alterar o texto

function alterarTexto() {

    mensagem.textContent =
        "O texto foi alterado pelo JavaScript!";

}


// Evento de clique

if (botaoMensagem) {
    botaoMensagem.addEventListener("click", alterarTexto);
}


// ===================================
// CARROSSEL DE IMAGENS
// ===================================

const carrosselSlides = document.getElementById("carrosselSlides");

if (carrosselSlides) {

    const slides = carrosselSlides.querySelectorAll(".carrossel-slide");
    const pontosContainer = document.getElementById("carrosselPontos");
    const botaoAnterior = document.getElementById("carrosselAnterior");
    const botaoProximo = document.getElementById("carrosselProximo");

    let indiceAtual = 0;

    // Cria os pontos dinamicamente

    slides.forEach((slide, indice) => {

        const ponto = document.createElement("button");
        ponto.classList.add("carrossel-ponto");
        ponto.setAttribute("aria-label", "Ir para o slide " + (indice + 1));

        if (indice === 0) {
            ponto.classList.add("ativo");
        }

        ponto.addEventListener("click", () => irParaSlide(indice));

        pontosContainer.appendChild(ponto);

    });

    const pontos = pontosContainer.querySelectorAll(".carrossel-ponto");

    function irParaSlide(indice) {

        indiceAtual = (indice + slides.length) % slides.length;

        carrosselSlides.style.transform =
            "translateX(-" + (indiceAtual * 100) + "%)";

        pontos.forEach((ponto) => ponto.classList.remove("ativo"));
        pontos[indiceAtual].classList.add("ativo");

    }

    botaoProximo.addEventListener("click", () => irParaSlide(indiceAtual + 1));
    botaoAnterior.addEventListener("click", () => irParaSlide(indiceAtual - 1));

    // Avança automaticamente a cada 5 segundos

    let autoPlay = setInterval(() => irParaSlide(indiceAtual + 1), 5000);

    // Pausa o autoplay quando o mouse está sobre o carrossel

    const carrossel = document.getElementById("carrossel");

    carrossel.addEventListener("mouseenter", () => clearInterval(autoPlay));
    carrossel.addEventListener("mouseleave", () => {
        autoPlay = setInterval(() => irParaSlide(indiceAtual + 1), 5000);
    });

}


// ===================================
// BOTÃO VOLTAR AO TOPO
// ===================================

const botaoTopo = document.getElementById("botaoTopo");

if (botaoTopo) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {
            botaoTopo.classList.add("visivel");
        } else {
            botaoTopo.classList.remove("visivel");
        }

    });

    botaoTopo.addEventListener("click", () => {

        window.scrollTo({ top: 0, behavior: "smooth" });

    });

}

// ===================================
// FORMULÁRIO DE CADASTRO
// ===================================

const formCadastro = document.getElementById("formCadastro");

if (formCadastro) {

    formCadastro.addEventListener("submit", (evento) => {

        evento.preventDefault();

        const senha = document.getElementById("senha").value;
        const confirmarSenha = document.getElementById("confirmarSenha").value;

        if (senha !== confirmarSenha) {
            alert("As senhas não coincidem. Verifique e tente novamente.");
            return;
        }

        document.getElementById("cadastroSucesso").classList.add("visivel");
        formCadastro.reset();

    });

}


// ===================================
// FORMULÁRIO DE CONTATO
// ===================================

const formContato = document.getElementById("formContato");

if (formContato) {

    formContato.addEventListener("submit", (evento) => {

        evento.preventDefault();

        document.getElementById("contatoSucesso").classList.add("visivel");
        formContato.reset();

    });
