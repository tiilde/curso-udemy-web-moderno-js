// a ideia do callback é passar uma função para uma outra função e quando determinado evento acontecer, essa função que foi passa será chamada de volta. Pode ser chamada várias vezes ou pode ser chamada apenas uma vez.
const fabricantes = [ 'Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir) // para cada elemento do array, é chamada a função imprimir
fabricantes.forEach(fabricante => console.log(fabricante))
