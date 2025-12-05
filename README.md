# ⚔️ Desafio: Escrevendo as Classes de um Jogo

Este projeto é uma solução para o desafio proposto no Bootcamp Santander - Fundamentos de Lógica de Programação em parceria com a DIO (Digital Innovation One). O objetivo é praticar o uso de **Classes e Objetos**, **métodos**, **estruturas de decisão** e outras estruturas de programação para modelar um personagem de aventura.

O código implementa uma **Classe Genérica** que representa um herói, definindo suas propriedades básicas e um método para simular um ataque com base no seu tipo.

---

## ⚙️ Funcionalidades Implementadas

A classe principal do projeto, `Heroi`, modela a estrutura de um personagem.

### 1. A Classe `Heroi` (Modelo do Herói)

A classe é definida com um **construtor** que inicializa as propriedades essenciais de qualquer herói:

| Propriedade | Descrição |
| :--- | :--- |
| `nome` | O nome do personagem (ex: Merlin) |
| `idade` | A idade do personagem (ex: 150) |
| `tipo` | A classe ou função de combate (ex: Mago, Guerreiro) |

### 2. O Método `atacar()` (Ação)

O método `atacar()` é responsável por determinar e exibir a forma como o herói executa sua ação, variando conforme a propriedade `tipo`.

| Tipo de Herói | Ataque (Saída) |
| :--- | :--- |
| **Mago** | **magia** |
| **Guerreiro** | **espada** |
| **Monge** | **artes marciais** |
| **Ninja** | **shuriken** |

A lógica interna do método utiliza uma **Estrutura de Decisão** (`switch/case` ou `if/else if`) para mapear o `tipo` do herói à descrição correta do `ataque`.

---

## 💻 Estruturas Utilizadas

O desenvolvimento do projeto envolve o uso dos seguintes conceitos, conforme solicitado pelo desafio:

* **Classes e Objetos:** Criação da classe `Heroi` e instâncias de objetos para cada personagem.
* **Funções:** O método `constructor` e o método `atacar()`.
* **Variáveis e Operadores:** Uso de variáveis de escopo (`let ataque`) e propriedades de classe (`this.tipo`).
* **Estruturas de Decisão:** Utilização de `switch/case` ou `if/else if` para determinar a ação de ataque.
