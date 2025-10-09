const mixedElements = [
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

function averageWord(list) {
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

const mixed = averageWord(mixedElements);

console.log("El promedio mezclado de la lista es " + mixed);
document.getElementById("mixed").textContent = "El promedio mezclado de la lista es " + mixed;