const placeToTravel = [
  "Japon",
  "Venecia",
  "Murcia",
  "Santander",
  "Filipinas",
  "Madagascar",
];

function showPlaces(list) {
  const placeDiv = document.getElementById("place");
  const ul = document.createElement("ul");
  ul.className = "lista-estilizada";

  for (let place of list) {
    console.log(place); // 🔹 Muestra por consola
    const li = document.createElement("li");
    li.textContent = place;
    ul.appendChild(li);
  }

  placeDiv.appendChild(ul); // 🔹 Inserta la lista en el div
}

showPlaces(placeToTravel);
