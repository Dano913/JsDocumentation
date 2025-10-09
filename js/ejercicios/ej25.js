const movies2 = [
    { title: 'The Matrix', releaseYear: 1999 },
    { title: 'Star Wars: Episode IV - A New Hope', releaseYear: 1977 },
    { title: 'Inception', releaseYear: 2010 },
    { title: 'Jurassic Park', releaseYear: 1993 },
    { title: 'The Shawshank Redemption', releaseYear: 1994 },
    { title: 'Pulp Fiction', releaseYear: 1994 },
    { title: 'Avatar', releaseYear: 2009 },
    { title: 'The Dark Knight', releaseYear: 2008 },
    { title: 'Fight Club', releaseYear: 1999 },
    { title: 'Forrest Gump', releaseYear: 1994 }
];

const categories2 = [
    { title: 'Películas antes de los 2000', items: movies2.filter(m => m.releaseYear < 2000) },
    { title: 'Películas después de los 2000', items: movies2.filter(m => m.releaseYear >= 2000) }
];

const container4 = document.getElementById('movies-container2');
if (container4) {
    categories2.forEach(category => {
        const h4 = document.createElement('h4');
        h4.textContent = category.title;
        container4.appendChild(h4);

        const ul = document.createElement('ul');
        ul.classList.add('lista-estilizada');
        container4.appendChild(ul);

        category.items.forEach(movie => {
            const li = document.createElement('li');
            li.textContent = `${movie.title} (${movie.releaseYear})`;
            ul.appendChild(li);
        });
    });
}

categories2.forEach(category => {
    console.log(`\n📂 ${category.title}`);
    category.items.forEach(movie => {
        console.log(` - ${movie.title} (${movie.releaseYear})`);
    });
});
