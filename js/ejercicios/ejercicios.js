console.log("%c===== Ejercicio 1 =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");
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





console.log("%c===== Ejercicio 2 =====", "color: white; background-color: #085f0c; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

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





console.log("%c===== Ejercicio 3 =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

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





console.log("%c===== Ejercicio 4 =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

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





console.log("%c===== Ejercicio 5 =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

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





console.log("%c===== Ejercicio 6 =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

console.log("EJERCICIO 6.1");
const ej1 = document.getElementById("ej1");   // Bucle for de 0 a 9
for (let i = 0; i < 10; i++) {
    console.log(i);
    ej1.innerHTML += i + "<br>";
}
console.log("")

console.log("EJERCICIO 6.2");
const ej2 = document.getElementById("ej2");   // Bucle for de 0 a 9, solo números pares
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
        ej2.innerHTML += i + "<br>";
    }
}
console.log("")

console.log("EJERCICIO 6.3");
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





console.log("%c===== Ejercicio 7 =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const numberDiv = document.getElementById("number");  // El div para pantalla

if (numberDiv) {     // Creo la condicion para que determine cual es el mayor
    const numberOne = 4;
    const numberTwo = 17;

    const mensaje = numberOne > numberTwo
        ? "numberOne es mayor que numberTwo"
        : "numberTwo es mayor que numberOne";

    console.log(mensaje);
    numberDiv.innerText = mensaje;
}





console.log("%c===== Ejercicio 8 =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

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
console.log(findLongestWord(avengers));   //Imprimo consola
document.getElementById("word").textContent = longestWord;   // Muestro pantalla





console.log("%c===== Ejercicio 9 =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

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





console.log("%c===== Ejercicio 10 =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

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



console.log("%c===== Ejercicio 11 =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

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





console.log("%c===== Ejercicio 12 =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

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
  "%c===== Ejercicio 13 =====",
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
  "%c===== Ejercicio 14 =====",
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
console.log("Conteo de palabras");    
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
  "%c===== Ejercicio 15 =====",
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

function showCamisetas(list) {
  const camisetas = [];

  for (let product of list) {
    if (product.includes("Camiseta")) {
      console.log(product); // 🔹 Muestra por consola
      camisetas.push(product);
    }
  }

  // 🔹 Muestra en el div con id="camis"
  const camisDiv = document.getElementById("camis");
  camisDiv.innerHTML = camisetas.join("<br>");
}

showCamisetas(products);



console.log(
  "%c===== Ejercicio 16 =====",
  "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;"
);

const placeToTravel = [
  "Japon",
  "Venecia",
  "Murcia",
  "Santander",
  "Filipinas",
  "Madagascar",
];

function showPlaces(list) {
  const placeDiv = document.getElementById("place");
  const ul = document.createElement("ul");
  ul.className = "lista-estilizada";

  for (let place of list) {
    console.log(place); // 🔹 Muestra por consola
    const li = document.createElement("li");
    li.textContent = place;
    ul.appendChild(li);
  }

  placeDiv.appendChild(ul); // 🔹 Inserta la lista en el div
}

showPlaces(placeToTravel);



console.log(
  "%c===== Ejercicio 17 =====",
  "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;"
);

const alien = {
    name: 'Xenomorph',
    species: 'Xenomorph XX121',
    origin: 'Unknown',
    weight: 180
};

let output = '<ul class="lista-estilizada">';

for (let propiedad in alien) {
    console.log(`La propiedad ${propiedad} tiene como valor: ${alien[propiedad]}`);
    output += `<li>La propiedad ${propiedad} tiene como valor: ${alien[propiedad]}</li>`;
}

output += '</ul>';
document.getElementById("alienInfo").innerHTML = output;



console.log("%c===== Ejercicio 18 =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const placesToTravel = [
    { id: 5, name: "Japan" },
    { id: 11, name: "Venecia" },
    { id: 23, name: "Murcia" },
    { id: 40, name: "Santander" },
    { id: 44, name: "Filipinas" },
    { id: 59, name: "Madagascar" },
];

for (let i = 0; i < placesToTravel.length; i++) {
    if (placesToTravel[i].id === 11 || placesToTravel[i].id === 40) {
        placesToTravel.splice(i, 1);
        i--;
    }
}
console.log(placesToTravel);

let output2 = "";
for (let i = 0; i < placesToTravel.length; i++) {
    output2 += `ID: ${placesToTravel[i].id} - Nombre: ${placesToTravel[i].name}<br>`;
}
document.getElementById("places").innerHTML = output2;



console.log("%c===== Ejercicio 19 =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const toys = [
    {id: 5, name: 'Transformers'},
    {id: 11, name: 'LEGO'},
    {id: 23, name: 'Hot Wheels'},
    {id: 40, name: 'Rascador de gato'},
    {id: 40, name: 'FurReal Friends gato interactivo'},
    {id: 60, name: 'Nerf Blaster'},
    {id: 71, name: 'Sylvanian Families - Familia gato'}
];

const filteredToys = toys.filter(toy => !toy.name.toLowerCase().includes("gato"));
console.log(filteredToys);

const ul = document.createElement("ul");
ul.classList.add("lista-estilizada");
for (const toy of filteredToys) {
    const li = document.createElement("li");
    li.textContent = toy.name;
    ul.appendChild(li);
}

const lista19 = document.getElementById("toys");
lista19.appendChild(ul);



console.log("%c===== Ejercicio 20 =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const popularToys = [];
const toyscount = [
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

for (const toy of toyscount) {
    if (toy.sellCount > 15) {
        popularToys.push(toy);
    }
}
console.log(popularToys);

const ul2 = document.createElement("ul");
ul2.classList.add("lista-estilizada");
for (const toy of popularToys) {
    const li = document.createElement("li");
    li.textContent = `${toy.name} - Ventas: ${toy.sellCount}`;
    ul2.appendChild(li);
}

const contenedor = document.getElementById("toyscount");
contenedor.appendChild(ul2);



console.log("%c===== Ejercicio 21 =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const users = [
    { name: "Tony", years: 43 },
    { name: "Peter", years: 18 },
    { name: "Natasha", years: 14 },
    { name: "Bruce", years: 32 },
    { name: "Khamala", years: 16 },
];

console.log("Usuarios menores de edad:");
for (const user of users) {
    if (user.years < 18) {
        console.log(user.name);
    }
}

console.log("Usuarios mayores de edad:");
for (const user of users) {
    if (user.years >= 18) {
        console.log(user.name);
    }
}

let menores = "<p>Usuarios menores de edad:</p><ul class='lista-estilizada'>";
for (const user of users) {
    if (user.years < 18) {
        menores += `<li>${user.name}</li>`;
    }
}
menores += "</ul>";

let mayores = "<p>Usuarios mayores de edad:</p><ul class='lista-estilizada'>";
for (const user of users) {
    if (user.years >= 18) {
        mayores += `<li>${user.name}</li>`;
    }
}
mayores += "</ul>";

document.getElementById("edades").innerHTML = mayores + "<br>" + menores;



console.log("%c===== Ejercicio 22 =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
    { name: "Heura", isVegan: true },
    { name: "Salmon", isVegan: false },
    { name: "Tofu", isVegan: true },
    { name: "Burger", isVegan: false },
    { name: "Rice", isVegan: true },
    { name: "Pasta", isVegan: true },
];

let fruitIndex = 0;
for (let i = 0; i < foodSchedule.length; i++) {
    if (!foodSchedule[i].isVegan) {
        foodSchedule[i].name = fruits[fruitIndex];
        foodSchedule[i].isVegan = true;
        fruitIndex++;
    }
}
console.log(foodSchedule);

const container = document.getElementById("fruit");
const ul3 = document.createElement("ul");
ul3.classList.add("lista-estilizada");
container.appendChild(ul3);
for (let i = 0; i < foodSchedule.length; i++) {
    const item = document.createElement("li");
    item.textContent = foodSchedule[i].name;
    ul3.appendChild(item);
}



console.log("%c===== Ejercicio 23 =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const movies = [
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

const smallMovies = [];
const mediumMovies = [];
const largeMovies = [];
for (let movie of movies) {
    if (movie.durationInMinutes < 100) {
        smallMovies.push(movie);
    } else if (movie.durationInMinutes <= 200) {
        mediumMovies.push(movie);
    } else {
        largeMovies.push(movie);
    }
}

const categories = [
    { title: "Películas pequeñas", list: smallMovies },
    { title: "Películas medianas", list: mediumMovies },
    { title: "Películas grandes", list: largeMovies },
];

const container2 = document.getElementById("container2");
categories.forEach(category => {
    const h4 = document.createElement("h4");
    h4.textContent = category.title;
    container2.appendChild(h4);

    const ul = document.createElement("ul");
    ul.classList.add("lista-estilizada");
    container2.appendChild(ul);

    category.list.forEach(movie => {
        const li = document.createElement("li");
        li.textContent = movie.name;
        ul.appendChild(li);
    });

    container2.appendChild;
});



console.log("%c===== Ejercicio 24 =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const characters = [
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

const humanCharacters = characters.filter(c => c.species === "Human");
console.log("Personajes humanos:");
console.log(humanCharacters);

const container3 = document.getElementById("pj-container");
container3.appendChild(ul4);

const ul4 = document.createElement("ul");
ul4.classList.add("lista-estilizada");
humanCharacters.forEach(character => {
    const li = document.createElement("li");
    li.textContent = character.name;
    ul4.appendChild(li);
});



console.log("%c===== Ejercicio 25 =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const movies2 = [
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
const categories2 = [
    { title: 'Películas antes de los 2000', items: movies2.filter(m => m.releaseYear < 2000) },
    { title: 'Películas después de los 2000', items: movies2.filter(m => m.releaseYear >= 2000) }
];

const container4 = document.getElementById('movies-container2');
if (container4) {
    categories2.forEach(category => {
        const h4 = document.createElement('h4');
        h4.textContent = category.title;
        container4.appendChild(h4);

        const ul = document.createElement('ul');
        ul.classList.add('lista-estilizada');
        container4.appendChild(ul);

        category.items.forEach(movie => {
            const li = document.createElement('li');
            li.textContent = `${movie.title} (${movie.releaseYear})`;
            ul.appendChild(li);
        });
    });
}

categories2.forEach(category => {
    console.log(`\n📂 ${category.title}`);
    category.items.forEach(movie => {
        console.log(` - ${movie.title} (${movie.releaseYear})`);
    });
});



console.log("%c===== Ejercicio 26 =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const songs = [
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

const rockPlaylist = songs.filter(song => song.genre === "Rock" && song.duration > 5.00);
const contenedor6 = document.getElementById("rock");
const ul6 = document.createElement("ul");
ul6.classList.add("lista-estilizada");
rockPlaylist.forEach(song => {
    const li = document.createElement("li");
    li.textContent = `${song.title} - Duration: ${song.duration}`;
    ul6.appendChild(li);
});
contenedor6.appendChild(ul6);



console.log("%c===== Ejercicio 27 =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const cartoons = [
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

let oldestCartoon = cartoons[0];
for (const cartoon of cartoons) {
    if (cartoon.debut < oldestCartoon.debut) {
        oldestCartoon = cartoon;
    }
}
console.log("La serie de dibujos animados más antigua es:", oldestCartoon.name);

const contenedor3 = document.getElementById("cartoon");
contenedor3.innerHTML = `<p>${oldestCartoon.name} (${oldestCartoon.debut})</p>`;



console.log("%c===== Ejercicio 28 =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const albums = [
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

let totalDuration = 0;
for (let i = 0; i < albums.length; i++) {
    if (albums[i].genre === 'Rock') {
        totalDuration += albums[i].duration;
    }
}
console.log("Duración total de álbumes de Rock:", totalDuration.toFixed(2), "minutos");

const albumDiv = document.getElementById("album");
albumDiv.innerHTML = `<p><strong>${totalDuration.toFixed(2)}</strong> minutos</p>`;



console.log("%c===== Ejercicio 29 =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const starWarsMovies = [
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

const moviesByDecade = {};
for (let i = 0; i < starWarsMovies.length; i++) {
    const movie = starWarsMovies[i];
    const decade = Math.floor(movie.releaseYear / 10) * 10;

    if (!moviesByDecade[decade]) {
        moviesByDecade[decade] = [];
    }

    moviesByDecade[decade].push(movie.title);
}
console.log(moviesByDecade);

const starwarsDiv = document.getElementById('starwars');            
for (const decade in moviesByDecade) {
    const decadeTitle = document.createElement('h4');
    decadeTitle.style.marginTop = "20px";
    decadeTitle.textContent = `${decade}s`;
    starwarsDiv.appendChild(decadeTitle);

    const movieList = document.createElement('ul');
    movieList.className = 'lista-estilizada';
    moviesByDecade[decade].forEach(title => {
        const li = document.createElement('li');
        li.textContent = title;
        movieList.appendChild(li);
    });

    starwarsDiv.appendChild(movieList);
}



console.log("%c===== Ejercicio 30 =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const tracksDiv = document.getElementById('tracks');
const tracks = [
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

const tracksByGenre = {};
for (let i = 0; i < tracks.length; i++) {
    const track = tracks[i];
    const genre = track.genre;

    if (!tracksByGenre[genre]) {
        tracksByGenre[genre] = [];
    }

    tracksByGenre[genre].push(track.title);
}
console.log(tracksByGenre);

for (const genre in tracksByGenre) {
    const genreTitle = document.createElement('h4');
    genreTitle.style.marginTop = "20px";
    genreTitle.textContent = genre;
    tracksDiv.appendChild(genreTitle);

    const trackList = document.createElement('ul');
    trackList.className = 'lista-estilizada';
    tracksByGenre[genre].forEach(title => {
        const li = document.createElement('li');
        li.textContent = title;
        trackList.appendChild(li);
    });

    tracksDiv.appendChild(trackList);
}



console.log("%c===== Ejercicio 31 =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const artists = [
    { name: 'Kurt Cobain', influences: ['The Beatles', 'Pixies', 'Lead Belly'] },
    { name: 'David Bowie', influences: ['Little Richard', 'Chuck Berry', 'The Velvet Underground'] },
    { name: 'Eddie Vedder', influences: ['The Who', 'Neil Young', 'Jim Morrison'] },
    { name: 'Freddie Mercury', influences: ['Liza Minnelli', 'Jimi Hendrix', 'Aretha Franklin'] },
    { name: 'John Lennon', influences: ['Elvis Presley', 'Chuck Berry', 'Buddy Holly'] }
];

const legends = document.getElementById('legends');
for (const { name, influences } of artists) {

  const artistTitle = document.createElement('h4');
  artistTitle.textContent = name;
  legends.appendChild(artistTitle);

  const ul = document.createElement('ul');
  ul.className = 'lista-estilizada';

  for (const influence of influences) {
    console.log(`${name} -> ${influence}`);
    const li = document.createElement('li');
    li.textContent = `${name} -> ${influence}`;
    ul.appendChild(li);
  }
  legends.appendChild(ul);
}



console.log("%c===== Ejercicio 32 =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const xMen = [
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

function findOldestXMen(xMen) {
    return xMen.reduce((oldest, current) => {
        return current.year < oldest.year ? current : oldest;
    });
}
const oldest = findOldestXMen(xMen);
console.log(`El X-Men más antiguo es ${oldest.name}, que apareció en ${oldest.year}.`);

document.getElementById("men").innerHTML = `<p><strong>${oldest.name}</strong> apareció en <strong>${oldest.year}</strong>.</p>`;



console.log("%c===== Ejercicio 33 =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

 const capitals = {
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

function getCapital(country) {
    if (capitals[country]) {
        return {
            text: `La capital de ${country} es ${capitals[country]}.`,
            html: `La capital de ${country} es <strong>${capitals[country]}</strong>.`
        };
    } else {
        return {
            text: `No tengo información sobre la capital de ${country}.`,
            html: `No tengo información sobre la capital de ${country}.`
        };
    }
}
const country = "Greece";
const capital = getCapital(country);
console.log(capital.text);

document.getElementById("capital").innerHTML = capital.html;



console.log("%c===== Ejercicio 34 =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const movies4 = [
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

function averageMovieDuration(movies) {
    if (movies.length === 0) return 0;

    const total = movies.reduce((sum, movie) => sum + movie.duration, 0);
    
    return total / movies.length;
}
const average2 = averageMovieDuration(movies4);
console.log("El promedio de duración de las películas es:", average2, "minutos");

document.getElementById("average2").innerHTML =`<strong>${average2}</strong> minutos.`;



console.log("%c===== Ejercicio 35 =====","color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const mutants = [
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

function findMutantByPower(mutants, power) {
    const found = mutants.filter(mutant => mutant.power === power);
    let message;
    if (found.length > 0) {
        message = `Mutante(s) con el poder "${power}": ${found.map(m => `<b>${m.name}</b>`).join(', ')}`;
        console.log(`Mutante(s) con el poder "${power}": %c${found.map(m => m.name).join(', ')}`, "font-weight: bold");
    } else {
        message = `No se encontró ningún mutante con el poder "${power}".`;
        console.log(message);
    }
    document.getElementById("mutant").innerHTML = message;
}
findMutantByPower(mutants, "telepathy");



console.log("%c===== Ejercicio 36 =====","color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const actors = [
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

function calculateActorsAges(actors) {
    const currentYear = new Date().getFullYear();
    return actors.map(actor => {
        const age = currentYear - actor.born;
        return { name: actor.name, age: age };
    });
}
const result5 = calculateActorsAges(actors);
console.log(result5);

document.getElementById("actors").innerHTML = `
  <ul class="lista-estilizada">
    ${result5
      .map(actor => `<li>${actor.name} tiene ${actor.age} años</li>`)
      .join('')}
  </ul>
`;



console.log("%c===== Ejercicio 37 =====","color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const movies5 = [
    {title: "Bracula: Condemor II", duration: 192, categories: ["comedia", "aventura"],},
    {title: "Spider-Man: No Way Home", duration: 122, categories: ["aventura", "acción"],},
    {title: "The Voices", duration: 223, categories: ["comedia", "thriller"],},
    {title: "Shrek", duration: 111, categories: ["comedia", "aventura", "animación"],},
];

const categorias = [];
for (const movie of movies5) {
    for (const category of movie.categories) {
        if (!categorias.includes(category)) {
        categorias.push(category);
        }
    }
}
console.log(categorias);

document.getElementById("cate").textContent = categorias.join(", ");



console.log("%c===== Ejercicio 38 =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const users2 = [
    {name: "Alberto", favoritesSounds: {waves: { format: "mp3", volume: 50 }, rain: { format: "ogg", volume: 60 }, firecamp: { format: "mp3", volume: 80 },},},
    {name: "Antonio", favoritesSounds: {waves: { format: "mp3", volume: 30 }, shower: { format: "ogg", volume: 55 }, train: { format: "mp3", volume: 60 },},},
    {name: "Santiago", favoritesSounds: {shower: { format: "mp3", volume: 50 }, train: { format: "ogg", volume: 60 }, firecamp: { format: "mp3", volume: 80 },},},
    {name: "Laura", favoritesSounds: {waves: { format: "mp3", volume: 67 }, wind: { format: "ogg", volume: 35 }, firecamp: { format: "mp3", volume: 60 },},},
];

let totalVolume = 0;
let count = 0;
for (const user of users2) {
    for (const sound of Object.values(user.favoritesSounds)) {
        totalVolume += sound.volume;
        totalSounds++;
    }
}
const average3 = totalVolume / count;
console.log("La media de volumen de todos los sonidos favoritos es:", average3);

document.getElementById("sonidos").textContent = average3.toFixed(2);



console.log("%c===== Ejercicio 39 =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const users3 = [
    {name: "Alberto", favoritesSounds: {waves: { format: "mp3", volume: 50 }, rain: { format: "ogg", volume: 60 }, firecamp: { format: "mp3", volume: 80 },},},
    {name: "Antonio", favoritesSounds: {waves: { format: "mp3", volume: 30 }, shower: { format: "ogg", volume: 55 }, train: { format: "mp3", volume: 60 },},},
    {name: "Santiago", favoritesSounds: {shower: { format: "mp3", volume: 50 }, train: { format: "ogg", volume: 60 }, firecamp: { format: "mp3", volume: 80 },},},
    {name: "Laura", favoritesSounds: {waves: { format: "mp3", volume: 67 }, wind: { format: "ogg", volume: 35 }, firecamp: { format: "mp3", volume: 60 },},},
];

const soundCounts3 = {};
for (const user3 of users3) {
    for (const sound3 in user3.favoritesSounds) {
        if (soundCounts3[sound3]) {
            soundCounts3[sound3]++;
        } else {
            soundCounts3[sound3] = 1;
        }
    }
}
console.log("Conteo de sonidos favoritos:", soundCounts3);

let sonido = "<ul class='lista-estilizada'>";
for (const sound3 in soundCounts3) {
    sonido += `<li>${sound3}: <b>${soundCounts3[sound3]}</b></li>`;
}
sonido += "</ul>";

document.getElementById("sonido").innerHTML = sonido;



console.log("%c===== Ejercicio 40 =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

function findArrayIndex(array, text) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === text) {
            return i;
        }
    }
    return -1;
}

function removeItem(array, text) {
    const index = findArrayIndex(array, text);
    if (index !== -1) {
        array.splice(index, 1);
    }
    return array;
}

const mainCharacters = [
"Luke",
"Leia",
"Han Solo",
"Chewbacca",
"Rey",
"Anakin",
"Obi-Wan",
];

console.log("Índice de 'Leia':", findArrayIndex(mainCharacters, "Leia"));
console.log("Índice de 'Rey':", findArrayIndex(mainCharacters, "Rey"));
console.log("Índice de 'Yoda':", findArrayIndex(mainCharacters, "Yoda"));

console.log("Eliminar 'Han Solo':", removeItem([...mainCharacters], "Han Solo"));
console.log("Eliminar 'Rey':", removeItem([...mainCharacters], "Rey"));
console.log("Eliminar 'Yoda':", removeItem([...mainCharacters], "Yoda"));

let star = '<ul class="lista-estilizada">';
star += "<li>Índice de 'Leia': " + findArrayIndex(mainCharacters, "Leia") + "</li>";
star += "<li>Índice de 'Rey': " + findArrayIndex(mainCharacters, "Rey") + "</li>";
star += "<li>Índice de 'Yoda' (no existe): " + findArrayIndex(mainCharacters, "Yoda") + "</li>";
star += "<li>Eliminar 'Han Solo': " + removeItem([...mainCharacters], "Han Solo").join(", ") + "</li>";
star += "<li>Eliminar 'Rey': " + removeItem([...mainCharacters], "Rey").join(", ") + "</li>";
star += "<li>Eliminar 'Yoda' (no existe): " + removeItem([...mainCharacters], "Yoda").join(", ") + "</li>";
star += "</ul>";

document.getElementById("wars").innerHTML = star;



console.log("%c===== Ejercicio 41 =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

function rollDice(caras) {
    return Math.floor(Math.random() * caras) + 1;
}

console.log("Tirada de dado de 6 caras:", rollDice(6));
console.log("Tirada de dado de 20 caras:", rollDice(20));
console.log("Tirada de dado de 10 caras:", rollDice(10));

let dice = '<ul class="lista-estilizada">';
dice += "<li>Dado de 6 caras: <b>" + rollDice(6) + "</b></li>";
dice += "<li>Dado de 20 caras: <b>" + rollDice(20) + "</b></li>";
dice += "<li>Dado de 10 caras: <b>" + rollDice(10) + "</b></li>";
dice += "</ul>";

document.getElementById("dice").innerHTML = dice;



console.log("%c===== Ejercicio 42 =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const fantasticFour = [
    "La antorcha humana",
    "Mr. Fantástico",
    "La mujer invisible",
    "La cosa",
];

function swap(array, index1, index2) {
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
    return array;
}

console.log("Original:", fantasticFour);
console.log("Swap 0 y 3:", swap([...fantasticFour], 0, 3));
console.log("Swap 1 y 2:", swap([...fantasticFour], 1, 2));

let fantastic = '<ul class="lista-estilizada">';
fantastic += "<li>Original: " + fantasticFour.join(", ") + "</li>";
fantastic += "<li>Swap 0 y 3: " + swap([...fantasticFour], 0, 3).join(", ") + "</li>";
fantastic += "<li>Swap 1 y 2: " + swap([...fantasticFour], 1, 2).join(", ") + "</li>";
fantastic += "</ul>";

document.getElementById("fantastic").innerHTML = fantastic;