const pointsList = [32, 54, 21, 64, 75, 43];
const copiaPoints = [...pointsList];

console.log(pointsList);
console.log(copiaPoints);

const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const copiaToy = {...toy};
console.log(copiaToy);

const pointsLis2 = [54,87,99,65,32];
const pointLists = [...pointsList, ...pointsLis2];
console.log(pointLists);

const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}
const toys = {...toy, ...toyUpdate};
console.log(toys);

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
const newColors = colors.filter(f => f !== 'azul');
console.log(newColors);

function mostrarObjeto(obj) {
  return Object.entries(obj).map(([key, value]) => `${key}: ${Array.isArray(value) ? value.join(', ') : value}`).join('\n');
}

const resultado2 = `
pointsList: [${pointsList.join(', ')}]
copiaPoints: [${copiaPoints.join(', ')}]

toy:
${mostrarObjeto(toy)}

copiaToy:
${mostrarObjeto(copiaToy)}

pointLists: [${pointLists.join(', ')}]

toys:
${mostrarObjeto(toys)}

newColors: [${newColors.join(', ')}]
`;

// Mostramos en el div
const divResultado2 = document.getElementById('resultado2');
divResultado2.style.whiteSpace = 'pre-line';
divResultado2.textContent = resultado2;