const hidden3 = document.getElementById('ej3-hidden');
const resultado3 = document.getElementById('resultado3');

// Clonamos el contenido del hidden para manipularlo
const clone = hidden3.cloneNode(true);
clone.style.display = 'block';
resultado3.appendChild(clone);

// 1.1 Crear lista de países
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ulPais = document.createElement('ul');
countries.forEach(country => {
    const liPais = document.createElement('li');
    liPais.textContent = country;
    ulPais.appendChild(liPais);
});
ulPais.style.paddingLeft = "40px";
ulPais.style.margin = "0px 0px 10px 0px";
clone.appendChild(ulPais);

// 1.2 Eliminar elemento con clase .fn-remove-me
const nodo = clone.querySelector('.fn-remove-me');
if (nodo) {
    const mensaje = document.createElement('p');
    mensaje.textContent = `Elemento "${nodo.textContent}" eliminado`;
    mensaje.style.color = "red";
    nodo.insertAdjacentElement('afterend', mensaje);
    nodo.remove();
}

// 1.3 Crear lista de coches en div[data-function="printHere"]
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const ulPrint = clone.querySelector('div[data-function="printHere"]');
const ulCar = document.createElement('ul');
cars.forEach(car => {
    const liPrint = document.createElement('li');
    liPrint.textContent = car;
    ulCar.appendChild(liPrint);
});
ulCar.style.paddingLeft = "40px";
ulCar.style.margin = "0px 0px 10px 0px";
ulPrint.appendChild(ulCar);

// 1.4 Crear serie de divs con h4 e img
const countries2 = [
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

countries2.forEach(country2 => {
    const divCountry = document.createElement('div');
    divCountry.style.margin = "0px 0px 10px 0px";

    const h4 = document.createElement('h4');
    h4.textContent = country2.title;
    divCountry.appendChild(h4);

    const img = document.createElement('img');
    img.src = country2.imgUrl;
    img.alt = country2.title;
    img.style.width = "90%";
    img.style.maxWidth = "200px";
    divCountry.appendChild(img);

    // ⭐ ----------- 1.6 BOTÓN INDIVIDUAL PARA BORRAR EL DIV -----------
    const btnDelete = document.createElement('button');
    btnDelete.textContent = "Eliminar este div";
    btnDelete.style.display = "block";
    btnDelete.style.marginTop = "5px";

    btnDelete.addEventListener("click", () => {
        divCountry.remove();   // ← elimina solo su div
    });

    divCountry.appendChild(btnDelete);
    // -----------------------------------------------------------------

    clone.appendChild(divCountry);
});

// 1.5 Crear botón para eliminar último div de countries2
const btnEliminarUltimo = document.createElement('button');
btnEliminarUltimo.textContent = "Eliminar último div";
btnEliminarUltimo.style.margin = "10px 0";
clone.appendChild(btnEliminarUltimo);

btnEliminarUltimo.addEventListener('click', () => {
    // Solo eliminamos los divs que contienen h4 e img
    const divs = Array.from(clone.querySelectorAll('div')).filter(d => d.querySelector('h4') && d.querySelector('img'));
    if (divs.length > 0) {
        divs[divs.length - 1].remove();
    }
});
