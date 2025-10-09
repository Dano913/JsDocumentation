const names = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
];

function nameFinder(nameList, value) {
const index = nameList.indexOf(value);
const container = document.getElementById("name");

if (index !== -1) {
        console.log(`Buscando: "${value}" → encontrado en la posición ${index}`);
        container.innerHTML += `<p>Buscando: "${value}" → encontrado en la posición ${index}</p>`;
        return { exists: true, position: index };
    } else {
        console.log(`Buscando: "${value}" → no se encontró en la lista`);
        container.innerHTML += `<p>Buscando: "${value}" → no se encontró en la lista</p>`;
        return { exists: false };
    }
}

nameFinder(names, 'Tony');
nameFinder(names, 'Scott');