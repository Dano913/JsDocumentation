const container = document.getElementById('ej6-hidden');
const select = container.querySelector('#character-list');
const img = container.querySelector('.character-image');

// URL de la API
const apiURL = 'https://thronesapi.com/api/v2/Characters';

// Obtener los personajes desde la API
fetch(apiURL)
  .then(response => response.json())
  .then(characters => {
    // Llenar el select con las opciones
    characters.forEach(character => {
      const option = document.createElement('option');
      option.value = character.imageUrl; // URL de la imagen
      option.textContent = character.fullName; // Nombre completo
      select.appendChild(option);
    });

    // Mostrar la primera imagen por defecto
    if (characters.length > 0) {
      img.src = characters[0].imageUrl;
    }

    // Cambiar imagen al seleccionar otro personaje
    select.addEventListener('change', (event) => {
      img.src = event.target.value;
    });
  })
  .catch(error => console.error('Error al cargar los personajes:', error));
