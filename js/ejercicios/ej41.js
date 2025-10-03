function rollDice(caras) {
    return Math.floor(Math.random() * caras) + 1;
}

console.log("Tirada de dado de 6 caras:", rollDice(6));
console.log("Tirada de dado de 20 caras:", rollDice(20));
console.log("Tirada de dado de 10 caras:", rollDice(10));

let dice = '<ul class="lista-estilizada">';
dice += "<li>Dado de 6 caras: <b>" + rollDice(6) + "</b></li>";
dice += "<li>Dado de 20 caras: <b>" + rollDice(20) + "</b></li>";
dice += "<li>Dado de 10 caras: <b>" + rollDice(10) + "</b></li>";
dice += "</ul>";

document.getElementById("dice").innerHTML = dice;