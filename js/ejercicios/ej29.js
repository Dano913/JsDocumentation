const starWarsMovies = [
    { title: 'A New Hope', releaseYear: 1977 },
    { title: 'The Empire Strikes Back', releaseYear: 1980 },
    { title: 'Return of the Jedi', releaseYear: 1983 },
    { title: 'The Phantom Menace', releaseYear: 1999 },
    { title: 'Attack of the Clones', releaseYear: 2002 },
    { title: 'Revenge of the Sith', releaseYear: 2005 },
    { title: 'The Force Awakens', releaseYear: 2015 },
    { title: 'The Last Jedi', releaseYear: 2017 },
    { title: 'The Rise of Skywalker', releaseYear: 2019 },
    { title: 'Rogue One', releaseYear: 2016 },
    { title: 'Solo', releaseYear: 2018 }
];

const moviesByDecade = {};

for (let i = 0; i < starWarsMovies.length; i++) {
    const movie = starWarsMovies[i];
    const decade = Math.floor(movie.releaseYear / 10) * 10;

    if (!moviesByDecade[decade]) {
        moviesByDecade[decade] = [];
    }

    moviesByDecade[decade].push(movie.title);
}

console.log(moviesByDecade);

const starwarsDiv = document.getElementById('starwars');            

// 🔹 Insertar las listas por década
for (const decade in moviesByDecade) {
    const decadeTitle = document.createElement('h4');
    decadeTitle.style.marginTop = "20px";
    decadeTitle.textContent = `${decade}s`;
    starwarsDiv.appendChild(decadeTitle);

    const movieList = document.createElement('ul');
    movieList.className = 'lista-estilizada';
    moviesByDecade[decade].forEach(title => {
        const li = document.createElement('li');
        li.textContent = title;
        movieList.appendChild(li);
    });

    starwarsDiv.appendChild(movieList);
}