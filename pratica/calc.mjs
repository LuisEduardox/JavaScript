export function calc(a , b , operador){
    return operador(a , b)
}

export const soma = (a ,b) => a + b

export const subtracao = (a ,b) => a - b

export const divisao = (a ,b) => a / b

export const multiplicacao = (a ,b) => a * b