const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [//abre a lista de objetos (itens)
    {//abre o item
        enunciado: "Você gosta de inteligencia artificial?",
        alternativas: [{
            texto: "sim",
            afirmação: "afirmação da alternativa 1"
        }, {
            texto: "não",
            afirmação: "afirmação da alternativa 2"
        }
        ]
    },
    {
        enunciado: "Você ultiliza muito a internet?",
        alternativas: [{
            texto: "sim",
            afirmação: "afirmação da alternativa 1"
        }, {
            texto: "não",
            afirmação: "afirmação da alternativa 2"
        }

        ]
    },
    {
        enunciado: "Você tem acesso a internet?",
        alternativas: [{
            texto: "sim",
            afirmação: "afirmação da alternativa 1"
        }, {
            texto: "não",
            afirmação: "afirmação da alternativa 2"
        }]
    }
]
let posicao = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    mostraAlternativa();
}

function mostraAlternativa() {

    for (const alternativa of perguntaAtual.alternativa) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}
mostraPergunta();