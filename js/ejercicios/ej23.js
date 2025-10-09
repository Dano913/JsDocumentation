const movies = [
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Christmas", durationInMinutes: 225 },
    { name: "Inception", durationInMinutes: 165 },
    { name: "The Lord of the Rings", durationInMinutes: 967 },
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },
    { name: "Terminator", durationInMinutes: 140 },
    { name: "Spirited Away", durationInMinutes: 80 },
    { name: "The Matrix", durationInMinutes: 136 },
    { name: "Amélie", durationInMinutes: 110 },
    { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
];

const smallMovies = [];
const mediumMovies = [];
const largeMovies = [];

for (let movie of movies) {
    if (movie.durationInMinutes < 100) {
        smallMovies.push(movie);
    } else if (movie.durationInMinutes <= 200) {
        mediumMovies.push(movie);
    } else {
        largeMovies.push(movie);
    }
}

const categories = [
    { title: "Películas pequeñas", list: smallMovies },
    { title: "Películas medianas", list: mediumMovies },
    { title: "Películas grandes", list: largeMovies },
];

const container2 = document.getElementById("container2");

categories.forEach(category => {
    // Crear el título <h4>
    const h4 = document.createElement("h4");
    h4.textContent = category.title;
    container2.appendChild(h4);

    // Crear la lista <ul> con clase
    const ul = document.createElement("ul");
    ul.classList.add("lista-estilizada");
    container2.appendChild(ul);

    // Agregar los elementos <li>
    category.list.forEach(movie => {
        const li = document.createElement("li");
        li.textContent = movie.name;
        ul.appendChild(li);
    });

    // Espacio entre categorías
    container2.appendChild;
});