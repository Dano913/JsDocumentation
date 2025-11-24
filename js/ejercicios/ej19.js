const toys = [
    {id: 5, name: 'Transformers'},
    {id: 11, name: 'LEGO'},
    {id: 23, name: 'Hot Wheels'},
    {id: 40, name: 'Rascador de gato'},
    {id: 40, name: 'FurReal Friends gato interactivo'},
    {id: 60, name: 'Nerf Blaster'},
    {id: 71, name: 'Sylvanian Families - Familia gato'}
];

const filteredToys = toys.filter(toy => !toy.name.toLowerCase().includes("gato"));
console.log(filteredToys);

const lista19 = document.getElementById("toys");


// Lista UL con clase lista-estilizada
const ul = document.createElement("ul");
ul.classList.add("lista-estilizada");

for (const toy of filteredToys) {
    const li = document.createElement("li");
    li.textContent = toy.name;
    ul.appendChild(li);
}

// Insertamos la lista en el div
lista19.appendChild(ul);