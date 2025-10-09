const popularToys = [];

const toyscount = [
    {id: 101, name: 'Super Soaker', sellCount: 15},
    {id: 102, name: 'Tamagotchi', sellCount: 22},
    {id: 103, name: 'Polly Pocket', sellCount: 8},
    {id: 104, name: 'Yo-yo', sellCount: 33},
    {id: 105, name: 'Pikachu plush toy', sellCount: 19},
    {id: 106, name: "Rubik's Cube", sellCount: 27},
    {id: 107, name: 'Fidget Spinner', sellCount: 12},
    {id: 108, name: 'Slinky', sellCount: 5},
    {id: 109, name: 'Magic 8-Ball', sellCount: 38},
    {id: 110, name: 'Troll Doll', sellCount: 20}
];

// Filtrar juguetes con más de 15 ventas
for (const toy of toyscount) {
    if (toy.sellCount > 15) {
        popularToys.push(toy);
    }
}

console.log(popularToys);

const contenedor = document.getElementById("toyscount");

// Crear la lista UL
const ul2 = document.createElement("ul");
ul2.classList.add("lista-estilizada");

for (const toy of popularToys) {
    const li = document.createElement("li");
    li.textContent = `${toy.name} - Ventas: ${toy.sellCount}`;
    ul2.appendChild(li);
}

// Insertar la lista en el contenedor
contenedor.appendChild(ul2);