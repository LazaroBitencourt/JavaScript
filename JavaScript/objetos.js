const pessoa = {
    nome : 'mario',
    idade: 56,
    mostrarNome: function() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}.`)
    }
    
};

pessoa.mostrarNome();
console.log(pessoa.nome);