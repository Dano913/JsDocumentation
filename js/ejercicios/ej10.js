const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(numberList) {
    let sum = 0;
    for (let i = 0; i < numberList.length; i++) {
        sum += numberList[i];
    }
    return sum / numberList.length;
}

const promedio = average(numbers);

console.log("El promedio de la lista es " + promedio);
document.getElementById("promedio").textContent = "El promedio de la lista es " + promedio;