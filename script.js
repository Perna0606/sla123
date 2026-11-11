let atual = 0;
let perguntaAtual;
let historiaFinal = "";

const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoIniciar = document.querySelector(".iniciar-btn");
const telaInicial = document.querySelector(".tela-inicial");
const botaoJogarNovamente = document.querySelector(".novamente-btn");

const perguntas = [
    {
        enunciado: "⚡ PERGUNTA 1: Você acorda no meio de uma floresta misteriosa com uma arma sagrada ao seu lado. Qual é o seu item?",
        alternativas: [
            {
                texto: "Uma katana ancestral que emite chamas negras.",
                afirmacao: "Você escolheu o caminho da lâmina e do combate direto, dominando técnicas destrutivas.",
                proxima: 1,
            },
            {
                texto: "Um grimório antigo repleto de selos místicos selados.",
                afirmacao: "Sua afinidade natural com as artes arcanas permitiu desvendar feitiços esquecidos.",
                proxima: 1,
            }
        ]
    },
    {
        enunciado: "🔥 PERGUNTA 2: Um demônio de nível supremo surge diante do seu grupo. Como você reage?",
        alternativas: [
            {
                texto: "Avanço sozinho para proteger todos, mesmo correndo risco mortal.",
                afirmacao: "Seu espírito inabalável e instinto protetor inspiraram todos os seus aliados a superarem seus limites.",
                proxima: 2,
            },
            {
                texto: "Analiso os padrões de ataque do inimigo para traçar uma estratégia impecável.",
                afirmacao: "Seu raciocínio frio e tático encontrou a única brecha na defesa do adversário.",
                proxima: 2,
            }
        ]
    },
    {
        enunciado: "🌀 PERGUNTA 3: Durante um treinamento nas montanhas, você precisa despertar sua transformação secreta. Qual aura se manifesta?",
        alternativas: [
            {
                texto: "Uma energia dourada explosiva que estremece o solo.",
                afirmacao: "O despertar da sua força bruta rompeu qualquer barreira física existente.",
                proxima: 3,
            },
            {
                texto: "Sombras silenciosas que se moldam à sua vontade.",
                afirmacao: "Você dominou a arte da furtividade e manipulação do espaço-tempo.",
                proxima: 3,
            }
        ]
    },
    {
        enunciado: "⛩️ PERGUNTA 4: Um rival antigo oferece uma trégua para enfrentarem uma ameaça em comum. Você aceita?",
        alternativas: [
            {
                texto: "Sim, rivalidades fortalecem e a união nos tornará invencíveis.",
                afirmacao: "Sua habilidade de transformar rivais em aliados criou a guilda mais forte do reino.",
                proxima: 4,
            },
            {
                texto: "Não confio totalmente, mantenho os olhos abertos durante a batalha.",
                afirmacao: "Sua cautela garantiu que nenhuma traição surpresa o pegasse desprevenido.",
                proxima: 4,
            }
        ]
    },
    {
        enunciado: "👑 PERGUNTA 5: A batalha final terminou. Qual é o legado que você deixa para o mundo?",
        alternativas: [
            {
                texto: "Tornar-se o Rei/Rainha dos Magos e governar com sabedoria.",
                afirmacao: "Seu nome foi gravado na história como o maior herói de todos os tempos!"
            },
            {
                texto: "Partir em uma nova jornada secreta em busca de novos horizontes.",
                afirmacao: "Você se tornou uma lenda viva cujos passos inspiram novos aventureiros pelo mundo!"
            }
        ]
    }
];

botaoIniciar.addEventListener('click', iniciaJogo);
botaoJogarNovamente.addEventListener('click', jogarNovamente);

function iniciaJogo() {
    atual = 0;
    historiaFinal = "";
    telaInicial.style.display = 'none';
    caixaPerguntas.classList.add("mostrar");
    caixaAlternativas.classList.add("mostrar");
    mostraPergunta();
}

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    historiaFinal += opcaoSelecionada.afirmacao + " ";
    if (opcaoSelecionada.proxima !== undefined) {
        atual = opcaoSelecionada.proxima;
    } else {
        atual++;
    }
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "📜 SUA LENDA FOI ESCRITA!";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
    caixaResultado.classList.add("mostrar");
}

function jogarNovamente() {
    caixaResultado.classList.remove("mostrar");
    iniciaJogo();
}