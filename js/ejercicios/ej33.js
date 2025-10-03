 const capitals = {
    Spain: 'Madrid',
    France: 'Paris',
    Italy: 'Rome',
    Germany: 'Berlin',
    Portugal: 'Lisbon',
    Poland: 'Warsaw',
    Greece: 'Athens',
    Austria: 'Vienna',
    Hungary: 'Budapest',
    Ireland: 'Dublin'
};

function getCapital(country) {
    if (capitals[country]) {
        return {
            text: `La capital de ${country} es ${capitals[country]}.`,
            html: `La capital de ${country} es <strong>${capitals[country]}</strong>.`
        };
    } else {
        return {
            text: `No tengo información sobre la capital de ${country}.`,
            html: `No tengo información sobre la capital de ${country}.`
        };
    }
}

const country = "Greece";
const capital = getCapital(country);

console.log(capital.text);

document.getElementById("capital").innerHTML = capital.html;