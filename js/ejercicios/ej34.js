const movies4 = [
    { title: 'Inception', duration: 148 },
    { title: 'The Dark Knight', duration: 152 },
    { title: 'Interstellar', duration: 169 },
    { title: 'Dunkirk', duration: 106 },
    { title: 'The Prestige', duration: 130 },
    { title: 'Memento', duration: 113 },
    { title: 'Batman Begins', duration: 140 },
    { title: 'The Dark Knight Rises', duration: 164 },
    { title: 'Tenet', duration: 150 },
    { title: 'Insomnia', duration: 118 }
];

function averageMovieDuration(movies) {
    if (movies.length === 0) return 0;

    const total = movies.reduce((sum, movie) => sum + movie.duration, 0);
    
    return total / movies.length;
}

const average2 = averageMovieDuration(movies4);

console.log("El promedio de duración de las películas es:", average2, "minutos");

document.getElementById("average2").innerHTML =
`El promedio de duración de las películas es <strong>${average2} minutos</strong>.`;