const characters = [
    { name: 'Luke Skywalker', species: 'Human' },
    { name: 'Darth Vader', species: 'Human' },
    { name: 'Chewbacca', species: 'Wookiee' },
    { name: 'Leia Organa', species: 'Human' },
    { name: 'R2-D2', species: 'Droid' },
    { name: 'C-3PO', species: 'Droid' },
    { name: 'Obi-Wan Kenobi', species: 'Human' },
    { name: 'Yoda', species: 'Unknown' },
    { name: 'Han Solo', species: 'Human' }
];

const humanCharacters = characters.filter(c => c.species === "Human");

console.log("Personajes humanos:");
console.log(humanCharacters);

// contenedor principal
const container3 = document.getElementById("pj-container");

// crear la lista <ul> con clase
const ul4 = document.createElement("ul");
ul4.classList.add("lista-estilizada");
container3.appendChild(ul4);

// agregar los personajes humanos a la lista
humanCharacters.forEach(character => {
    const li = document.createElement("li");
    li.textContent = character.name;
    ul4.appendChild(li);
});