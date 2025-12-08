console.log("%c===== Ejercicio 1: Definición y operación de variables =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");
let miSuperheroeFavorito = "Hulk";  //Declaro variables
let numeroFavorito = 50;
let altura = 5;
let longitud = 10;
let suma = altura + longitud;

console.log({ miSuperheroeFavorito, numeroFavorito, altura, longitud, suma }); // Imprimo por consola

document.getElementById("resultado").innerHTML = // Muestro la información en pantalla 
 `<ul class="lista-estilizada">
    <li>Mi superhéroe favorito es: ${miSuperheroeFavorito}</li>
    <li>Mi número favorito es: ${numeroFavorito}</li>
    <li>Mi altura es: ${altura}</li>
    <li>Mi longitud es: ${longitud}</li>
    <li>La suma de altura y longitud es: ${suma}</li>
 </ul>`;





console.log("%c===== Ejercicio 2: Uso y operación de variables =====", "color: white; background-color: #085f0c; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const ejercicio2 = { // Establezco el array con la informacion
    jedi: { nombre: "Luke Skywalker", edadActual: 25, frase() {return `${this.nombre} tiene actualmente ${this.edadActual} años.`;}},
    personaje: { nombre: "Leia", apellido: "Organa", edad: 20, descripcion() {return `Soy ${this.nombre} ${this.apellido}, tengo ${this.edad} años y soy una princesa de Alderaan.`;}},
    sables: (() => {const lista = [{ nombre: "Shoto de Yoda", precio: 1500 }, { nombre: "Sable de Darth Vader", precio: 2000 }];
        const total = lista.reduce((acc, s) => acc + s.precio, 0);
        return { lista, total };
    })(),
    naves: { 
        precioBaseGlobal: 25000, nave1: { nombre: "Ala-X", precioBase: 50000 }, nave2: { nombre: "Halcón Milenario", precioBase: 70000 },
        calcularPreciosFinales() { this.nave1.precioFinal = this.nave1.precioBase + this.precioBaseGlobal; this.nave2.precioFinal = this.nave2.precioBase + this.precioBaseGlobal;}
    }
};
ejercicio2.naves.calcularPreciosFinales(); //Calcular los precios con los datos del array

console.log("Frase del Jedi:", ejercicio2.jedi.frase());                       // Imprimir por consola
console.log("Frase de Leia:", ejercicio2.personaje.descripcion());
console.log("Sables:", ejercicio2.sables.lista);
console.log("Total sables:", ejercicio2.sables.total);
console.log("Naves:", ejercicio2.naves);

document.getElementById("jedi").innerText = ejercicio2.jedi.frase();                         // Mostrar en pantalla
document.getElementById("personaje").innerText = ejercicio2.personaje.descripcion();
document.getElementById("precio").innerText = `El precio total de ambos sables es ${ejercicio2.sables.total}`;
document.getElementById("naves1").innerText =
  `Con la subida del precio Base Global a ${ejercicio2.naves.precioBaseGlobal}, ` +
  `el precio final del ${ejercicio2.naves.nave1.nombre} se quedaría en ${ejercicio2.naves.nave1.precioFinal} créditos ` +
  `y el del ${ejercicio2.naves.nave2.nombre} en ${ejercicio2.naves.nave2.precioFinal} créditos.`;





console.log("%c===== Ejercicio 3: Operaciones aritméticas =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

let p = 10;            // Defino variables para operar
let j = 5;
let suma1 = p + j;
let c = 10;
let m = 5;
let multi2 = c * m;

console.log("10 x 5 = " + 10 * 5);             // Imprimo por consola
console.log("10 / 2 = " + 10 / 2);
console.log("El resto de 15 / 9 es = " + 15 % 9);
console.log("p + j = " + suma1);
console.log("c x m = " + multi2);

document.getElementById("multi1").innerText = "10 x 5 = " + 10 * 5;         // Muestro en pantalla
document.getElementById("div1").innerText = "10 / 2 = " + 10 / 2;
document.getElementById("res1").innerText = "El resto de 15 / 9 es = " + 15 % 9;
document.getElementById("suma1").innerText = "p + j = " + suma1;
document.getElementById("multi2").innerText = "c x m = " + multi2;





console.log("%c===== Ejercicio 4: Funciones sobre el array =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"]; // Defino array

const tendo = aldeanos[3];        // Defino métodos y constantes

aldeanos.push("Cervasio");   
const cervasio = [...aldeanos]; 

aldeanos[0] = "Bambina";
const bambina = [...aldeanos];

aldeanos.reverse();
const reverse = [...aldeanos];

aldeanos.splice(4, 1, "Canela");
const splice = [...aldeanos];

const ultimo = aldeanos[aldeanos.length - 1];

console.log(tendo);        // Imprimo por consola
console.log(cervasio);
console.log(bambina);
console.log(reverse);
console.log(splice);
console.log(ultimo);

document.getElementById("ald1").innerText = tendo;           // Muestro en pantalla
document.getElementById("ald2").innerText = cervasio.join(", ");
document.getElementById("ald3").innerText = bambina.join(", ");
document.getElementById("ald4").innerText = reverse.join(", ");
document.getElementById("ald5").innerText = splice.join(", ");
document.getElementById("ald6").innerText = ultimo;





console.log("%c===== Ejercicio 5: Comparación de variables =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const number1 = 10;   // Defino constantes
const number2 = 20;
const number3 = 2;

const operatDiv = document.getElementById("operat");    // El div y la lista para pantalla
const lista = document.createElement("ul");
lista.classList.add("lista-estilizada");

if (number1 === 10) {                                        // Defino operaciones, imprimo por consola, creo el li y lo añado a la lista
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

operatDiv.appendChild(lista);  // Muestro la lista en pantalla





console.log("%c===== Ejercicio 6: Bucle For =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

console.log("EJERCICIO 6.1: Bucle for de 0 a 9");
const ej1 = document.getElementById("ej1");   // Bucle for de 0 a 9
for (let i = 0; i < 10; i++) {
    console.log(i);
    ej1.innerHTML += i + "<br>";
}
console.log("EJERCICIO 6.2: Bucle for de 0 a 9, solo números pares");
const ej2 = document.getElementById("ej2");   // Bucle for de 0 a 9, solo números pares
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
        ej2.innerHTML += i + "<br>";
    }
}
console.log("EJERCICIO 6.3: Bucle for de 0 a 10 para dormir");
const ej3 = document.getElementById("ej3");   // Bucle para contar ovejas hasta 10
for (let i = 1; i <= 10; i++) {
    if (i < 10) {
        console.log("Intentando dormir 🐑");
        ej3.innerHTML += "Intentando dormir 🐑<br>";
    } else {
        console.log("¡Dormido!");
        ej3.innerHTML += "¡Dormido!";
    }
}





console.log("%c===== Ejercicio 7: Comparación mediante función con argumento =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const numberDiv = document.getElementById("number");  // El div para pantalla

if (numberDiv) {     // Creo la condicion para que determine cual es el mayor
    const numberOne = 4;
    const numberTwo = 17;

    const mensaje = numberOne > numberTwo
        ? `numberOne(${numberOne}) es mayor que numberTwo(${numberTwo})`
        : `numberTwo(${numberTwo}) es mayor que numberOne(${numberOne})`;

    console.log(mensaje);
    numberDiv.innerText = mensaje;
}





console.log("%c===== Ejercicio 8: Buscar el Superhéroe con el nombre más largo =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const avengers = [  // Defino array
    "Hulk",
    "Thor",
    "Iron Man",
    "Captain A.",
    "Spiderman",
    "Captain M.",
];

function findLongestWord(stringList) {    //Bucle que busca el elemento mas largo
    let longest = stringList[0]; 
    for (let i = 1; i < stringList.length; i++) {
        if (stringList[i].length > longest.length) {
            longest = stringList[i];
        }
    }
    return longest;
}

const longestWord = findLongestWord(avengers);   // Creo la constante que muestra el resultado
console.log(longestWord);  //Imprimo consola
document.getElementById("word").textContent = longestWord;   // Muestro pantalla





console.log("%c===== Ejercicio 9: Sumar elementos de un array =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const numberList = [1, 2, 3, 5, 45, 37, 58];       // Defino array  

function sumNumbers(numberList) {          // Itero sobre el array y sumo los elementos
    let sum = 0;
    for (let i = 0; i < numberList.length; i++) {
        sum += numberList[i];
    }
    return sum;
}
const sumNumber = sumNumbers(numberList);
console.log("La suma total es: " + sumNumber);  // Imprimo la suma

function sumNumber2(numberList) {         // Otra forma de hacerlo, reduce recorre y acumula el resultado
    return numberList.reduce((acc, num) => acc + num, 0);
}

const result = sumNumber2(numberList);
console.log("La suma total (ejecutada con reduce) es: " + result);   // Imprimo la suma con reduce

const sumDiv = document.getElementById("sumAll");    // Div para pantalla con ambas opciones
sumDiv.innerHTML = `   
    <p>La suma total es: ${sumNumber}</p>
    <p>La suma total (ejecutada con reduce) es: ${result}</p>
`;





console.log("%c===== Ejercicio 10: Calcular promedio de elemnentos de un array =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const numbers = [12, 21, 38, 5, 45, 37, 6];    // Defino array

function average(numberList) {        // Suma los elementos y hace promedio
  if (!numberList.length) return 0;
  const sum = numberList.reduce((acc, num) => acc + num, 0);
  return sum / numberList.length;
}

const promedio = average(numbers);   // Crea la constante

console.log(`El promedio de la lista es ${promedio}`);   // Imprime por consola

const promedioDiv = document.getElementById("promedio");             // Crea el div para pantalla
promedioDiv.textContent = `El promedio de la lista es ${promedio}`;  // Muestra en pantalla



console.log("%c===== Ejercicio 11: Calcular promedio sumando numbers y longitudes de string =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const mixedElements = [   // Defino array
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

function averageWord(list) {   // Recorre el array y detecta el tipo de dato
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

const mixed = averageWord(mixedElements); // Creo constante

console.log("El promedio mezclado de la lista es " + mixed);   // Imprimo consola
document.getElementById("mixed").textContent = "El promedio mezclado de la lista es " + mixed;   // Muestro pantalla





console.log("%c===== Ejercicio 12: Clasificación de valores únicos y repetidos =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const duplicates = [  // Defino el array
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
];

function removeDuplicates(list) {
    const unique = [];                     // Inicializo las 2 categorias
    const repeated = [];

    for (const item of list) {                   // Recorro el original
        if (!unique.includes(item)) {
            unique.push(item);
        } else if (!repeated.includes(item)) {
            repeated.push(item);
        }
    }

    console.log("Únicos:", unique);               // Imprimo por consola
    console.log("Repetidos:", repeated);

    const div = document.getElementById("dup");   // Div para pantalla
    div.innerHTML = `
        <h4>Array sin duplicados:</h4>
        <p>${unique.join(", ")}</p>
        <br>
        <h4>Elementos repetidos:</h4>
        <p>${repeated.map(el => `${el} se repite`).join("<br>")}</p>
    `;
}

removeDuplicates(duplicates);   // Ejecuto funcion 




console.log(
  "%c===== Ejercicio 13: Buscador de nombres =====",
  "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;"
);

const names = [  // Defino el array
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
];

function nameFinder(nameList, value) {                  // Paso 2 parámetros a la funcion, la lista de nombres y el nombre que queremos encontrar
    const index = nameList.indexOf(value);              // Usa indexOf para obtener la posicion q corresponda con el nombre buscado
    const container = document.getElementById("name");  // Crea el container para pantalla

    if (index !== -1) {  // Esto sifnica que lo encontró
        console.log(`Buscando: "${value}" → encontrado en la posición ${index}`);                  // Imprime consola
        container.innerHTML += `<p>Buscando: "${value}" → encontrado en la posición ${index}</p>`; // Muestra pantalla
    } else {
        console.log(`Buscando: "${value}" → no se encontró en la lista`);                          // Imprime consola
        container.innerHTML += `<p>Buscando: "${value}" → no se encontró en la lista</p>`;         // Muestra pantalla
    }
}

nameFinder(names, 'Tony'); // Ejecuto la funcion y le paso los valores Tony y Scott
nameFinder(names, 'Scott');





console.log(
  "%c===== Ejercicio 14: Contador de repeticiones =====",
  "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;"
);

const words = [  // Defino array
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code'
];

function repeatCounter(list) {    // Funcion de conteo sobre un parametro temporal
    const counter = {};           // Inicializa array de conteo

    for (let word of list) {      // For que recorre el array
        if (counter[word]) {      // Comprueba si la palabra ya existia en el array
            counter[word]++;      // Le suma unidad al contador
        } else {
            counter[word] = 1;    // En caso contrario le pone un 1
        }
    }

    return counter;               // Devuelve el objeto con los conteos
}
const countWords = repeatCounter(words);  // LLama a la funcion y guarda el resultado
console.log(countWords);                  // Imprime lo que guardo

const outputDiv = document.getElementById("counter");   // Crea el div para pantalla
                                                        // Renderiza el resultado en una lista dentro del div
outputDiv.innerHTML = `                                 
<ul class="lista-estilizada">
    ${Object.entries(countWords)                          // Convierte el objeto repeatResult en un array de pares [palabra, contador] con Object.entries
    .map(([word, count]) => `<li>${word}: ${count}</li>`)   // Usa .map() para crear un <li> por cada palabra y su conteo.
    .join("")}                                              
</ul>
`; // Une todos los <li> en una sola cadena con .join("") y lo inserta en innerHTML





console.log(
  "%c===== Ejercicio 15: Elementos que incluyen la palabra 'camiseta' =====",
  "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;"
);

const products = [          // Defino array
  "Camiseta de Metallica",
  "Pantalón vaquero",
  "Gorra de beisbol",
  "Camiseta de Basket",
  "Cinturón de Orión",
  "AC/DC Camiseta",
];

function showCamisetas(list) {              // Le paso el parametro temporal a la funcion
  const camisetas = [];                     // Inicializo el array para clasificar
  
  for (let product of list) {               // Recorro el original
    if (product.includes("Camiseta")) {     // Compruebo si incluye la palabra
      console.log(`• ${product}`);
      camisetas.push(product);              // Se añade al array inicializado previamente
    }
  }

  const camisDiv = document.getElementById("camis");  // Crea el div para pantalla
  camisDiv.innerHTML = `
    <ul class="lista-estilizada">
      ${camisetas.map(camiseta => `<li>${camiseta}</li>`).join("")}
    </ul>
  `;
}

showCamisetas(products);    // Ejecuta la funcion sobre el array





console.log(
  "%c===== Ejercicio 16: Destinos a los que viajar =====",
  "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;"
);

const placeToTravel = [  // Defino array
  "Japon",
  "Venecia",
  "Murcia",
  "Santander",
  "Filipinas",
  "Madagascar",
];

function showPlaces(list) {                           // Parametro temporal a la funcion
  const placeDiv = document.getElementById("place");  // Creo el div de pantalla
  const ul = document.createElement("ul");            // Creo lista
  ul.className = "lista-estilizada";                  // Doy clase

  for (let place of list) {                           // Recorro el array let itemTemporal of Arraytemporal
    console.log(`• ${place}`);                        // Imprimo los elementos
    const li = document.createElement("li");          // Creo el li
    li.textContent = place;                           // Coloco cada elemento en cada li
    ul.appendChild(li);                               // Meto los li en la ul
  }

  placeDiv.appendChild(ul);                           // Inserto la ul en el div
}

showPlaces(placeToTravel);                            // Ejecuto la funcion





console.log(
  "%c===== Ejercicio 17: Datos del alienígena =====",
  "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;"
);

const alien = {                   // Defino objeto
    name: 'Xenomorph',
    species: 'Xenomorph XX121',
    origin: 'Unknown',
    weight: 180
};

let output = '<ul class="lista-estilizada">';  // Defino el elemento que albergara la lista

for (let propiedad in alien) {   // Recorro con temporal en array
    console.log(`• La propiedad ${propiedad} tiene como valor: ${alien[propiedad]}`);       // Imprimo consola cada li
    output += `<li>La propiedad ${propiedad} tiene como valor: ${alien[propiedad]}</li>`;   // Añado en output cada li
}

output += '</ul>';   // Cierras lista
document.getElementById("alienInfo").innerHTML = output;  // Introduzco tu elemento en el div de pantalla





console.log("%c===== Ejercicio 18: Destinos por posición  =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const placesToTravel = [               // Defino array
    { id: 5, name: "Japan" },
    { id: 11, name: "Venecia" },
    { id: 23, name: "Murcia" },
    { id: 40, name: "Santander" },
    { id: 44, name: "Filipinas" },
    { id: 59, name: "Madagascar" },
];

for (let i = 0; i < placesToTravel.length; i++) {                      // Recorro el array
    if (placesToTravel[i].id === 11 || placesToTravel[i].id === 40) {  // Comprueba si existen
        placesToTravel.splice(i, 1);                                   // Elimina
        i--;                                                           // Reduce la posicion de índice
    }
}
console.log(placesToTravel);                                           // Imprime el array tratado

let output2 = "";                                                      // Creo el elemento q albergara los elementos
for (let i = 0; i < placesToTravel.length; i++) {                      // Recorro el array
    output2 += `ID: ${placesToTravel[i].id} - Nombre: ${placesToTravel[i].name}<br>`; // Renderizo en el elemento
}
document.getElementById("places").innerHTML = output2;                 // Coloco el elemento en el div de pantalla





console.log("%c===== Ejercicio 19: Eliminar los juguetes que incluyan la palabra 'gato' =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const toys = [        // Defino array
    {id: 5, name: 'Transformers'},
    {id: 11, name: 'LEGO'},
    {id: 23, name: 'Hot Wheels'},
    {id: 40, name: 'Rascador de gato'},
    {id: 40, name: 'FurReal Friends gato interactivo'},
    {id: 60, name: 'Nerf Blaster'},
    {id: 71, name: 'Sylvanian Families - Familia gato'}
];

const filteredToys = toys.filter(toy => !toy.name.toLowerCase().includes("gato"));  // Creo un nuevo array con los que no lleven la palabra gato
console.log(filteredToys);  // Imprime consola

const ul = document.createElement("ul");            // Creo lista
ul.classList.add("lista-estilizada");               // Doy clase
for (const toy of filteredToys) {                   // Recorro el array
    const li = document.createElement("li");        // Creo li
    li.textContent = toy.name;                      // Meto el nombre en el li
    ul.appendChild(li);                             // Meto los li en la ul
}

const listaToys = document.getElementById("toys");  // Rescato el html
listaToys.appendChild(ul);                          // Meto la lista





console.log("%c===== Ejercicio 20: Juguetes populares con más de 15 ventas =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const toyscount = [         // Defino array
    {id: 101, name: 'Super Soaker', sellCount: 15},
    {id: 102, name: 'Tamagotchi', sellCount: 22},
    {id: 103, name: 'Polly Pocket', sellCount: 8},
    {id: 104, name: 'Yo-yo', sellCount: 33},
    {id: 105, name: 'Pikachu plush toy', sellCount: 19},
    {id: 106, name: "Rubik's Cube", sellCount: 27},
    {id: 107, name: 'Fidget Spinner', sellCount: 12},
    {id: 108, name: 'Slinky', sellCount: 5},
    {id: 109, name: 'Magic 8-Ball', sellCount: 38},
    {id: 110, name: 'Troll Doll', sellCount: 20}
];
const popularToys = [];   // Defino array vacio para los populares

for (const toy of toyscount) {   // Recorro array
    if (toy.sellCount > 15) {    // Compruebo los que tengan más de 15 ventas
        popularToys.push(toy);   // Los meto en el array inicializado
    }
}
console.log(popularToys);        // Imprimo consola

const ultoys = document.createElement("ul");                     // Creo ul
ultoys.classList.add("lista-estilizada");                        // Doy clase
for (const toy of popularToys) {                                 // Recorro array
    const li = document.createElement("li");                     // Creo li
    li.textContent = `${toy.name} - Ventas: ${toy.sellCount}`;   // Renderizo la info en el li
    ultoys.appendChild(li);                                      // Meto el li en la lista
}

const contenedor = document.getElementById("toyscount");         // Rescato el html
contenedor.appendChild(ultoys);                                  // Meto la lista





console.log("%c===== Ejercicio 21: Clasificación por edad =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const users = [                               // Defino array
    { name: "Tony", years: 43 },
    { name: "Peter", years: 18 },
    { name: "Natasha", years: 14 },
    { name: "Bruce", years: 32 },
    { name: "Khamala", years: 16 },
];

console.log("Usuarios menores de edad:");     // Recorro e imprimo segun condicion
for (const user of users) {
    if (user.years < 18) {
        console.log(`• ${user.name}`);
    }
}

console.log("Usuarios mayores de edad:");     // Recorro e imprimo segun condicion
for (const user of users) {
    if (user.years >= 18) {
        console.log(`• ${user.name}`);
    }
}

let menores = "<p>Usuarios menores de edad:</p><ul class='lista-estilizada'>";
for (const user of users) {                    // Recorro e muestro segun condicion
    if (user.years < 18) {
        menores += `<li>${user.name}</li>`;
    }
}
menores += "</ul>";

let mayores = "<p>Usuarios mayores de edad:</p><ul class='lista-estilizada'>";
for (const user of users) {                    // Recorro e imprimo segun condicion
    if (user.years >= 18) {
        mayores += `<li>${user.name}</li>`;
    }
}
mayores += "</ul>";

document.getElementById("edades").innerHTML = mayores + "<br>" + menores;  // Rescato el html





console.log("%c===== Ejercicio 22: Alimentos veganos =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];  // Array de sustitutos
const foodSchedule = [                     // Defino array
    { name: "Heura", isVegan: true },
    { name: "Salmon", isVegan: false },
    { name: "Tofu", isVegan: true },
    { name: "Burger", isVegan: false },
    { name: "Rice", isVegan: true },
    { name: "Pasta", isVegan: true },
];

let fruitIndex = 0;                                  // Inicializa array
for (let i = 0; i < foodSchedule.length; i++) {      // Recorro array
    if (!foodSchedule[i].isVegan) {                  // Comprueba q no sea vegan
        foodSchedule[i].name = fruits[fruitIndex];   // Lo sistuyo por el primer elemento de fruits
        foodSchedule[i].isVegan = true;              // Se confirma que ahora es vegan
        fruitIndex++;                                // Paso al siguiente sustituto
    }
}
console.log(foodSchedule);                           // Imprimo array tratado

const container = document.getElementById("fruit");  // Rescato html
const ulfruit = document.createElement("ul");        // Creo lista
ulfruit.classList.add("lista-estilizada");           // Doy clase
container.appendChild(ulfruit);                      // Meto la lista en el html
for (let i = 0; i < foodSchedule.length; i++) {      // Recorro array
    const item = document.createElement("li");       // Creo li
    item.textContent = foodSchedule[i].name;         // Meto item
    ulfruit.appendChild(item);                       // Relleno la ul con li
}



console.log("%c===== Ejercicio 23: Películas categorizadas por duración =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const movies = [   // Defino array
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Christmas", durationInMinutes: 225 },
    { name: "Inception", durationInMinutes: 165 },
    { name: "The Lord of the Rings", durationInMinutes: 967 },
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },
    { name: "Terminator", durationInMinutes: 140 },
    { name: "Spirited Away", durationInMinutes: 80 },
    { name: "The Matrix", durationInMinutes: 136 },
    { name: "Amélie", durationInMinutes: 110 },
    { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
];

const smallMovies = [];   // Inicializo los arrays de categoria
const mediumMovies = [];
const largeMovies = [];
for (let movie of movies) {                         // Recorro array
    if (movie.durationInMinutes < 100) {            // Clasifico por duracion
        smallMovies.push(movie);
    } else if (movie.durationInMinutes <= 200) {
        mediumMovies.push(movie);
    } else {
        largeMovies.push(movie);
    }
}

const categories = [   // Creo un array de las categorias
    { title: "Películas pequeñas", list: smallMovies },
    { title: "Películas medianas", list: mediumMovies },
    { title: "Películas grandes", list: largeMovies },
];

console.log({ categories });

const pelis = document.getElementById("pelis");    // Rescato html
categories.forEach(category => {                   // Para cada categoria creo
    const h4 = document.createElement("h4");        // H4
    h4.textContent = category.title;                // Inserto el titulo
    pelis.appendChild(h4);                          // Meto h4 en div

    const ul = document.createElement("ul");        // Creo ul
    ul.classList.add("lista-estilizada");           // Doy clase
    pelis.appendChild(ul);                          // Meto ul en div

    category.list.forEach(movie => {                // Para cada elemento de la categoria
        const li = document.createElement("li");     // Creo li
        li.textContent = movie.name;                 // Meto el nombre
        ul.appendChild(li);                          // Meto el li en la ul
    });
});





console.log("%c===== Ejercicio 24: Personajes humanos de Star Wars =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const characters = [     // Defino array
    { name: 'Luke Skywalker', species: 'Human' },
    { name: 'Darth Vader', species: 'Human' },
    { name: 'Chewbacca', species: 'Wookiee' },
    { name: 'Leia Organa', species: 'Human' },
    { name: 'R2-D2', species: 'Droid' },
    { name: 'C-3PO', species: 'Droid' },
    { name: 'Obi-Wan Kenobi', species: 'Human' },
    { name: 'Yoda', species: 'Unknown' },
    { name: 'Han Solo', species: 'Human' }
];

const humanCharacters = characters.filter(c => c.species === "Human"); // Filtro por especie
console.log(humanCharacters);                                          // Imprimo consola

const humans = document.getElementById("humansPJ");                    // Rescato html

const ulhuman = document.createElement("ul");                          // Creo ul
ulhuman.classList.add("lista-estilizada");                             // Doy clase
humanCharacters.forEach(character => {                                 // Para cada elemento del filtrado
    const li = document.createElement("li");                            // Creo li
    li.textContent = character.name;                                    // Meto el nombre
    ulhuman.appendChild(li);                                            // Meto el li en la ul
});

humans.appendChild(ulhuman);                                           // Meto la ul en el html





console.log("%c===== Ejercicio 25:  =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const moviesZ = [  // Defino array
    { title: 'The Matrix', releaseYear: 1999 },
    { title: 'Star Wars: Episode IV - A New Hope', releaseYear: 1977 },
    { title: 'Inception', releaseYear: 2010 },
    { title: 'Jurassic Park', releaseYear: 1993 },
    { title: 'The Shawshank Redemption', releaseYear: 1994 },
    { title: 'Pulp Fiction', releaseYear: 1994 },
    { title: 'Avatar', releaseYear: 2009 },
    { title: 'The Dark Knight', releaseYear: 2008 },
    { title: 'Fight Club', releaseYear: 1999 },
    { title: 'Forrest Gump', releaseYear: 1994 }
];
const categoriesZ = [   // Creo un objeto
    { title: 'Películas antes de los 2000', items: moviesZ.filter(m => m.releaseYear < 2000) },   // Filtro por categorias 
    { title: 'Películas después de los 2000', items: moviesZ.filter(m => m.releaseYear >= 2000) }
];

const movies2000 = document.getElementById('movies2000');  // Rescato html
if (movies2000) {                                          // Compruebo que existe
    categoriesZ.forEach(category => {                      // Para cada categoria
        const h4 = document.createElement('h4');             // Creo h4
        h4.textContent = category.title;                     // Meto titulo
        movies2000.appendChild(h4);                          // Meto el titulo en html
                                         
        const ul = document.createElement('ul');             // Creo ul
        ul.classList.add('lista-estilizada');                // Doy clase
        movies2000.appendChild(ul);                          // Meto la ul en el html

        category.items.forEach(movie => {                               // En la categoria por cada pelicula
            const li = document.createElement('li');                      // Creo li
            li.textContent = `${movie.title} (${movie.releaseYear})`;     // Renderizo titulo con fecha
            ul.appendChild(li);                                           // Meto el li en la ul
        });
    });
}

categoriesZ.forEach(category => {                                   // Por cada categoria
    console.log(`\n📂 ${category.title}`);                           // Imprimo titulo categoria
    category.items.forEach(movie => {                                // En la categoria por cada pelicula
        console.log(` - ${movie.title} (${movie.releaseYear})`);       // Renderizo titulo y fecha
    });
});





console.log("%c===== Ejercicio 26: Canciones de rock de 5 minutos =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const songs = [    // Defino array
    { title: 'Bohemian Rhapsody', genre: 'Rock', duration: 5.55 },
    { title: 'Stairway to Heaven', genre: 'Rock', duration: 7.58 },
    { title: 'Billie Jean', genre: 'Pop', duration: 4.54 },
    { title: 'Hotel California', genre: 'Rock', duration: 6.31 },
    { title: 'Sweet Child o Mine', genre: 'Rock', duration: 5.56 },
    { title: 'Smells Like Teen Spirit', genre: 'Rock', duration: 5.01 },
    { title: 'Comfortably Numb', genre: 'Rock', duration: 6.23 },
    { title: 'Wish You Were Here', genre: 'Rock', duration: 5.34 },
    { title: 'Black Dog', genre: 'Rock', duration: 4.54 },
    { title: 'Thunderstruck', genre: 'Rock', duration: 4.52 },
    { title: 'Crazy Love', genre: 'Pop', duration: 3.52 },
];

const rockPlaylist = [];                                            // Inicializo array de filtrado

for (let i = 0; i < songs.length; i++) {                            // Recorro array
    const song = songs[i];                                          // Variable temporal
 
    if (song.genre === "Rock" && song.duration > 5.00) {            // Comprueba la condicion
        rockPlaylist.push(song);                                    // Mete la cancion que lo cumple
    }
}
console.log(rockPlaylist);                                          // Imprimo consola

const rockGen = document.getElementById("rock");                    // Rescato html
const ulrock = document.createElement("ul");                        // Creo ul
ulrock.classList.add("lista-estilizada");                           // Doy clase
for (let i = 0; i < rockPlaylist.length; i++) {                     // Recorro array
    const song = rockPlaylist[i];                                   // Variable temporal
    const li = document.createElement("li");                          // Creo li
    li.textContent = `${song.title} - Duration: ${song.duration}`;    // Renderizo titulo y duracion
    ulrock.appendChild(li);                                           // Meto li en la ul
};
rockGen.appendChild(ulrock);                                        // Meto la ul en el html





console.log("%c===== Ejercicio 27: Dibujos animados antiguos =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const cartoons = [   // Defino array
    { name: 'Bugs Bunny', debut: 1938 },
    { name: 'SpongeBob SquarePants', debut: 1999 },
    { name: 'Tom and Jerry', debut: 1940 },
    { name: 'Mickey Mouse', debut: 1928 },
    { name: 'Scooby-Doo', debut: 1969 },
    { name: 'The Flintstones', debut: 1960 },
    { name: 'Batman: The Animated Series', debut: 1992 },
    { name: 'The Simpsons', debut: 1989 },
    { name: 'Pokémon', debut: 1997 },
    { name: "Dexter's Laboratory", debut: 1996 }
];

let oldestCartoon = cartoons[0];                 // Defino el primero como el más antiguo hasta nueva orden
for (let i = 0; i < cartoons.length; i++) {      // Recorro array
    const cartoon = cartoons[i];                 // Variable temporal
    if (cartoon.debut < oldestCartoon.debut) {   // Comparo el debut de cada uno con el que yo considero más antiguo de momento
        oldestCartoon = cartoon;                 // Si alguna se cumple actualizo
    }
}
console.log("La serie de dibujos animados más antigua es:", oldestCartoon.name);  // Imprimo consola
 
const contenedor3 = document.getElementById("cartoon");                           // Rescato html
contenedor3.innerHTML = `<p>${oldestCartoon.name} (${oldestCartoon.debut})</p>`;  // Renderizo





console.log("%c===== Ejercicio 28: Álbumes de rock =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const albums = [   // Defino array
    { title: 'Led Zeppelin IV', genre: 'Rock', duration: 42.19 },
    { title: 'The Dark Side of the Moon', genre: 'Rock', duration: 42.49 },
    { title: 'Back in Black', genre: 'Rock', duration: 42.11 },
    { title: 'Hotel California', genre: 'Rock', duration: 43.08 },
    { title: 'Abbey Road', genre: 'Rock', duration: 47.23 },
    { title: 'Thriller', genre: 'Pop', duration: 42.19 },
    { title: 'A Night at the Opera', genre: 'Rock', duration: 43.08 },
    { title: 'The Wall', genre: 'Rock', duration: 81.00 },
    { title: 'Born to Run', genre: 'Rock', duration: 39.26 },
    { title: 'The Joshua Tree', genre: 'Rock', duration: 50.11 }
];

let totalDuration = 0;                        // Inicializo la variable
for (let i = 0; i < albums.length; i++) {     // Recorro array
    const album = albums[i];                  // Variable temporal
    if (album.genre === 'Rock') {             // Compruebo que el genero sea rock
        totalDuration += album.duration;      // Sumo la duracion a la variable inicializada
    }
}
console.log("Duración total de álbumes de Rock:", totalDuration.toFixed(2), "minutos"); // Imprimo consola

const albumRock = document.getElementById("album");                                     // Rescato html
albumRock.innerHTML = `<p><strong>${totalDuration.toFixed(2)}</strong> minutos</p>`;    // Renderizo





console.log("%c===== Ejercicio 29: Películas de Star Wars clasificadas por década =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const starWarsMovies = [   // Defino array
    { title: 'A New Hope', releaseYear: 1977 },
    { title: 'The Empire Strikes Back', releaseYear: 1980 },
    { title: 'Return of the Jedi', releaseYear: 1983 },
    { title: 'The Phantom Menace', releaseYear: 1999 },
    { title: 'Attack of the Clones', releaseYear: 2002 },
    { title: 'Revenge of the Sith', releaseYear: 2005 },
    { title: 'The Force Awakens', releaseYear: 2015 },
    { title: 'The Last Jedi', releaseYear: 2017 },
    { title: 'The Rise of Skywalker', releaseYear: 2019 },
    { title: 'Rogue One', releaseYear: 2016 },
    { title: 'Solo', releaseYear: 2018 }
];

const moviesByDecade = {};                                  // Inicializo
for (let i = 0; i < starWarsMovies.length; i++) {           // Recorro
    const movie = starWarsMovies[i];                        // Legibilidad
    const decade = Math.floor(movie.releaseYear / 10) * 10; // Atribuir decada

    if (!moviesByDecade[decade]) {                          // Si no hay nada
        moviesByDecade[decade] = [];                        // Inicializo un array para esa decada
    }

    moviesByDecade[decade].push(movie.title);               // Meto el titulo de la pelicula
}
console.log(moviesByDecade);                                // Imprimo

const starwars = document.getElementById('starwars');       // Rescato html
for (const decade in moviesByDecade) {                      // Recorro array
    const decadeTitle = document.createElement('h4');       // Creo h4
    decadeTitle.style.marginTop = "20px";                   // Estilo
    decadeTitle.textContent = `${decade}s`;                 // Renderizo
    starwars.appendChild(decadeTitle);                      // Meto el h4 en el html

    const movieList = document.createElement('ul');         // Creo lista
    movieList.className = 'lista-estilizada';               // Doy clase
    moviesByDecade[decade].forEach(title => {               // Para cada titulo de la decada
        const li = document.createElement('li');              // Creo
        li.textContent = title;                               // Meto el titulo
        movieList.appendChild(li);                            // Meto el li en la ul
    });

    starwars.appendChild(movieList);                        // Meto la ul en el html
}





console.log("%c===== Ejercicio 30: Canciones clasificadas por género =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const tracks = [   // Defino array
    { title: 'Enter Sandman', genre: 'Metal' },
    { title: 'Back in Black', genre: 'Rock' },
    { title: 'Bohemian Rhapsody', genre: 'Rock' },
    { title: 'Blinding Lights', genre: 'Pop' },
    { title: 'Old Town Road', genre: 'Country' },
    { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
    { title: 'Bad Guy', genre: 'Pop' },
    { title: 'Thunderstruck', genre: 'Rock' },
    { title: 'Hotel California', genre: 'Rock' },
    { title: 'Stairway to Heaven', genre: 'Rock' }
];

const tracksByGenre = {};                      // Inicializo objeto de arrays
for (let i = 0; i < tracks.length; i++) {      // Recorro array
    const track = tracks[i];                   // Variable temporal
    const genre = track.genre;                 // Variable temporal

    if (!tracksByGenre[genre]) {               // Si no existe el genero
        tracksByGenre[genre] = [];             // Lo inicializo
    } 

    tracksByGenre[genre].push(track.title);    // Meto el titulo en ese género
}
console.log(tracksByGenre);                    // Imprimo consola

const tracks90 = document.getElementById('tracks');   // Rescato el html
for (const genre in tracksByGenre) {                  // Recorro array
    const genreTitle = document.createElement('h4');  // Creo h4
    genreTitle.style.marginTop = "20px";              // Estilo 
    genreTitle.textContent = genre;                   // Meto el genero en el h4
    tracks90.appendChild(genreTitle);                 // Meto el titulo en el html

    const trackList = document.createElement('ul');   // Creo ul
    trackList.className = 'lista-estilizada';         // Doy clase
    tracksByGenre[genre].forEach(title => {           // Cada pelicula del genero
        const li = document.createElement('li');        // Creo li
        li.textContent = title;                         // Meto el titulo en el li
        trackList.appendChild(li);                      // Meto el li en la ul
    });

    tracks90.appendChild(trackList);                  // Meto la lista en el html
}





console.log("%c===== Ejercicio 31: Influencias de los artistas más famosos del siglo XX =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const artists = [    // Defino array
    { name: 'Kurt Cobain', influences: ['The Beatles', 'Pixies', 'Lead Belly'] },
    { name: 'David Bowie', influences: ['Little Richard', 'Chuck Berry', 'The Velvet Underground'] },
    { name: 'Eddie Vedder', influences: ['The Who', 'Neil Young', 'Jim Morrison'] },
    { name: 'Freddie Mercury', influences: ['Liza Minnelli', 'Jimi Hendrix', 'Aretha Franklin'] },
    { name: 'John Lennon', influences: ['Elvis Presley', 'Chuck Berry', 'Buddy Holly'] }
];

const legends = document.getElementById('legends');  // Rescato html
for (const { name, influences } of artists) {        // Recorro array

  const artistTitle = document.createElement('h4');    // Creo h4
  artistTitle.textContent = name;                      // Meto nombre artista
  legends.appendChild(artistTitle);                    // Meto h4 en el html

  const ul = document.createElement('ul');             // Creo lista
  ul.className = 'lista-estilizada';                   // Doy clase

  console.log(`${name}`);                              // Imprimo el nombre del artista
  for (const influence of influences) {                // Recorro su array de influencias y por cada una
    console.log(` • ${influence}`);                      // Imprimo
    
    const li = document.createElement('li');             // Creo li
    li.textContent = `${influence}`;                     // Meto la influencia en el li
    ul.appendChild(li);                                  // Meto el li en la ul
  }
  legends.appendChild(ul);                             // Meto la ul en el html
}



console.log("%c===== Ejercicio 32: Búsqueda del X-Men más antiguo =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const xMen = [    // Defino array
    { name: 'Wolverine', year: 1974 },
    { name: 'Cyclops', year: 1963 },
    { name: 'Storm', year: 1975 },
    { name: 'Phoenix', year: 1961 },
    { name: 'Beast', year: 1963 },
    { name: 'Gambit', year: 1990 },
    { name: 'Nightcrawler', year: 1975 },
    { name: 'Magneto', year: 1963 },
    { name: 'Professor X', year: 1963 },
    { name: 'Mystique', year: 1978 }
];

function findOldestXMen(xMen) {                                // Funcion de buscar con array como parámetro
    return xMen.reduce((oldest, current) => {                  // Recorre el array con parámetros
        return current.year < oldest.year ? current : oldest;  // Si el item actual es mas viejo que el mas antiguo, lo coloca, de lo contrario pone el mas viejo
    });
}
const oldest = findOldestXMen(xMen);  // Defino una variable para el resultado
console.log(`El X-Men más antiguo es ${oldest.name}, que apareció en ${oldest.year}.`);  // Puedo sacar las propiedades del resultado porque es uno de los elementos del array y lo renderizo

document.getElementById("men").innerHTML = `<p><strong>${oldest.name}</strong> apareció en <strong>${oldest.year}</strong>.</p>`;  // Coloco el resultado en el html





console.log("%c===== Ejercicio 33: Capital de cada país =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

 const capitals = {     // Defino array
    Spain: 'Madrid',
    France: 'Paris',
    Italy: 'Rome',
    Germany: 'Berlin',
    Portugal: 'Lisbon',
    Poland: 'Warsaw',
    Greece: 'Athens',
    Austria: 'Vienna',
    Hungary: 'Budapest',
    Ireland: 'Dublin'
};

function getCapital(country) {    // Funcion con parámetro pais
    if (capitals[country]) {      // Si el array de paises existe
        return {
            text: `La capital de ${country} es ${capitals[country]}.`,                 // Renderizo el resultado
            html: `<span style="white-space: nowrap; display: block; width: 100%;">La capital de ${country} es <strong>${capitals[country]}</strong>.</span>` // Muestro resultado en pantalla
        };
    } else {       // En caos de no tener el pais en el array
        return {
            text: `No tengo información sobre la capital de ${country}.`,
            html: `No tengo información sobre la capital de ${country}.`
        };
    }
}
const country = "Greece";               // Pais que le paso al Parametro
const capital = getCapital(country);    // Variable temporal con el resultado
console.log(capital.text);              // Imprimo consola
 
document.getElementById("capital").innerHTML = capital.html; // Muestro en pantalla





console.log("%c===== Ejercicio 34: Promedio de duración de todas las películas =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const moviesProm = [   // Defino array
    { title: 'Inception', duration: 148 },
    { title: 'The Dark Knight', duration: 152 },
    { title: 'Interstellar', duration: 169 },
    { title: 'Dunkirk', duration: 106 },
    { title: 'The Prestige', duration: 130 },
    { title: 'Memento', duration: 113 },
    { title: 'Batman Begins', duration: 140 },
    { title: 'The Dark Knight Rises', duration: 164 },
    { title: 'Tenet', duration: 150 },
    { title: 'Insomnia', duration: 118 }
];

function averageMovieDuration(moviesProm) {       // Funcion con  parámetro temporal
    if (moviesProm.length === 0) return 0;        // Si el array está vacio no calcula nada
    const total = moviesProm.reduce((sum, movie) => sum + movie.duration, 0); // Recorre con 2 parámetros
    return total / moviesProm.length;  // Calcula el promedio
}
const averageMovie = averageMovieDuration(moviesProm);  // Guarda el resultado en una variable
console.log("El promedio de duración de las películas es:", averageMovie, "minutos"); // Imprime consola

const averageElement = document.getElementById("averageMovie");
averageElement.innerHTML = `<strong>${averageMovie}</strong> minutos.`;
averageElement.style.display = "block";




console.log("%c===== Ejercicio 35: Buscando que mutante tiene Telepatía =====","color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const mutants = [   // Defino array
    { name: 'Wolverine', power: 'regeneration' },
    { name: 'Magneto', power: 'magnetism' },
    { name: 'Professor X', power: 'telepathy' },
    { name: 'Jean Grey', power: 'telekinesis' },
    { name: 'Rogue', power: 'power absorption' },
    { name: 'Storm', power: 'weather manipulation' },
    { name: 'Mystique', power: 'shape-shifting' },
    { name: 'Beast', power: 'superhuman strength' },
    { name: 'Colossus', power: 'steel skin' },
    { name: 'Nightcrawler', power: 'teleportation' }
];

function findMutantByPower(mutants, power) {   // Funcion sobre array y con parametro
    const found = mutants.filter(mutant => mutant.power === power);  // Guarda el filtrado en una variable
    const messageElement = document.getElementById("mutant"); // Rescato html
    let message;

    if (found.length > 0) {  // Si encuentra algo renderiza el poder y mapea los que lo tengan
        message = `Mutante(s) con el poder "${power}": ${found.map(m => `<b>${m.name}</b>`).join(', ')}`;
        console.log(`Mutante(s) con el poder "${power}": %c${found.map(m => m.name).join(', ')}`, "font-weight: bold");
    } else {
        message = `No se encontró ningún mutante con el poder "${power}".`;
        console.log(message);
    }
    messageElement.innerHTML = message;     // Coloco message en el html
    messageElement.style.display = "block";
}
findMutantByPower(mutants, "telepathy"); // Ejecuta la funcion sobre el array y le pasa el parametro





console.log("%c===== Ejercicio 36: Edad actual de los actores =====","color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const actors = [   // Defino array
    { name: 'Leonardo DiCaprio', born: 1974 },
    { name: 'Tom Hanks', born: 1956 },
    { name: 'Meryl Streep', born: 1949 },
    { name: 'Brad Pitt', born: 1963 },
    { name: 'Johnny Depp', born: 1963 },
    { name: 'Scarlett Johansson', born: 1984 },
    { name: 'Jennifer Lawrence', born: 1990 },
    { name: 'Denzel Washington', born: 1954 },
    { name: 'Morgan Freeman', born: 1937 },
    { name: 'Cate Blanchett', born: 1969 }
];

function calculateActorsAges(actors) {               // Funcion con array como parámetro
    const currentYear = new Date().getFullYear();    // Guarda el año actual en variable
    return actors.map(actor => {                     // Mapea los actores
        const age = currentYear - actor.born;        // Guarda en variable su edad calculando
        return { name: actor.name, age: age };       // Devuelve un objeto
    });
}
const actorAge = calculateActorsAges(actors);        // Guarda en una variable el array tratado
console.log(actorAge);                               // Imprime
                                                     // Muestra en pantalla
document.getElementById("actors").innerHTML = `       
  <ul class="lista-estilizada">
    ${actorAge
      .map(actor => `<li>${actor.name} tiene ${actor.age} años</li>`)
      .join('')}
  </ul>
`;





console.log("%c===== Ejercicio 37: Categorías de películas =====","color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const moviesCat = [    // Defino array
    {title: "Bracula: Condemor II", duration: 192, categories: ["comedia", "aventura"],},
    {title: "Spider-Man: No Way Home", duration: 122, categories: ["aventura", "acción"],},
    {title: "The Voices", duration: 223, categories: ["comedia", "thriller"],},
    {title: "Shrek", duration: 111, categories: ["comedia", "aventura", "animación"],},
];

const categorias = [];                           // Inicializo el array de claisificacion
for (const movie of moviesCat) {                 // Recorro array pelis
    for (const category of movie.categories) {   // Recorro array categorias
        if (!categorias.includes(category)) {    // Se comprueba que no exista la categoria
        categorias.push(category);               // Se inserta en el inicializado
        }
    }
}
console.log(categorias);                         // Imprimo

document.getElementById("cate").innerHTML = `
  <ul class="lista-estilizada">
    ${categorias.map(categoria => `<li>${categoria}</li>`).join('')}
  </ul>
`;  // Muestro pantalla





console.log("%c===== Ejercicio 38: Media del volumen de los sonidos favoritos =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const userSound = [   // Defino array
    {name: "Alberto", favoritesSounds: {waves: { format: "mp3", volume: 50 }, rain: { format: "ogg", volume: 60 }, firecamp: { format: "mp3", volume: 80 },},},
    {name: "Antonio", favoritesSounds: {waves: { format: "mp3", volume: 30 }, shower: { format: "ogg", volume: 55 }, train: { format: "mp3", volume: 60 },},},
    {name: "Santiago", favoritesSounds: {shower: { format: "mp3", volume: 50 }, train: { format: "ogg", volume: 60 }, firecamp: { format: "mp3", volume: 80 },},},
    {name: "Laura", favoritesSounds: {waves: { format: "mp3", volume: 67 }, wind: { format: "ogg", volume: 35 }, firecamp: { format: "mp3", volume: 60 },},},
];

let totalVolume = 0;                                        // Inicializo volumen
let totalLength= 0;                                         // Inicializo longitud
for (const user of userSound) {                             // Recorro y para cada user
    const values = Object.values(user.favoritesSounds);     // Variable temporal para longitud
    totalLength += values.length;                           // Acumulo
                                         
    for (const sound of values) {                           // Recorro objeto y para cada sonido
        totalVolume += sound.volume;                        // Acumulo
    }
}
const averageSound = totalVolume / totalLength;                 // Promedio
console.log("La media de volumen de todos los sonidos favoritos es:", averageSound); // Consola

document.getElementById("sonidos").textContent = averageSound.toFixed(2); // Pantalla





console.log("%c===== Ejercicio 39: Sonidos favoritos =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const usersSoundFav = [   // Defino array
    {name: "Alberto", favoritesSounds: {waves: { format: "mp3", volume: 50 }, rain: { format: "ogg", volume: 60 }, firecamp: { format: "mp3", volume: 80 },},},
    {name: "Antonio", favoritesSounds: {waves: { format: "mp3", volume: 30 }, shower: { format: "ogg", volume: 55 }, train: { format: "mp3", volume: 60 },},},
    {name: "Santiago", favoritesSounds: {shower: { format: "mp3", volume: 50 }, train: { format: "ogg", volume: 60 }, firecamp: { format: "mp3", volume: 80 },},},
    {name: "Laura", favoritesSounds: {waves: { format: "mp3", volume: 67 }, wind: { format: "ogg", volume: 35 }, firecamp: { format: "mp3", volume: 60 },},},
];

const soundFav = {};                                       // Inicializo array de favoritos
for (const userSoundFav of usersSoundFav) {                // Recorro usuarios y por cada uno
    for (const sound in userSoundFav.favoritesSounds) {       // Recorro sonidos y por cada uno entro en favoriteSounds
        if (soundFav[sound]) {                             // Si el sonido favorito ya existe se le añade 1 al conteo
            soundFav[sound]++;
        } else {
            soundFav[sound] = 1;                           // Si no se le coloca 1 en el contador
        }
    }
}
console.log("Conteo de sonidos favoritos:", soundFav);     // Imprimo consola

let sonido = "<ul class='lista-estilizada'>";                  // Doy clase y creo la lista sonido
for (const sound in soundFav) {                                // Por cada elemento del array coloco li yañado a la ul
    sonido += `<li>${sound}: <b>${soundFav[sound]}</b></li>`;
}
sonido += "</ul>";                                             // Cierro

document.getElementById("sonido").innerHTML = sonido;          // Coloco ul en el html





console.log("%c===== Ejercicio 40: Funciones sobre el array de Star Wars =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const mainCharacters = [  // Defino array
"Luke",
"Leia",
"Han Solo",
"Chewbacca",
"Rey",
"Anakin",
"Obi-Wan",
];

function findArrayIndex(array, text) {             // Funcion de búsqueda con parámetros
    for (let i = 0; i < array.length; i++) {       // Recorro
        if (array[i] === text) {                   // Compruebo si el indice del array es igual al texto
            return i;                              // Lo retorno
        }
    }
    return -1;                                     // Retorna no encontrado

}

function removeItem(array, text) {                 // Funcion de eliminación con parámetros
    const index = findArrayIndex(array, text);     // Guardo en variable el elemento encontrado
    if (index !== -1) {                            // Compruebo q se encontró algo
        array.splice(index, 1);                    // Hace splice sobre el índice encontrado y solo borra 1
    }
    return array;                                  // Retorna el array tratado
}

console.log("Índice de 'Leia':", findArrayIndex(mainCharacters, "Leia"));   // Imprimir consola
console.log("Índice de 'Rey':", findArrayIndex(mainCharacters, "Rey"));
console.log("Índice de 'Obi-Wan':", findArrayIndex(mainCharacters, "Obi-Wan"));

console.log("Eliminar 'Han Solo':", removeItem([...mainCharacters], "Han Solo"));
console.log("Eliminar 'Rey':", removeItem([...mainCharacters], "Rey"));
console.log("Eliminar 'Obi-Wan':", removeItem([...mainCharacters], "Obi-Wan"));

let star = '<ul class="lista-estilizada">';    // Mostrar pantalla
star += "<li>Índice de 'Leia': " + findArrayIndex(mainCharacters, "Leia") + "</li>";
star += "<li>Índice de 'Rey': " + findArrayIndex(mainCharacters, "Rey") + "</li>";
star += "<li>Índice de 'Obi-Wan': " + findArrayIndex(mainCharacters, "Obi-Wan") + "</li>";
star += "<li>Eliminar 'Han Solo': " + removeItem([...mainCharacters], "Han Solo").join(", ") + "</li>";
star += "<li>Eliminar 'Rey': " + removeItem([...mainCharacters], "Rey").join(", ") + "</li>";
star += "<li>Eliminar 'Obi-Wan': " + removeItem([...mainCharacters], "Obi-Wan").join(", ") + "</li>";
star += "</ul>";

document.getElementById("wars").innerHTML = star;  // Colocar la renderización en el html





console.log("%c===== Ejercicio 41: Tirada de dados =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

function rollDice(caras) {                                            // Funcion con parámetro caras
    return Math.floor(Math.random() * caras) + 1;                     // Devuelve un número aleatorio entre 0 y 1, lo multiplica por el parámetro y le suma 1, porque como redondea el decima hacia abajo, debe recuperar esa probabilidad perdida.
}

console.log("Tirada de dado de 6 caras:", rollDice(6));              // Imprimo consola
console.log("Tirada de dado de 20 caras:", rollDice(20)); 
console.log("Tirada de dado de 10 caras:", rollDice(10));

let dice = '<ul class="lista-estilizada">';
dice += "<li>Dado de 6 caras: <b>" + rollDice(6) + "</b></li>";     // Muestro pantalla
dice += "<li>Dado de 20 caras: <b>" + rollDice(20) + "</b></li>";
dice += "<li>Dado de 10 caras: <b>" + rollDice(10) + "</b></li>";
dice += "</ul>";

document.getElementById("dice").innerHTML = dice;                   // Meto el renderizado en el html





console.log("%c===== Ejercicio 42: Intercambiar posición de elementos =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const fantasticFour = [                      // Defino array
    "La antorcha humana",
    "Mr. Fantástico",
    "La mujer invisible",
    "La cosa",
];

function swap(array, index1, index2) {       // Funcion con 3 parámetros
    const temp = array[index1];              // Variable temporal para el elemento de primera posicion seleccionada
    array[index1] = array[index2];           // Ese elemento se coloca en la segunda posicion seleccionada
    array[index2] = temp;                    // El elemento de la segunda posición seleccionada ahora se coloca en la primera posicion por adoptar el valor de la variable temporal
    return array;                            // Devuelve el array actualizado
}

console.log("Original:", fantasticFour);                     // Imprimo original
console.log("Swap 0 y 3:", swap([...fantasticFour], 0, 3));  // Imprimo con parámetros para posiciones
console.log("Swap 1 y 2:", swap([...fantasticFour], 1, 2));

let fantastic = '<ul class="lista-estilizada">';
fantastic += "<li>Original: " + fantasticFour.join(", ") + "</li>";   // Renderizo
fantastic += "<li>Swap 0 y 3: " + swap([...fantasticFour], 0, 3).join(", ") + "</li>";
fantastic += "<li>Swap 1 y 2: " + swap([...fantasticFour], 1, 2).join(", ") + "</li>";
fantastic += "</ul>";

document.getElementById("fantastic").innerHTML = fantastic;  // Incluyo el renderizado en el html