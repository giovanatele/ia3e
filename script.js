const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [//abre a lista de objetos (itens)
    {//abre o item
        enunciado:"Você gosta de inteligencia artificial?",
        alternativas:["sim","não"]
    },
    {
        enunciado:"Você ultiliza muito a internet?",
        alternativas:["sim","não"]
    },
    {
        enunciado:"Você tem acesso a internet?",
        alternativas:["sim","não"]
    }
]
let posicao = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    mostraAlternativa();{

function mostraAlternativa()}
   for (const alternativa of perguntaAtua.alternativa){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativa.appendChild(botaoAlternativas);
    }    
}
mostraPergunta();