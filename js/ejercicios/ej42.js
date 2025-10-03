const fantasticFour = [
    "La antorcha humana",
    "Mr. Fantástico",
    "La mujer invisible",
    "La cosa",
];

function swap(array, index1, index2) {
const temp = array[index1];
array[index1] = array[index2];
array[index2] = temp;
return array;
}

console.log("Original:", fantasticFour);
console.log("Swap 0 y 3:", swap([...fantasticFour], 0, 3));
console.log("Swap 1 y 2:", swap([...fantasticFour], 1, 2));

let fantastic = '<ul class="lista-estilizada">';
fantastic += "<li>Original: " + fantasticFour.join(", ") + "</li>";
fantastic += "<li>Swap 0 y 3: " + swap([...fantasticFour], 0, 3).join(", ") + "</li>";
fantastic += "<li>Swap 1 y 2: " + swap([...fantasticFour], 1, 2).join(", ") + "</li>";
fantastic += "</ul>";


document.getElementById("fantastic").innerHTML = fantastic;