const xMen = [
    { name: 'Wolverine', year: 1974 },
    { name: 'Cyclops', year: 1963 },
    { name: 'Storm', year: 1975 },
    { name: 'Phoenix', year: 1961 },
    { name: 'Beast', year: 1963 },
    { name: 'Gambit', year: 1990 },
    { name: 'Nightcrawler', year: 1975 },
    { name: 'Magneto', year: 1963 },
    { name: 'Professor X', year: 1963 },
    { name: 'Mystique', year: 1978 }
];

function findOldestXMen(xMen) {
    return xMen.reduce((oldest, current) => {
        return current.year < oldest.year ? current : oldest;
    });
}

const oldest = findOldestXMen(xMen);

console.log(`El X-Men más antiguo es ${oldest.name}, que apareció en ${oldest.year}.`);

document.getElementById("men").innerHTML = 
`<p><strong>${oldest.name}</strong> apareció en <strong>${oldest.year}</strong>.</p>`;