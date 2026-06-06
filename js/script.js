// AF - Avaliação Final - Linguagens de Programação 
// Tema do Projeto: Padaria - Sol-Nascente
//Aluno 1: Lauren Gambacorta - RA: 250782
//Professor: Abimael de Oliveira
//Data de entrega: 07/06
// CONTADOR

const botaoContador = document.getElementById("btnContador");
const contador = document.getElementById("contador");

if(botaoContador){

    botaoContador.addEventListener("click", function(){

        contador.textContent = "10.000+";

        contador.style.color = "#d4a017";
        contador.style.fontSize = "3rem";

    });

}


// FORMULÁRIO

const formulario = document.getElementById("formContato");
const mensagem = document.getElementById("mensagemSucesso");

if(formulario){

    formulario.addEventListener("submit", function(event){

        event.preventDefault();

        mensagem.textContent = "Mensagem enviada com sucesso!";

        mensagem.style.color = "green";
        mensagem.style.fontWeight = "bold";

    });

}


// GALERIA

const produtos = document.querySelectorAll(".produto");

produtos.forEach(function(produto){

    produto.addEventListener("click", function(){

        produto.style.border = "4px solid #d4a017";

    });

});