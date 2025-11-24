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
