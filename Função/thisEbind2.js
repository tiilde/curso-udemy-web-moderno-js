function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(function() { // dispara uma outra função a partir de um determinado intervalo que foi passado
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)       
}

new Pessoa