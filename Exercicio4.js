/*4. Escreva um script que apresenta as seguintes operações para o usuário:
    1- Soma
    2- Subtração
    3-Multiplicação
    4- Divisão
    5- Sair
O programa deve ficar em loop até que o usuário digite 5. Se o usuário digitar uma opção
inválida, o programa deve informá-lo disso e mostrar o menu de opções novamente. Use
o objeto JSON do exercício 4 para realizar as operações aritméticas.*/

let operacoes = {
    soma: (a,b) => a+b,
    subtracao: (a,b) => a-b,
    divisao: (a,b) => b == 0 ? "Não é possivel dividir por zero" : a/b,
    multiplicacao: (a,b) => a*b
}

const menu = "Menu\n 1-Soma\n 2-Subtração\n 3-Multiplicação\n 4-Divisão\n 5-Sair"
const prompt = require('prompt-sync') ({sigint: true});

function calculadora (){
    let num1, num2, op;
    do{
        console.log(menu)
        num1 = parseInt(prompt("Digite o primeiro número: "))
        num2 = parseInt(prompt("Digite o segundo número: "))
        op = parseInt(prompt("Digite o número da opção desejada: "))


        switch(op){
            case 1:
                console.log(`Soma = ${operacoes.soma(num1, num2)}`)
            break;
        
            case 2:
                console.log(`Subtração = ${operacoes.subtracao(num1, num2)}`)
            break;
        
            case 3:
                console.log(`Multiplicação = ${operacoes.multiplicacao(num1, num2)}`)
            break;
        
            case 4:
                console.log(`Divisão = ${operacoes.divisao(num1, num2)}`)
            break;
        
            case 5:
                console.log("Calculadora Encerrada!")
            break;
        
            default:
                console.log("Opção Inválida")
        }
    }while(op !== 5);
}

calculadora()