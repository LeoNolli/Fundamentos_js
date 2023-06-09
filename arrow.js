function apresentacao(nome){
    return `Meu nome é ${nome}`
}

//Arrow function
const apresentacaoArrow = nome => `Meu nome é ${nome}`
const soma = (num1, num2) => num1 + num2;

//Arrow function com mais de 1 linha de instrução

const somaNumeroPequenos = (num1, num2) => {
    if (num1>10 || num2>10){
        return 'somente número de 1 a 9'
    } else{
        return num1 + num2;
    }
}

//Hoisting: arrow function se comporta como expressão 
