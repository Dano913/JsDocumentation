document.addEventListener("DOMContentLoaded", () => {
    const outputDiv = document.getElementById("camis");
    if (!outputDiv) return;

    const products = [
        "Camiseta de Metallica",
        "Pantalón vaquero",
        "Gorra de beisbol",
        "Camiseta de Basket",
        "Cinturón de Orión",
        "AC/DC Camiseta",
    ];

    const camisetas = products.filter(product => product.includes("Camiseta"));

    const intro = document.createElement("p");
    intro.textContent = "Las camisetas que hay son:";
    outputDiv.appendChild(intro);

    const ul = document.createElement("ul");
    ul.classList.add("lista-estilizada");

    camisetas.forEach(product => {
        const li = document.createElement("li");
        li.textContent = product;
        ul.appendChild(li);
    });

    outputDiv.appendChild(ul);
});
