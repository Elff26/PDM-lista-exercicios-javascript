// 3. Crie um objeto JSON que abriga todas as operações do exercício 2.

let calculadora = {
    soma: (a,b) => a+b,
    subtracao: (a,b) => a-b,
    divisao: (a,b) => b == 0 ? "Não é possivel dividir por zero" : a/b,
    multiplicacao: (a,b) => a*b
}