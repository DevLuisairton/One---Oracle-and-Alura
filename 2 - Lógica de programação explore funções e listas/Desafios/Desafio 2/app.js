// 1 Criar uma função que exibe "Olá, mundo!" no console.
console.log('Olá, mundo!');

// 2 Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function nome(){
  console.log(`Olá, ${nome}!`);
}

// 3 Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function dobro (num){
  return num * 2;
}

// 4 Criar uma função que recebe três números como parâmetros e retorna a média deles.
function media (num1, num2, num3){
  let soma = num1 + num2 + num3
  return soma / 3;
}

// 5 Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function numberMax(numero1, numero2){
  return Math.max(numero1, numero2);
}

// 6 Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function multiplicacao (number1){
  return number1 * number1;
}