// IIFE -> Immediately Invoked Function Expression
// Padrão muito utilizado para fugir do escopo global

// Padrão de uma IIFE
(function() {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()
