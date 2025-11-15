const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const resultado5 = document.getElementById('resultado5');

const ulRock = document.createElement('ul');
albums.forEach(album => {
  const li = document.createElement('li');
  li.textContent = album;
  ulRock.appendChild(li);
});

resultado5.appendChild(ulRock);
