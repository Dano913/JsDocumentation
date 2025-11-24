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
