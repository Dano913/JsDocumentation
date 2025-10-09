const tracksDiv = document.getElementById('tracks');

const tracks = [
    { title: 'Enter Sandman', genre: 'Metal' },
    { title: 'Back in Black', genre: 'Rock' },
    { title: 'Bohemian Rhapsody', genre: 'Rock' },
    { title: 'Blinding Lights', genre: 'Pop' },
    { title: 'Old Town Road', genre: 'Country' },
    { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
    { title: 'Bad Guy', genre: 'Pop' },
    { title: 'Thunderstruck', genre: 'Rock' },
    { title: 'Hotel California', genre: 'Rock' },
    { title: 'Stairway to Heaven', genre: 'Rock' }
];

const tracksByGenre = {};

for (let i = 0; i < tracks.length; i++) {
    const track = tracks[i];
    const genre = track.genre;

    if (!tracksByGenre[genre]) {
        tracksByGenre[genre] = [];
    }

    tracksByGenre[genre].push(track.title);
}

console.log(tracksByGenre);

// 🔹 Crear listas por género dentro del mismo div
for (const genre in tracksByGenre) {
    const genreTitle = document.createElement('h4');
    genreTitle.style.marginTop = "20px";
    genreTitle.textContent = genre;
    tracksDiv.appendChild(genreTitle);

    const trackList = document.createElement('ul');
    trackList.className = 'lista-estilizada';
    tracksByGenre[genre].forEach(title => {
        const li = document.createElement('li');
        li.textContent = title;
        trackList.appendChild(li);
    });

    tracksDiv.appendChild(trackList);
}