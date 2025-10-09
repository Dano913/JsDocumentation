const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
];

function removeDuplicates(list) {
let unique = [];
let repeated = [];

for (let item of duplicates) {
    if (!unique.includes(item)) {
        unique.push(item);
    } else if (!repeated.includes(item)) {
        repeated.push(item);
    }
}

console.log("Únicos:", unique);
console.log("Repetidos:", repeated);

const div = document.getElementById("dup");
div.innerHTML = `
    <h4>Array sin duplicados:</h4>
    <p>${unique.join(", ")}</p>
    <br>
    <h4>Elementos repetidos:</h4>
    <p>${repeated.map(el => `${el} se repite`).join("<br>")}</p>
`;
}

removeDuplicates(duplicates);