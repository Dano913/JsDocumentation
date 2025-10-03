function findArrayIndex(array, text) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === text) {
            return i;
        }
    }
    return -1;
}

function removeItem(array, text) {
    const index = findArrayIndex(array, text);
    if (index !== -1) {
        array.splice(index, 1);
    }
    return array;
}

const mainCharacters = [
"Luke",
"Leia",
"Han Solo",
"Chewbacca",
"Rey",
"Anakin",
"Obi-Wan",
];

console.log("Índice de 'Leia':", findArrayIndex(mainCharacters, "Leia"));
console.log("Índice de 'Rey':", findArrayIndex(mainCharacters, "Rey"));
console.log("Índice de 'Yoda':", findArrayIndex(mainCharacters, "Yoda"));

console.log("Eliminar 'Han Solo':", removeItem([...mainCharacters], "Han Solo"));
console.log("Eliminar 'Rey':", removeItem([...mainCharacters], "Rey"));
console.log("Eliminar 'Yoda':", removeItem([...mainCharacters], "Yoda"));

let star = '<ul class="lista-estilizada">';
star += "<li>Índice de 'Leia': " + findArrayIndex(mainCharacters, "Leia") + "</li>";
star += "<li>Índice de 'Rey': " + findArrayIndex(mainCharacters, "Rey") + "</li>";
star += "<li>Índice de 'Yoda' (no existe): " + findArrayIndex(mainCharacters, "Yoda") + "</li>";
star += "<li>Eliminar 'Han Solo': " + removeItem([...mainCharacters], "Han Solo").join(", ") + "</li>";
star += "<li>Eliminar 'Rey': " + removeItem([...mainCharacters], "Rey").join(", ") + "</li>";
star += "<li>Eliminar 'Yoda' (no existe): " + removeItem([...mainCharacters], "Yoda").join(", ") + "</li>";
star += "</ul>";


document.getElementById("wars").innerHTML = star;