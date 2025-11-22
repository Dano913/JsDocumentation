const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];
const names = users.map(user =>user.name);
console.log(names);

const names2 = users.map(user => {
    if (user.name.startsWith('A')) {
        return 'Anacleto';
    }
    return user.name;
});
console.log(names2);

const cities = [
  {isVisited: true, name: 'Tokyo'},
  {isVisited: false, name: 'Madagascar'},
  {isVisited: true, name: 'Amsterdam'},
  {isVisited: false, name: 'Seul'}
];
const cityNames = cities.map(city =>
  city.isVisited ? `${city.name} (Visitado)` : city.name
);
console.log(cityNames);
const usersText = names2.map((name, index) => `ID: ${users[index].id}, Nombre: ${name}`).join('\n');

// Creamos texto legible de cities
const citiesText = cities.map(city =>
  city.isVisited ? `${city.name} (Visitado)` : city.name
).join('\n');

// Mostramos todo en el div con saltos de línea
const divResultado3 = document.getElementById('resultado3');
divResultado3.style.whiteSpace = 'pre-line';
divResultado3.textContent = `Usuarios:\n${usersText}\n\nCiudades:\n${citiesText}`;