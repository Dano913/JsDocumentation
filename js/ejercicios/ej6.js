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
