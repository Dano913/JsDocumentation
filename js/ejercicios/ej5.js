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