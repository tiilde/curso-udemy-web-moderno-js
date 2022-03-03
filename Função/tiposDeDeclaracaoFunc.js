console.log(soma(3, 4)) /* posso chamar a função antes*/

// function declaration
function soma(x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4)) /* posso chamar essa função depois que ela foi declarada*/

// named function expression
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4)) /* só pode ser chamada depois de declarada*/



