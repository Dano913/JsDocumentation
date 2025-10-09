const songs = [
    { title: 'Bohemian Rhapsody', genre: 'Rock', duration: 5.55 },
    { title: 'Stairway to Heaven', genre: 'Rock', duration: 7.58 },
    { title: 'Billie Jean', genre: 'Pop', duration: 4.54 },
    { title: 'Hotel California', genre: 'Rock', duration: 6.31 },
    { title: 'Sweet Child o Mine', genre: 'Rock', duration: 5.56 },
    { title: 'Smells Like Teen Spirit', genre: 'Rock', duration: 5.01 },
    { title: 'Comfortably Numb', genre: 'Rock', duration: 6.23 },
    { title: 'Wish You Were Here', genre: 'Rock', duration: 5.34 },
    { title: 'Black Dog', genre: 'Rock', duration: 4.54 },
    { title: 'Thunderstruck', genre: 'Rock', duration: 4.52 },
    { title: 'Crazy Love', genre: 'Pop', duration: 3.52 },
];

const rockPlaylist = songs.filter(song => song.genre === "Rock" && song.duration > 5.00);

const contenedor6 = document.getElementById("rock");

// Crear la lista UL con clase
const ul6 = document.createElement("ul");
ul6.classList.add("lista-estilizada");

// Rellenar la lista
rockPlaylist.forEach(song => {
    const li = document.createElement("li");
    li.textContent = `${song.title} - Duration: ${song.duration}`;
    ul6.appendChild(li);
});

// Insertar la lista en el contenedor
contenedor6.appendChild(ul6);