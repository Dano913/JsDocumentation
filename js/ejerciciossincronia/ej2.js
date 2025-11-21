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