const users2 = [
    {
        name: "Alberto",
        favoritesSounds: {
        waves: { format: "mp3", volume: 50 },
        rain: { format: "ogg", volume: 60 },
        firecamp: { format: "mp3", volume: 80 },
        },
    },
    {
        name: "Antonio",
        favoritesSounds: {
        waves: { format: "mp3", volume: 30 },
        shower: { format: "ogg", volume: 55 },
        train: { format: "mp3", volume: 60 },
        },
    },
    {
        name: "Santiago",
        favoritesSounds: {
        shower: { format: "mp3", volume: 50 },
        train: { format: "ogg", volume: 60 },
        firecamp: { format: "mp3", volume: 80 },
        },
    },
    {
        name: "Laura",
        favoritesSounds: {
        waves: { format: "mp3", volume: 67 },
        wind: { format: "ogg", volume: 35 },
        firecamp: { format: "mp3", volume: 60 },
        },
    },
];

let totalVolume = 0;
let count = 0;

for (const user of users2) {
    for (const sound in user.favoritesSounds) {
        totalVolume += user.favoritesSounds[sound].volume;
        count++;
    }
}

const average3 = totalVolume / count;

console.log("La media de volumen de todos los sonidos favoritos es:", average3);

document.getElementById("sonidos").innerHTML =
"La media de volumen de todos los sonidos favoritos es: <b>" + average3.toFixed(2) + "</b>";