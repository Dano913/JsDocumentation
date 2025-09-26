function greaterNumber(numberOne, numberTwo) {
    const numberDiv = document.getElementById("number");
    if (!numberDiv) return; // Salir si no existe el div

    if (numberOne > numberTwo) {
        console.log(numberOne);
        numberDiv.innerText = "numberOne es mayor que numberTwo";
    } else {
        console.log(numberTwo);
        numberDiv.innerText = "numberTwo es mayor que numberOne";
    }
}

// Ejecutar la función después de que el DOM esté listo
function ejecutarEj7() {
    const numberOne = 4;
    const numberTwo = 17;
    greaterNumber(numberOne, numberTwo);
}

// Para cuando la página se abre directamente
window.addEventListener("DOMContentLoaded", ejecutarEj7);

// Para cuando se carga dinámicamente vía fetch
setTimeout(ejecutarEj7, 50);
