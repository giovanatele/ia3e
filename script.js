const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [//abre a lista de objetos (itens)
    {//abre o item
        enunciado: "Você gosta de inteligencia artificial?",
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
        enunciado: "Você ultiliza muito a internet?",
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
        enunciado: "Você tem acesso a internet?",
        alternativas: [{
            texto: "sim",
            afirmacao: "afirmacao da alternativa 1"
        }, {
            texto: "não",
            afirmacao: "afirmacao da alternativa 2"
        }]
    }
]
let posicao = 0;
let perguntaAtual;
let resposta = "";

function mostraPergunta() {
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    caixaAlternativa.textContent =" ";''
    mostraAlternativa();
}

function mostraAlternativa() {
    if(posicao>=perguntas.length){
       mostraResultado();
       return;
    }    
    for (const alternativa of perguntaAtual.alternativa) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.addEventListener("click",()=> respostasSelecionadas(alternativa));
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}
function respostasSelecionadas(opcaoselecionada){
    const afirmacao = opcaoselecionada.afirmacao
    resposta += afirmacao +" ";
    posicao++;
    mostraPergunta();
}    
function mostraResultado(){
    caixaPergunta.textContent = "Daqui a 10 anos...";
    textoResultado.textContent = respostas;
    caixaAlternativa.textContent = "";
}    
mostraPergunta();