const hidden2 = document.getElementById('ej2-hidden');
const resultado2 = document.getElementById('resultado2');

const div = document.createElement('div');
div.textContent = "Nuevo div añadido dinámicamente";
div.style.margin = "0px 0px 10px 0px"; 
hidden2.appendChild(div);

const p1 = document.createElement('p');
p1.textContent = "Este párrafo está dentro del div";
const divconP = document.createElement('div');
divconP.style.margin = "0px 0px 10px 0px";
divconP.appendChild(p1);
hidden2.appendChild(divconP);

const divcon6P = document.createElement('div');
divcon6P.style.margin = "0px 0px 10px 0px";
for (let i=1; i <= 6; i++){
    const ploop = document.createElement('p');
    ploop.textContent = `Párrafo dinámico ${i}`;
    divcon6P.appendChild(ploop);
}
hidden2.appendChild(divcon6P);


const pdinamico = document.createElement('p');
pdinamico.textContent = `Soy dinámico!`;
pdinamico.style.margin = "0px 0px 10px 0px";
hidden2.appendChild(pdinamico);

const h2 = hidden2.querySelector('.fn-insert-here');
h2.textContent = `Wubba Lubba dub dub`;

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement('ul');
apps.forEach(app => {
    const li = document.createElement('li');
    ul.style.paddingLeft = "40px";
    li.textContent = app;
    ul.appendChild(li);
})
ul.style.margin = "0px 0px 10px 0px";
hidden2.appendChild(ul);

const nodos = hidden2.querySelectorAll('.fn-remove-me');
nodos.forEach(nodo => {
    const mensaje = document.createElement('p');
    mensaje.textContent = `Elemento "${nodo.textContent}" eliminado`;
    mensaje.style.color = "red";

    nodo.insertAdjacentElement('afterend', mensaje);
    nodo.remove();
});

const vaciodiv1 = hidden2.querySelector('div:nth-of-type(1)');
vaciodiv1.textContent = "Div vacío";
vaciodiv1.style.margin = "0px 0px 10px 0px";
const vaciodiv2 = hidden2.querySelector('div:nth-of-type(2)');
vaciodiv2.textContent = "Div vacío";
vaciodiv2.style.margin = "0px 0px 10px 0px";
vaciodiv2.style.width = "95%";
const pMedio = document.createElement('p');
pMedio.textContent = '¡Voy en medio!';
vaciodiv1.parentNode.insertBefore(pMedio, vaciodiv2);

const divInsert = hidden2.querySelectorAll('div.fn-insert-here');

divInsert.forEach(div => {
    div.textContent = "Voy dentro!";
    div.style.margin = "0px 0px 10px 0px";
});

resultado2.innerHTML = hidden2.innerHTML;