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

  console.log(filtered);
  const resultado5 = filtered.map(s => `Nombre: ${s.name}, Edad: ${s.age}, Juego: ${s.gameMorePlayed}`).join('\n');

  // Usamos white-space: pre-line para respetar saltos de línea
  const divResultado5 = document.getElementById('resultado5');
  divResultado5.style.whiteSpace = 'pre-line';
  divResultado5.textContent = resultado5;
});
