// Implementa un método de la clase pokemon, de nombre 'atacar'. El método toma por parámetro otro objeto de la clase Pokemon.

// El Pokemon que ejecuta el método realiza un ataque 
// pokemonA.atacar(PokemonB)

/**
 * Primero ataca el Pokemon A:
 * 1. Calcular un número al azar entre 0 y 'poder de ataque' para el Pokemon A
 * 2. Calcular un número al azar entre 0 y 'poder de defensa' para el Pokemon B
 * 2. El Pokemon A asesta un golpe al Pokemon B. El Pokemon B recibe el siguiente daño: "poder de ataque que ha sacado el Pokemon A - poder de defensa que ha sacado el Pokemon B". Dicha diferencia debemos restarla a la vida total del Pokemon B"

 * Dentro del mismo método 'atacar', muestra por consola cada uno de los pasos tal y como se sugiere en el ejemplo: https://oscarm.tinytake.com/tt/NTAxMzU1MF8xNTc3MzM3OQ
 

 */

class Pokemon {
    constructor(id, name, type, hp, attack, defense){
        this.id = id
        this.name = name
        this.type = type
        this.hp = hp
        this.attack = attack
        this.defense = defense
    }
    fight(pokemonToAttack){

        const atkPokemon = Math.floor(Math.random() * this.attack)
        const defPokemon = Math.floor(Math.random() * pokemonToAttack.defense)
        console.log(`${this.name} ataca a ${pokemonToAttack.name}`)
        console.log(`${this.name} ataca con ${atkPokemon} puntos de daño.`)
        console.log(`${pokemonToAttack.name} consigue una defensa de ${defPokemon} puntos.`)
        const damage = atkPokemon - defPokemon
        console.log(atkPokemon >= defPokemon ? `${this.name} asesta ${damage} puntos de daño.` : `${this.name} ha fallado el ataque.`)

        // Si he conseguido asestar un golpe, debo restar los puntos de daño al hp del pokemon atacado
        damage > 0 ? pokemonToAttack.hp = pokemonToAttack.hp - damage : pokemonToAttack.hp

        console.log(`La salud de ${pokemonToAttack.name} es ahora de ${pokemonToAttack.hp}`)
    }
}
let bulbasaur = new Pokemon(1, "Bulbasaur", ['Grass', 'Poison'], 45, 49, 49)
let squirtle = new Pokemon(1, "Squirtle", ['Water'], 44, 48, 65)

console.log(bulbasaur, squirtle)

bulbasaur.fight(squirtle)


