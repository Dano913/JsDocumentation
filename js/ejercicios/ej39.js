const users3 = [
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
const soundCounts3 = {};

for (const user3 of users3) {
    for (const sound3 in user3.favoritesSounds) {
        if (soundCounts3[sound3]) {
            soundCounts3[sound3]++;
        } else {
            soundCounts3[sound3] = 1;
        }
    }
}

console.log("Conteo de sonidos favoritos:", soundCounts3);

let sonido = "<ul class='lista-estilizada'>";
for (const sound3 in soundCounts3) {
    sonido += `<li>${sound3}: <b>${soundCounts3[sound3]}</b></li>`;
}
sonido += "</ul>";

document.getElementById("sonido").innerHTML = sonido;