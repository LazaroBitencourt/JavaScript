class Pessoa{
    nome;
    idade;
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

descrever(){
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}.`);
}
}

const mario = new Pessoa('Mario', 31);

console.log(mario);

const maria = new Pessoa();
maria.nome = 'Maria';
maria.idade = 39

console.log(maria);
maria.descrever();