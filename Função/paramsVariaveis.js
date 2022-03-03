function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i] // Arguments é um array interno em uma função, que possui todos os argumentos que foram passados
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))