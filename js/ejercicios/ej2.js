// 1. Luke Skywalker
const jedi = { nombre: "Luke Skywalker", edad: 19 };
document.getElementById("jedi").innerText = `Nombre: ${jedi.nombre}\nEdad: ${jedi.edad}`;
console.log("Jedi inicial:", jedi);

jedi.edad = 25;
document.getElementById("jedi").innerText = `Nombre: ${jedi.nombre}\nEdad: ${jedi.edad}`;
console.log("Jedi actualizado:", jedi);

// 2. Leia Organa
let nombre = "Leia";
let apellido = "Organa";
let edad = 20;
document.getElementById("personaje").innerText =
    "Soy " + nombre + " " + apellido + ", tengo " + edad + " años y soy una princesa de Alderaan.";
console.log(`Personaje: Soy ${nombre} ${apellido}, tengo ${edad} años y soy una princesa de Alderaan.`);

// 3. Sables de luz
const sable1 = { nombre: "Shoto de Yoda", precio: 1500 };
const sable2 = { nombre: "Sable de Darth Vader", precio: 2000 };
const total = sable1.precio + sable2.precio;
document.getElementById("precio").innerText = "El precio total de ambos sables es " + total;
console.log(`Sable1: ${sable1.nombre}, Precio: ${sable1.precio}`);
console.log(`Sable2: ${sable2.nombre}, Precio: ${sable2.precio}`);
console.log(`Precio total: ${total}`);

// 4. Naves
let precioBaseGlobal = 25000;
const nave1 = { nombre: "Ala-X", precioBase: 50000, precioFinal: 50000 + precioBaseGlobal };
const nave2 = { nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 70000 + precioBaseGlobal };

document.getElementById("naves1").innerText =
    "Con la subida del precio Base Global a " + precioBaseGlobal +
    ", el precio final del " + nave1.nombre + " se quedaría en " + nave1.precioFinal +
    " créditos y el del " + nave2.nombre + " en " + nave2.precioFinal + " créditos.";
console.log(`Precio Base Global: ${precioBaseGlobal}`);
console.log(`Nave1: ${nave1.nombre}, Precio Final: ${nave1.precioFinal}`);
console.log(`Nave2: ${nave2.nombre}, Precio Final: ${nave2.precioFinal}`);
