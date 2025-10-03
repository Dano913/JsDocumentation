const artists = [
    { name: 'Kurt Cobain', influences: ['The Beatles', 'Pixies', 'Lead Belly'] },
    { name: 'David Bowie', influences: ['Little Richard', 'Chuck Berry', 'The Velvet Underground'] },
    { name: 'Eddie Vedder', influences: ['The Who', 'Neil Young', 'Jim Morrison'] },
    { name: 'Freddie Mercury', influences: ['Liza Minnelli', 'Jimi Hendrix', 'Aretha Franklin'] },
    { name: 'John Lennon', influences: ['Elvis Presley', 'Chuck Berry', 'Buddy Holly'] }
];

const legends = document.getElementById('legends');

// Bucle principal para recorrer artistas
for (let i = 0; i < artists.length; i++) {
    const artist = artists[i];

    // Mostrar nombre del artista en pantalla
    const artistTitle = document.createElement('h3');
    artistTitle.textContent = artist.name;
    legends.appendChild(artistTitle);

    // Lista para influencias
    const ul = document.createElement('ul');
    ul.className = 'lista-estilizada';

    // Bucle interno para recorrer influencias
    for (let j = 0; j < artist.influences.length; j++) {
        const influence = artist.influences[j];
        
        // Imprimir en consola
        console.log(`${artist.name} -> ${influence}`);

        // Imprimir en pantalla
        const li = document.createElement('li');
        li.textContent = `${artist.name} -> ${influence}`;
        ul.appendChild(li);
    }

    legends.appendChild(ul);
}