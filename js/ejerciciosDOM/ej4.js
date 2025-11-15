// 1.1 Evento click
const btn = document.getElementById("btnToClick");

btn.addEventListener("click", (event) => {
    console.log("Evento CLICK:", event);
});

// 1.2 Evento focus
const inputFocus = document.querySelector(".focus");

inputFocus.addEventListener("focus", (event) => {
    console.log("Valor del input en FOCUS:", event.target.value);
});

// 1.3 Evento input
const inputValue = document.querySelector(".value");

inputValue.addEventListener("input", (event) => {
    console.log("Escribiendo:", event.target.value);
});
