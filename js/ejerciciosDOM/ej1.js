const hidden = document.getElementById('ej1-hidden');
const resultado = document.getElementById('resultado');

// 1.1 Mostrar botón .showme
const boton = hidden.querySelector('.showme');

// 1.2 Mostrar h1 #pillado
const h1 = hidden.querySelector('#pillado');

// 1.3 Todos los <p>
const parrafos = Array.from(hidden.querySelectorAll('p'));

// 1.4 Todos los .pokemon
const pokemons = Array.from(hidden.querySelectorAll('.pokemon'));

// 1.5 Todos los elementos con data-function="testMe"
const personajes = Array.from(hidden.querySelectorAll('[data-function="testMe"]'));

// 1.6 El 3er personaje
const tercerPersonaje = personajes[2];

// Mostrar resultados en #resultado
resultado.innerHTML = `
    <p><strong>Botón:</strong> ${boton.outerHTML}</p>
    <p><strong>H1:</strong> ${h1.outerHTML}</p>
    <p><strong>Párrafos:</strong><br>${parrafos.map(p => p.outerHTML).join('<br>')}</p>
    <p><strong>Pokemons:</strong><br>${pokemons.map(p => p.outerHTML).join('<br>')}</p>
    <p><strong>3er personaje:</strong> ${tercerPersonaje.outerHTML}</p>
`;
