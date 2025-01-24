// Exibe mensagem de boas-vindas
alert('Boas vindas ao nosso site!');

// Declaração e atribuição de variáveis
let nome = "Lua";
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;

// Declaração da mensagem de erro e exibição de alerta
let mensagemDeErro = "Erro! Preencha todos os campos";
alert(mensagemDeErro);

// Solicita o nome do usuário
nome = prompt('Qual seu nome?');

// Solicita a idade do usuário e converte para número
idade = Number(prompt('Digite sua idade'));

// Verifica se o usuário pode tirar a habilitação
if (idade >= 18) {
  alert('Pode tirar a habilitação!');
}
