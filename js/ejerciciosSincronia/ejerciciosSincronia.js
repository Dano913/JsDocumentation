console.log(
  "%c===== Ejercicio 1: Object Destructuring =====",
  "color: white; background-color: #085f0c; font-weight: bold; padding: 2px 6px; border-radius: 3px;"
);

const game = {                            // Creo objeto
    title: 'The Last of Us 2',
    gender: ['action', 'zombie', 'survival'],
    year: 2020
};

const { title, gender, year } = game;     // Object destructuring 

console.log(title);                       // Imprimo
console.log(gender);
console.log(year);

const fruits = ['Banana', 'Strawberry', 'Orange'];  // Creo array
const [fruit1, fruit2, fruit3] = fruits;            // Array destructuring

console.log(fruit1);         // Imprimo
console.log(fruit2);
console.log(fruit3);

const animalFunction = () => {           // Se declara una función arrow
    return {                             // La función devuelve un objeto
        name: 'Bengal Tiger',
        race: 'Tiger'
    };
};

const { name: animalName, race: animalRace } = animalFunction(); 
// Se llama a animalFunction y se desestructura renombrando propiedades
console.log(animalName);     // Imprimo
console.log(animalRace);

const car = {                 // Creo objeto
    name: 'Mazda 6',
    itv: [2015, 2011, 2020]
};

const { name: nameCar, itv: itvCar } = car;   // Object destructuring

console.log(nameCar);                         // Imprimo

const [primero, segundo, tercero] = itvCar;   // Array destructuring

console.log(primero);                         // Imprimo
console.log(segundo);
console.log(tercero);
                                    // Creo el renderizado
const destructurin = `              
--- Game ---
Title: ${game.title}
Gender: ${game.gender.join(', ')}
Year: ${game.year}

--- Fruits ---
1: ${fruits[0]}
2: ${fruits[1]}
3: ${fruits[2]}

--- Animal ---
Name: ${animalFunction().name}
Race: ${animalFunction().race}

--- Car ---
Name: ${car.name}
ITV years: ${car.itv.join(', ')}
`;

const objDes = document.getElementById('objDes');  // Rescato html
objDes.style.whiteSpace = 'pre-line';                 
objDes.textContent = destructurin;                 // Inserto el renderizado





console.log("%c===== Ejercicio 2: Spread Operators =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const pointsList = [32, 54, 21, 64, 75, 43];                                      // Creo array
const copiaPoints = [...pointsList];                                              // Creo copia con spread operators

console.log(pointsList);                                                          // Imprimo
console.log(copiaPoints);

const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};       // Creo objeto
const copiaToy = {...toy};                                                        // Creo copia con spread operators
console.log(copiaToy);
 
const pointsLis2 = [54,87,99,65,32];                                              // Creo array
const pointLists = [...pointsList, ...pointsLis2];                                // Fusiona las copias en un nuevo array
console.log(pointLists);

const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}     // Creo objeto
const toys = {...toy, ...toyUpdate};                                              // Fusiona copias en un nuevo objeto
console.log(toys);

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];                  // Creo array
const newColors = colors.filter(f => f !== 'azul');                               // Nuevo array filtrado
console.log(newColors);

function mostrarObjeto(obj) {
  return Object.entries(obj)
    .map(([key, value]) => 
      `${key}: ${Array.isArray(value) ? value.join(', ') : value}`
    )
    .join('\n');
}

const operators = `
pointsList: [${pointsList.join(', ')}]
copiaPoints: [${copiaPoints.join(', ')}]

toy:
${mostrarObjeto(toy)}

copiaToy:
${mostrarObjeto(copiaToy)}

pointLists: [${pointLists.join(', ')}]

toys:
${mostrarObjeto(toys)}

newColors: [${newColors.join(', ')}]
`;

// Mostramos en el div
const spreadOps = document.getElementById('spreadOps');
spreadOps.style.whiteSpace = 'pre-line';
spreadOps.textContent = operators;





console.log("%c===== Ejercicio 3: Mapeando Object Destructuring =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

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
const objDesMap = document.getElementById('objDesMap');
objDesMap.style.whiteSpace = 'pre-line';
objDesMap.textContent = `Usuarios:\n${usersText}\n\nCiudades:\n${citiesText}`;





console.log("%c===== Ejercicio 4: Filtracion de arrays de objetos =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const ageMayor = ages.filter(age => age > 18);
console.log(ageMayor);

const agePar = ages.filter(age => age % 2 === 0);
console.log(agePar);

const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const lolPlayer = streamers.filter(streamer =>streamer.gameMorePlayed === 'League of Legends');
console.log(lolPlayer);

const uName = streamers.filter(streamer => streamer.name.includes('u'));
console.log(uName);

const legends = streamers
  .filter(streamer => streamer.gameMorePlayed.includes('Legends'))
  .map(streamer => {
    if (streamer.age > 35) {
      return { ...streamer, gameMorePlayed: streamer.gameMorePlayed.toUpperCase() };
    }
    return streamer;
  });

console.log(legends);
const objFilter = legends.map(s => `Nombre: ${s.name}, Edad: ${s.age}, Juego: ${s.gameMorePlayed}`).join('\n');

// Usamos white-space: pre-line para respetar saltos de línea
const objFilt = document.getElementById('objFilt');
objFilt.style.whiteSpace = 'pre-line';
objFilt.textContent = objFilter;





const streamers2 = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];

const input = document.querySelector('input[data-function="toFilterStreamers"]');

input.addEventListener('input', (event) => {
  const value = event.target.value.toLowerCase();

  const filtered = streamers2.filter(streamer =>
    streamer.name.toLowerCase().includes(value)
  );

const streamerFilter = filtered
  .map(s => `Nombre: ${s.name}, Edad: ${s.age}, Juego: ${s.gameMorePlayed}`)
  .join('\n');

// Primero el título con estilos
console.log(
  "%c===== Ejercicio 5: Filtración de array con input =====",
  "color: white; background-color: #085f0c; font-weight: bold; padding: 2px 6px; border-radius: 3px;"
);

// Después los streamers filtrados sin estilos
console.log(streamerFilter);


  // Usamos white-space: pre-line para respetar saltos de línea
  const inputFilter = document.getElementById('inputFilter');
  inputFilter.style.whiteSpace = 'pre-line';
  inputFilter.textContent = streamerFilter;
});





console.log("%c===== Ejercicio 6: Función reduce sobre array =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5},
    {name: 'Maria Aranda Jimenez', score: 1},
    {name: 'Cristóbal Martínez Lorenzo', score: 6},
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];
const sumNotas = exams.reduce((acc, item) => {
    return acc + item.score;
}, 0);
console.log(sumNotas);

const sumAprobados = exams.reduce((acc,  item) =>{
    if(item.score>=5){
        return acc + item.score
    }
    return acc;
}, 0);
console.log(sumAprobados);

const mediaNotas = exams.reduce((acc, exam) => acc + exam.score, 0) / exams.length;
console.log(mediaNotas);

document.getElementById('reduce').innerHTML = `
    Suma de todas las notas: ${sumNotas}<br>
    Suma de aprobados: ${sumAprobados}<br>
    Media de las notas: ${mediaNotas.toFixed(2)}
`;





console.log("%c===== Ejercicio 7: Función reduce sobre array complejo =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const videogames = [
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhalla', genders: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The Last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5},
    {name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Legend of Zelda: Breath of the wild', genders: ['RPG'], score: 10},
]
const rpgGames = videogames.filter(game => game.genders.includes('RPG'));

const mediaRPG = rpgGames.reduce((acc, game) => acc + game.score, 0) / rpgGames.length;

console.log(mediaRPG);

document.getElementById('reduceDestruct').textContent = `Media RPG: ${mediaRPG.toFixed(2)}`;





const container = document.getElementById('apiThrones');
const select = container.querySelector('#character-list');
const img = container.querySelector('.character-image');
const apiURL = 'https://thronesapi.com/api/v2/Characters';

// Variable para guardar el personaje seleccionado
let personajeSeleccionado = "";

// Obtener los personajes desde la API
fetch(apiURL)
  .then(response => response.json())
  .then(characters => {
    characters.forEach(character => {
      const option = document.createElement('option');
      option.value = character.imageUrl;
      option.textContent = character.fullName;
      option.dataset.name = character.fullName;
      select.appendChild(option);
    });

    // Mostrar la primera imagen por defecto y log con título y resultado
    if (characters.length > 0) {
      img.src = characters[0].imageUrl;
      personajeSeleccionado = characters[0].fullName;

      console.log(
        "%c===== Ejercicio 8: Select basado en API =====",
        "color: white; background-color: #085f0c; font-weight: bold; padding: 2px 6px; border-radius: 3px;",
        "\nPersonaje seleccionado: " + personajeSeleccionado
      );
    }

    // Cambiar imagen y mostrar nombre al seleccionar otro personaje
    select.addEventListener('change', (event) => {
      const selectedOption = event.target.selectedOptions[0];
      img.src = selectedOption.value;
      personajeSeleccionado = selectedOption.dataset.name;

      console.log(
        "%c===== Ejercicio 8: Select basado en API =====",
        "color: white; background-color: #085f0c; font-weight: bold; padding: 2px 6px; border-radius: 3px;",
        "\nPersonaje seleccionado: " + personajeSeleccionado
      );
    });
  })
  .catch(error => console.error('Error al cargar los personajes:', error));





const container9 = document.getElementById('pokeAPI');
const img9 = container9.querySelector('.random-image');
const nameEl = container9.querySelector('.pokemon-name');
const button9 = container9.querySelector('#new-pokemon');

// Variable que guarda el Pokémon seleccionado
let pokemonSeleccionado = "";

// Función para cargar un Pokémon aleatorio
function loadRandomPokemon() {
  const randomId = Math.floor(Math.random() * 151) + 1;
  const url = `https://pokeapi.co/api/v2/pokemon/${randomId}`;

  fetch(url)
    .then(response => response.json())
    .then(pokemon => {
      // Actualizamos la imagen y el nombre en la página
      img9.src = pokemon.sprites.other['official-artwork'].front_default;
      img9.alt = pokemon.name;
      img9.style.width = '90%';
      nameEl.textContent = pokemon.name;

      // Guardamos el Pokémon seleccionado
      pokemonSeleccionado = pokemon.name;

      // Imprimir título + resultado en un solo log, resultado sin estilos
      console.log(
        "%c===== Ejercicio 9: API con boton aleatorio =====",
        "color: white; background-color: #085f0c; font-weight: bold; padding: 2px 6px; border-radius: 3px;",
        "\nPokémon seleccionado: " + pokemonSeleccionado
      );
    })
    .catch(error => {
      console.error('Error al cargar el Pokémon:', error);
    });
}

// Cargar Pokémon al iniciar
loadRandomPokemon();

// Recargar Pokémon al pulsar el botón
button9.addEventListener('click', loadRandomPokemon);



