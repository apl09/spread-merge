// Dado el siguiente objeto:
const empleados = [
  { name: "Luis", email: "Luis@gmail.com" },
  { name: "Ana", email: "Ana@gmail.com" },
  { name: "Andrea", email: "Andrea@gmail.com" },
];

// Extrae la empleada Ana con todos sus datos personales:
// {"name":"Ana", "email":"Ana@gmail.com"}

let [, Ana] = empleados;

// Extrae el email del empleado Luis --> Luis@gmail.com

let [Luis] = empleados;
let { email } = Luis;

// Dado el siguiente objeto:
const pokemon = {
  name: "Bulbasaur",
  type: "grass",
  ability: {
    primary: "Overgrow",
    hidden: "Chlorophyll",
  },
  stats: {
    hp: 45,
    attack: 49,
    deffense: 59,
    speed: 45,
  },
  moves: ["Growl", "Tackle", "Vine Whip", "Razor Leaf"],
};

//Cambia el nombre de la propiedad “name” por “nombre”.
const { name: nombre } = pokemon;

// Extrae el nombre del pokémon.
let { name } = pokemon;

// Extrae el tipo de pokémon que es.

let { type } = pokemon;

// Extrae el movimiento “Tackle”.

let { moves } = pokemon;
let [, Tackle] = moves;

//2. Ejercicios Spread/Rest
//Mergea el siguiente pokémon con el pokémon del ejercicio anterior:
const pikachu = {
  name: "Pikachu",
  type: "electric",
  ability: {
    primary: "Static",
    hidden: "Lightning rod",
  },
  stats: {
    hp: 35,
    attack: 55,
    deffense: 40,
    speed: 90,
  },
  moves: ["Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"],
};

const mergearObjeto = { ...pokemon, ...pikachu };
console.log(mergearObjeto);

// Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los demás argumentos.
//   sumEveryOther(6, 8, 2, 3, 1); //20
//   sumEveryOther(11, 3, 12); //26

const sum = (...numeros) => {
  return numeros.reduce((a, b) => a + b);
};

const numbers = [1, 2, 3];

const result = sum(...numbers);
console.log(result);

// Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings) y retorne la suma solo de los números.

const addOnlyNums = (...nums) => {
  const onlyNums = nums.filter(element => typeof element === "number")
  return onlyNums.reduce((a, b) => a + b);
};

addOnlyNums(1, "perro", 2, 4);

// Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos 
//y devuelva un número que indique cuántos argumentos ha recibido.
// countTheArgs('gato', 'perro'); //2
  //4

const countTheArgs = (...arguments) => {
    return arguments.length
        

}

countTheArgs('gato', 'perro', 'pollo','cabra');


// Escribe una función llamada combineTwoArrays que reciba dos array como argumentos y devuelva solo un array que combine los dos (usando Spread Operator).

let arr1 = [1,2,3];
let arr2 = [3,4,5];



const combineTwoArrays = ((arr1,arr2) => [...arr1,...arr2])
  
  console.log(combineTwoArrays(arr1, arr2))
  