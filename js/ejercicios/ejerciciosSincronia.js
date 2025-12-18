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

function mostrarObjeto(obj) {                                         // Defino funcion con parámetro
  return Object.entries(obj)                                          // Convierto objeto en array de pares
    .map(([key, value]) =>                                            // Recorro
      `${key}: ${Array.isArray(value) ? value.join(', ') : value}`    // Formateo
    )
    .join('\n');                                                      // Uno las lineas
}
                                               // Template string
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
const spreadOps = document.getElementById('spreadOps');  // Rescato html
spreadOps.style.whiteSpace = 'pre-line';
spreadOps.textContent = operators;                       // Inserto el template





console.log("%c===== Ejercicio 3: Mapeando Object Destructuring =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const users = [                               // Creo array
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];
const names = users.map(user =>user.name);   // Creo nuevo array mapeando los nombres 
console.log(names);                          // Imprimo

const names2 = users.map(user => {           // Creo nuevo array 
    if (user.name.startsWith('A')) {         // Transformo los nombres
        return 'Anacleto';
    }
    return user.name;
});
console.log(names2);

const cities = [                                   // Creo array
  {isVisited: true, name: 'Tokyo'},
  {isVisited: false, name: 'Madagascar'},
  {isVisited: true, name: 'Amsterdam'},
  {isVisited: false, name: 'Seul'}
];
const cityNames = cities.map(city =>               // Nuevo array, mapeo y modifico
  city.isVisited 
    ? `${city.name} (Visitado)` 
    : city.name
);
console.log(cityNames);

const usersText = names2                           // Mapeo los usuarios
  .map((name, index) => 
    `ID: ${users[index].id}, Nombre: ${name}`)     // Formateo
  .join('\n');                                     // los uno con salto de linea

const citiesText = cities           // Mapeo las ciudades
  .map(city => city.isVisited 
    ? `${city.name} (Visitado)`     // Formateo
    : city.name)
  .join('\n');

// Mostramos todo en el div con saltos de línea
const objDesMap = document.getElementById('objDesMap');                          // Rescato html
objDesMap.style.whiteSpace = 'pre-line';
objDesMap.textContent = `Usuarios:\n${usersText}\n\nCiudades:\n${citiesText}`;   // Inserto constantes formateando





console.log("%c===== Ejercicio 4: Filtracion de arrays de objetos =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];                   // Creo array
const ageMayor = ages
  .filter(age => age > 18);                                          // Creo uno nuevo filtrando
console.log(ageMayor);

const agePar = ages
  .filter(age => age % 2 === 0);                    // Creo otro filtrando por otro patron
console.log(agePar);

const streamers = [                                               // Creo array
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const lolPlayer = streamers                                       // Guardo filtrado en varaible
  .filter(streamer => 
    streamer.gameMorePlayed === 'League of Legends');
console.log(lolPlayer);

const uName = streamers                                           // Guardo otro filtrado en otra variable
  .filter(streamer => 
    streamer.name
      .includes('u'));
console.log(uName);

const legends = streamers
  .filter(streamer => streamer.gameMorePlayed.includes('Legends'))  // Guardo otro filtrado con mapeo en otra variable
  .map(streamer => {
    if (streamer.age > 35) {
      return { ...streamer, gameMorePlayed: streamer.gameMorePlayed.toUpperCase() };  
    }
    return streamer;
  });

console.log(legends);                                                
const objFilter = legends           // Sobre la ultima varaible hago map con join y loguardo en otra variable
  .map(s => `Nombre: ${s.name}, Edad: ${s.age}, Juego: ${s.gameMorePlayed}`)
  .join('\n');

const objFilt = document.getElementById('objFilt');  // Rescato html
objFilt.style.whiteSpace = 'pre-line';
objFilt.textContent = objFilter;                     // Inserto la variable en el html





const streamers2 = [                                                                  // Creo array
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];

const input = document.querySelector('input[data-function="toFilterStreamers"]');     // Rescato html

input.addEventListener('input', (event) => {                                          // Escucho el evento input
  const value = event.target.value.toLowerCase();                                     // Obtengo el texto y lo paso a mayusculas

  const filtered = streamers2.filter(streamer =>                                      // Filtro array
    streamer.name.toLowerCase().includes(value)                                       // Devuelvo el que coincida con el valor del input
  );

  const streamerFilter = filtered                                                     // Mapeo el array filtrado para hacerlo texto legible
    .map(s => `Nombre: ${s.name}, Edad: ${s.age}, Juego: ${s.gameMorePlayed}`)
    .join('\n');

  console.log(
    "%c===== Ejercicio 5: Filtración de array con input =====",
    "color: white; background-color: #085f0c; font-weight: bold; padding: 2px 6px; border-radius: 3px;"
  );

  console.log(streamerFilter);

  const inputFilter = document.getElementById('inputFilter');        // Rescato al html
  inputFilter.style.whiteSpace = 'pre-line';   
  inputFilter.textContent = streamerFilter;                          // Coloco el filtrado
});





console.log("%c===== Ejercicio 6: Función reduce sobre array =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const exams = [                                      // Creo array
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
const sumNotas = exams.reduce((acc, item) => {      // Guardo en variable el resultado de sumar notas con reduce
    return acc + item.score;
}, 0);
console.log(sumNotas);

const sumAprobados = exams          // Guardo en variable el resultado de sumar aprobados con reduce
  .reduce((acc,  item) =>{
    if(item.score>=5){
        return acc + item.score
    }
    return acc;
  }, 0);
console.log(sumAprobados);

const mediaNotas = exams            // Promedio de las notas
  .reduce((acc, exam) => 
    acc + exam.score, 0
  ) / exams.length;
console.log(mediaNotas);
                                                   // Rescato el html y renderio con template literals
document.getElementById('reduce').innerHTML = `
    Suma de todas las notas: ${sumNotas}<br>
    Suma de aprobados: ${sumAprobados}<br>
    Media de las notas: ${mediaNotas.toFixed(2)}
`;





console.log("%c===== Ejercicio 7: Función reduce sobre array complejo =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const videogames = [         // Creo array
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhalla', genders: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The Last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5},
    {name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Legend of Zelda: Breath of the wild', genders: ['RPG'], score: 10},
]
const rpgGames = videogames  // Guardo en variable el array filtrado
  .filter(game => 
    game.genders
      .includes('RPG'));

const mediaRPG = rpgGames   // Guardo en variable la suma de valores de puntuaciones del array filtrado
  .reduce((acc, game) => 
    acc + game.score, 0
  ) / rpgGames.length;

console.log(mediaRPG);

document.getElementById('reduceDestruct').textContent = `Media RPG: ${mediaRPG.toFixed(2)}`; // Renderizo en el html





const container = document.getElementById('apiThrones');    // Rescato htmls                     
const select = container.querySelector('#character-list');                       
const img = container.querySelector('.character-image');                         
const apiURL = 'https://thronesapi.com/api/v2/Characters';  // API                      
 
let personajeSeleccionado = "";                             // Variable para almacenar el personaje seleccionado actualmente             
select.style.marginBottom = '20px';   

fetch(apiURL)                                               // Peticion
  .then(response => response.json())                        // Transformo a JSON
  .then(characters => {                                     // Recibo array de personajes
    characters.forEach(character => {                       // Recorro y por cada uno
      const option = document.createElement('option');      // Creo elemento option para select
      option.value = character.imageUrl;                    // Guardo su imagen como valor del option
      option.textContent = character.fullName;              // Muestro el nombre en el option
      option.dataset.name = character.fullName;             // Guardo el nombre como un data atribute
      select.appendChild(option);                           // Añado la opcion al select
    });

    if (characters.length > 0) {                            // Si se devuelve 1 personaje
      select.selectedIndex = 0;                             // Selecciono para el la primera opcion del select
      img.src = characters[0].imageUrl;                     // Muestrola imagen del primer personaje por defecto
      personajeSeleccionado = characters[0].fullName;       // Guardo el nombre del primer personaje como seleccionado
    }

    const actualizarPersonaje = (selectedOption) => {       // Funcion para actualizarnombre e imagen seleccionados
      img.src = selectedOption.value;                       // Cambio la imagen al seleccionado
      personajeSeleccionado = selectedOption.dataset.name;  // Actualizo nombre 

      console.log(
        "%c===== Ejercicio 8: Select basado en API =====",
        "color: white; background-color: #085f0c; font-weight: bold; padding: 2px 6px; border-radius: 3px;",
        "\nPersonaje seleccionado: " + personajeSeleccionado // Muestro nombre cada vez que cambia la opcion
      );
    };

    actualizarPersonaje(select.selectedOptions[0]);         // LLamo a la funcion para mostrar el personaje por defecto

    select.addEventListener('change', (event) => {          // Esucho evento change del select cuando se elige opcion
      actualizarPersonaje(event.target.selectedOptions[0]); // Actualizo
    });
  })
  .catch(error => console.error('Error al cargar los personajes:', error)); // Capturo error






const container9 = document.getElementById('pokeAPI');    // Rescato htmls
const img9 = container9.querySelector('.random-image');
const nameEl = container9.querySelector('.pokemon-name');
const button9 = container9.querySelector('#new-pokemon');

let pokemonSeleccionado = "";                                  // Variable para almacenar el pokemon seleccionado actualmente     

function loadRandomPokemon() {                                 // Funcion para cargar pokemon aleatorio
  const randomId = Math.floor(Math.random() * 151) + 1;        // Genero ID aleatorio entre 1 y 151
  const url = `https://pokeapi.co/api/v2/pokemon/${randomId}`; // Creo la url con el id dinamico

  fetch(url)                                                   // Llamo a la API
    .then(response => response.json())                         // Transformo a JSON
    .then(pokemon => {                                         // Recibo datos del pokemon
      img9.src = pokemon.sprites.other['official-artwork'].front_default; // Actualizola imagen del pokemon
      img9.alt = pokemon.name;                                 // Asigno atributo alt con elnombre
      img9.style.width = '90%';                     
      nameEl.textContent = pokemon.name;                       // Actualizo el html

      pokemonSeleccionado = pokemon.name;                      // Guardo el nombre en la variable vacia

      console.log(
        "%c===== Ejercicio 9: API con boton aleatorio =====",
        "color: white; background-color: #085f0c; font-weight: bold; padding: 2px 6px; border-radius: 3px;",
        "\nPokémon seleccionado: " + pokemonSeleccionado       // Imprimo el pokemon
      );
    })
    .catch(error => {
      console.error('Error al cargar el Pokémon:', error);     // Capturo error
    });
}

loadRandomPokemon();                                           // LLamo a la funcion para mostrar pokemon inicial

button9.addEventListener('click', loadRandomPokemon);          // Asigno evento click al boton con la funcion para que actualice



