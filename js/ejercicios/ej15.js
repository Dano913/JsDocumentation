const products = [
  "Camiseta de Metallica",
  "Pantalón vaquero",
  "Gorra de beisbol",
  "Camiseta de Basket",
  "Cinturón de Orión",
  "AC/DC Camiseta",
];

function showCamisetas(list) {
  const camisetas = [];

  for (let product of list) {
    if (product.includes("Camiseta")) {
      console.log(product); // 🔹 Muestra por consola
      camisetas.push(product);
    }
  }

  // 🔹 Muestra en el div con id="camis"
  const camisDiv = document.getElementById("camis");
  camisDiv.innerHTML = camisetas.join("<br>");
}

showCamisetas(products);
