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