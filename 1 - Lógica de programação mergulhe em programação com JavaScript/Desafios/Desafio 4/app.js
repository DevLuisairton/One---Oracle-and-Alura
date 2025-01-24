// 1 - Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
console.log('seja bem vindo!!');

// 2 Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
let nome = "Luis";
console.log(`Olá, ${nome}`);

// 3 Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
alert(`Olá, ${nome}`);

//4 Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
let linguagem = prompt('Qual a linguagem que você mais gosta ?');
console.log(linguagem)

// 5 - Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
let valor1 = Number.parseInt(prompt('Digite um valor inteiro'));
let valor2 = Number.parseInt(prompt('Digite outro valor inteiro:'));
resultado = valor1 + valor2

console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);

// 6 Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
let valor_1 = Number.parseInt(prompt('Digite um valor inteiro'));
let valor_2 = Number.parseInt(prompt('Digite outro valor inteiro:'));
resultado2 = valor_1 - valor_2

console.log(`A soma de ${valor_1} e ${valor_2} é igual a ${resultado2}.`);

// 7 Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
let idade_user = Number.parseInt(prompt("Digite sua idade"));

if (idade_user >= 18){
    console.log('Você é maior de idade!');
}else{
    console.log('Você é menor de idade');
}

// 8 Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
let numero = Number.parseInt(prompt('Insira um valor inteiro:'));

if (numero > 0){
    console.log(`O número ${numero} é positivo!`);
} else if (numero < 0){
    consolelog(`O número ${numero} é negativo!`);
} else {
    console.log('O número é zero!');
}

// 9 Use um loop while para imprimir os números de 1 a 10 no console.
let num = 1;

while (num <= 10){
    console.log(num);
    num++;
}

// 10 Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
let nota = Number.parseFloat(prompt('Digite sua nota:'));

if (nota >= 7){
    console.log('Aprovado!');
} else {
    console.log('Reprovado!');
}

// 11 Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
let num_aleatorio1 = Math.random() ;
console.log(num_aleatorio1);
// 12 Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
let num_aleatorio2 = Math.random() * 10 + 1;
console.log(num_aleatorio2);

// 13 Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
let numero3 = Math.random() * 1000 + 1;
console.log(numero3);
