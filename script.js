const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector(' .texto-resultado');

const perguntas = [//abre a lista de objetos (itens)
    {//abre o item
        enunciado: "Voce gosta de maquiagem?",
        alternativas: [{
            texto: "sim",
            afirmacao: "afirmacao da alternativa 1"
        }, 
        {
            texto: "não",
            afirmacao: "afirmacao da alternativa"
        }
        ]
    },
    {
        enunciado: "Voce gosta da cor rosa?",
        alternativas: [{
            texto: "sim",
            afirmacao: "afirmacao da alternativa 1"
        }, {
            texto: "não",
            afirmacao: "afirmacao da alternativa 2"
        }
        ]
    },
    {
        enunciado: "Voce usa batom?",
        alternativas: [{
            texto: "sim",
            afirmacao: "afirmacao da alternativa 1"
        }, 
        {
            texto: "não",
            afirmacao: "afirmacao da alternativa 2"
        }
        ]
     }
]
let posicao = 0;
let perguntaAtual;
let respostas = "";


function mostraPergunta() {
    if (posicao>=perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    caixaAlternativa.textContent = " ";
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",  () => respostasSelecionadas(alternativa));
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}
function respostasSelecionadas(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmação;
    respostas += afirmacoes + " ";
    posicao++;
    mostraPergunta();
}
function mostraResultado(){
    caixaPergunta.textContent = "Confira suas respostas: ";
    textoResultado.textContent = respostas; 
    caixaAlternativa.textContent = "";
}
mostraPergunta();