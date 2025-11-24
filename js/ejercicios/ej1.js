let miSuperheroeFavorito = "Hulk";
let numeroFavorito = 50;
let altura = 5;
let longitud = 10;
let suma = altura + longitud;

document.getElementById("resultado").innerHTML = `
  <ul class="lista-estilizada">
    <li>Mi superhéroe favorito es: ${miSuperheroeFavorito}</li>
    <li>Mi número favorito es: ${numeroFavorito}</li>
    <li>Mi altura es: ${altura}</li>
    <li>Mi longitud es: ${longitud}</li>
    <li>La suma de altura y longitud es: ${suma}</li>
  </ul>
`;
console.log("%c===== Ejercicio 1 =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");
console.log({ miSuperheroeFavorito, numeroFavorito, altura, longitud, suma });



console.log(
  "%c===== Ejercicio 2 =====",
  "color: white; background-color: #085f0c; font-weight: bold; padding: 2px 6px; border-radius: 3px;"
);

const ejercicio2 = {
  jedi: {
    nombre: "Luke Skywalker",
    edadActual: 25,
    frase() {
      return `${this.nombre} tiene actualmente ${this.edadActual} años.`;
    }
  },
  personaje: {
    nombre: "Leia",
    apellido: "Organa",
    edad: 20,
    descripcion() {
      return `Soy ${this.nombre} ${this.apellido}, tengo ${this.edad} años y soy una princesa de Alderaan.`;
    }
  },
  sables: (() => {
    const lista = [
      { nombre: "Shoto de Yoda", precio: 1500 },
      { nombre: "Sable de Darth Vader", precio: 2000 }
    ];
    const total = lista.reduce((acc, s) => acc + s.precio, 0);
    return { lista, total }; // total **dentro** del objeto
  })(),
  naves: {
    precioBaseGlobal: 25000,
    nave1: { nombre: "Ala-X", precioBase: 50000 },
    nave2: { nombre: "Halcón Milenario", precioBase: 70000 },
    calcularPreciosFinales() {
      this.nave1.precioFinal = this.nave1.precioBase + this.precioBaseGlobal;
      this.nave2.precioFinal = this.nave2.precioBase + this.precioBaseGlobal;
    }
  }
};

// Calcular precios finales de las naves
ejercicio2.naves.calcularPreciosFinales();

// Actualizar HTML
document.getElementById("jedi").innerText = ejercicio2.jedi.frase();
document.getElementById("personaje").innerText = ejercicio2.personaje.descripcion();
document.getElementById("precio").innerText = `El precio total de ambos sables es ${ejercicio2.sables.total}`;
document.getElementById("naves1").innerText =
  `Con la subida del precio Base Global a ${ejercicio2.naves.precioBaseGlobal}, ` +
  `el precio final del ${ejercicio2.naves.nave1.nombre} se quedaría en ${ejercicio2.naves.nave1.precioFinal} créditos ` +
  `y el del ${ejercicio2.naves.nave2.nombre} en ${ejercicio2.naves.nave2.precioFinal} créditos.`;

// Consola
console.log("Frase del Jedi:", ejercicio2.jedi.frase());
console.log("Frase de Leia:", ejercicio2.personaje.descripcion());
console.log("Sables:", ejercicio2.sables.lista);
console.log("Total sables:", ejercicio2.sables.total); // total dentro del objeto
console.log("Naves:", ejercicio2.naves);



console.log("%c===== Ejercicio 3 =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");
// 3.1 Multiplica 10 por 5
console.log("10 x 5 = " + 10 * 5);
document.getElementById("multi1").innerText = "10 x 5 = " + 10 * 5;

// 3.2 Divide 10 por 2
console.log("10 / 2 = " + 10 / 2);
document.getElementById("div1").innerText = "10 / 2 = " + 10 / 2;

// 3.3 Divide 15 por 9 y muestra el resto
console.log("El resto de 15 / 9 es = " + 15 % 9);
document.getElementById("res1").innerText = "El resto de 15 / 9 es = " + 15 % 9;

// 3.4 Usa el operador de asignación que dé o = 15
let p = 10;
let j = 5;
let suma1 = p + j;
console.log("p + j = " + suma1);
document.getElementById("suma1").innerText = "p + j = " + suma1;

// 3.5 Usa el operador de asignación que dé i = 50
let c = 10;
let m = 5;
let multi2 = c * m;
console.log("c x m = " + multi2);
document.getElementById("multi2").innerText = "c x m = " + multi2;



console.log("%c===== Ejercicio 4 =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");
// Array inicial
const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

// 4.1 Saca a "Tendo" por consola
console.log(aldeanos[3]);
document.getElementById("ald1").innerText = aldeanos[3];

// 4.2 Coloca en el último lugar "Cervasio"
aldeanos.push("Cervasio");
console.log(aldeanos);
document.getElementById("ald2").innerText = aldeanos.join(", ");

// 4.3 Cambia el primer elemento por "Bambina"
aldeanos[0] = "Bambina";
console.log(aldeanos);
document.getElementById("ald3").innerText = aldeanos.join(", ");

// 4.4 Dale la vuelta al array
aldeanos.reverse();
console.log(aldeanos);
document.getElementById("ald4").innerText = aldeanos.join(", ");

// 4.5 Cambia "Narciso" por "Canela" con splice
aldeanos.splice(4, 1, "Canela");
console.log(aldeanos);
document.getElementById("ald5").innerText = aldeanos.join(", ");

// 4.6 Imprime el último elemento sin atacar la posición
console.log(aldeanos[aldeanos.length - 1]);
const last = aldeanos[aldeanos.length - 1];
document.getElementById("ald6").innerText = last;



console.log("%c===== Ejercicio 5 =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");
const number1 = 10;
const number2 = 20;
const number3 = 2;

const operatDiv = document.getElementById("operat");
const lista = document.createElement("ul");
lista.classList.add("lista-estilizada");

if (number1 === 10) {
    console.log('number1 es estrictamente igual a 10');
    const li = document.createElement("li");
    li.innerText = "number1 es estrictamente igual a 10";
    lista.appendChild(li);
}

if (number2 / number1 === 2) {
    console.log("number2 dividido entre number1 es igual a 2");
    const li = document.createElement("li");
    li.innerText = "number2 dividido entre number1 es igual a 2";
    lista.appendChild(li);
}

if (number1 !== number2) {
    console.log("number1 es estrictamente distinto a number2");
    const li = document.createElement("li");
    li.innerText = "number1 es estrictamente distinto a number2";
    lista.appendChild(li);
}

if (number3 != number1) {
    console.log("number3 es distinto a number1");
    const li = document.createElement("li");
    li.innerText = "number3 es distinto a number1";
    lista.appendChild(li);
}

if (number3 * 5 === number1) {
    console.log("number3 por 5 es igual a number1");
    const li = document.createElement("li");
    li.innerText = "number3 por 5 es igual a number1";
    lista.appendChild(li);
}

if (number3 * 5 === number1 && number1 * 2 === number2) {
    console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
    const li = document.createElement("li");
    li.innerText = "number3 por 5 es igual a number1 Y number1 por 2 es igual a number2";
    lista.appendChild(li);
}

if (number2 / 2 === number1 || number1 / 5 === number3) {
    console.log("number2 entre 2 es igual a number1 o number1 entre 5 es igual a number3");
    const li = document.createElement("li");
    li.innerText = "number2 entre 2 es igual a number1 o number1 entre 5 es igual a number3";
    lista.appendChild(li);
}

operatDiv.appendChild(lista);



console.log("%c===== Ejercicio 6 =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");
console.log("EJERCICIO 1.1");
// 1.1 Bucle for de 0 a 9
const ej1 = document.getElementById("ej1");
for (let i = 0; i < 10; i++) {
    console.log(i);
    ej1.innerHTML += i + "<br>";
}
console.log("")
console.log("EJERCICIO 1.2");
// 1.2 Bucle for de 0 a 9, solo números pares
const ej2 = document.getElementById("ej2");
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
        ej2.innerHTML += i + "<br>";
    }
}
console.log("")
console.log("EJERCICIO 1.3");
// 1.3 Contar ovejas hasta 10
const ej3 = document.getElementById("ej3");
for (let i = 1; i <= 10; i++) {
    if (i < 10) {
        console.log("Intentando dormir 🐑");
        ej3.innerHTML += "Intentando dormir 🐑<br>";
    } else {
        console.log("¡Dormido!");
        ej3.innerHTML += "¡Dormido!";
    }
}



console.log("%c===== Ejercicio 7 =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const numberDiv = document.getElementById("number");

if (numberDiv) {
    const numberOne = 4;
    const numberTwo = 17;

    const mensaje = numberOne > numberTwo
        ? "numberOne es mayor que numberTwo"
        : "numberTwo es mayor que numberOne";

    console.log(mensaje);
    numberDiv.innerText = mensaje;
}



console.log("%c===== Ejercicio 8 =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");
const avengers = [
    "Hulk",
    "Thor",
    "Iron Man",
    "Captain A.",
    "Spiderman",
    "Captain M.",
];

function findLongestWord(stringList) {
    let longest = stringList[0]; 
    for (let i = 1; i < stringList.length; i++) {
        if (stringList[i].length > longest.length) {
            longest = stringList[i];
        }
    }
    return longest;
}

const longestWord = findLongestWord(avengers);

console.log(findLongestWord(avengers));
document.getElementById("word").textContent = longestWord;



console.log("%c===== Ejercicio 9 =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");
const numberList = [1, 2, 3, 5, 45, 37, 58];
const sumDiv = document.getElementById("sumAll");

// Primera versión: bucle for
function sumNumbers(numberList) {
    let sum = 0;
    for (let i = 0; i < numberList.length; i++) {
        sum += numberList[i];
    }
    return sum;
}

const sumNumber = sumNumbers(numberList);
console.log("La suma total es: " + sumNumber);

// Segunda versión: reduce
function sumNumber2(numberList) {
    return numberList.reduce((acc, num) => acc + num, 0);
}

const result = sumNumber2(numberList);
console.log("La suma total (ejecutada con reduce) es: " + result);

// Añadimos ambos resultados al mismo div, separados por <p>
sumDiv.innerHTML = `
    <p>La suma total es: ${sumNumber}</p>
    <p>La suma total (ejecutada con reduce) es: ${result}</p>
`;



console.log(
  "%c===== Ejercicio 10 =====",
  "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;"
);

const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(numberList) {
  if (!numberList.length) return 0; // evita división por cero
  const sum = numberList.reduce((acc, num) => acc + num, 0);
  return sum / numberList.length;
}

const promedio = average(numbers);

console.log(`El promedio de la lista es ${promedio}`);

const promedioDiv = document.getElementById("promedio");
if (promedioDiv) {
  promedioDiv.textContent = `El promedio de la lista es ${promedio}`;
}



console.log(
  "%c===== Ejercicio 11 =====",
  "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;"
);

const mixedElements = [
    6,
    1,
    "Marvel",
    1,
    "hamburguesa",
    "10",
    "Prometeo",
    8,
    "Hola mundo",
];

function averageWord(list) {
    let total = 0;

    for (let item of list) {
        if (typeof item === "number") {
            total += item;
        } else if (typeof item === "string") {
            total += item.length;
        }
    }

    return total / list.length;
}

const mixed = averageWord(mixedElements);

console.log("El promedio mezclado de la lista es " + mixed);
document.getElementById("mixed").textContent = "El promedio mezclado de la lista es " + mixed;