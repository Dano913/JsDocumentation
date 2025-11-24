console.log("%c===== Ejercicio 8 =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");
const avengers = [
    "Hulk",
    "Thor",
    "Iron Man",
    "Captain A.",
    "Spiderman",
    "Captain M.",
];

function findLongestWord(stringList) {
    let longest = stringList[0]; 
    for (let i = 1; i < stringList.length; i++) {
        if (stringList[i].length > longest.length) {
            longest = stringList[i];
        }
    }
    return longest;
}

const longestWord = findLongestWord(avengers);

console.log(findLongestWord(avengers));
document.getElementById("word").textContent = longestWord;