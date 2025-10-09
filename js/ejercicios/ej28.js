const albums = [
    { title: 'Led Zeppelin IV', genre: 'Rock', duration: 42.19 },
    { title: 'The Dark Side of the Moon', genre: 'Rock', duration: 42.49 },
    { title: 'Back in Black', genre: 'Rock', duration: 42.11 },
    { title: 'Hotel California', genre: 'Rock', duration: 43.08 },
    { title: 'Abbey Road', genre: 'Rock', duration: 47.23 },
    { title: 'Thriller', genre: 'Pop', duration: 42.19 },
    { title: 'A Night at the Opera', genre: 'Rock', duration: 43.08 },
    { title: 'The Wall', genre: 'Rock', duration: 81.00 },
    { title: 'Born to Run', genre: 'Rock', duration: 39.26 },
    { title: 'The Joshua Tree', genre: 'Rock', duration: 50.11 }
];

// Calcular la duración total solo de álbumes de Rock
let totalDuration = 0;

for (let i = 0; i < albums.length; i++) {
    if (albums[i].genre === 'Rock') {
        totalDuration += albums[i].duration;
    }
}

console.log("Duración total de álbumes de Rock:", totalDuration.toFixed(2), "minutos");

// Mostrar en el div
const albumDiv = document.getElementById("album");
albumDiv.innerHTML = `<p><strong>${totalDuration.toFixed(2)}</strong> minutos</p>`;