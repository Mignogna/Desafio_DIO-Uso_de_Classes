class Heroi {
        constructor(nome, idade, tipo) {
        this.nome = nome; 
        this.idade = idade; 
        this.tipo = tipo; 
    }
    
    atacar() {
            let ataque = "";

               switch (this.tipo.toLowerCase()) {
            case "mago": 
                ataque = "magia";
                break;
            case "guerreiro": 
                ataque = "espada";
                break;
            case "monge": 
                ataque = "artes marciais";
                break;
            case "ninja": 
                ataque = "shuriken";
                break;
            default: 
                ataque = "um ataque genérico";
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

const heroiMago = new Heroi("Gandalf", 1000, "Mago");
const heroiGuerreiro = new Heroi("Aragorn", 35, "Guerreiro");
const heroiMonge = new Heroi("Aang", 112, "Monge");
const heroiNinja = new Heroi("Hanzo", 28, "Ninja");

console.log("--- Teste de Ataques ---");
heroiMago.atacar();
heroiGuerreiro.atacar();
heroiMonge.atacar();
heroiNinja.atacar();


console.log("\n--- Demonstração com Laço de Repetição ---");
const heroes = [heroiMago, heroiGuerreiro, heroiMonge, heroiNinja];

for (const heroi of heroes) {
       heroi.atacar();
}