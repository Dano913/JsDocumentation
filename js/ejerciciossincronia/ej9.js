const container9 = document.getElementById('ej9-hidden');
const img9 = container9.querySelector('.random-image');
const nameEl = container9.querySelector('.pokemon-name');
const button9 = container9.querySelector('#new-pokemon');

function loadRandomPokemon() {
  // Generar un número aleatorio entre 1 y 151
  const randomId = Math.floor(Math.random() * 151) + 1;
  const url = `https://pokeapi.co/api/v2/pokemon/${randomId}`;

  fetch(url)
    .then(response => response.json())
    .then(pokemon => {
      // Imagen oficial grande
      img9.src = pokemon.sprites.other['official-artwork'].front_default;
      img9.alt = pokemon.name;
      img9.style.width = '90%';
      // Nombre del Pokémon
      nameEl.textContent = pokemon.name;
    })
    .catch(error => {
      console.error('Error al cargar el Pokémon:', error);
    });
}

// Cargar un Pokémon al entrar en la página
loadRandomPokemon();

// Recargar Pokémon al pulsar el botón
button9.addEventListener('click', loadRandomPokemon);
