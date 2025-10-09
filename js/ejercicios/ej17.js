const alien = {
    name: 'Xenomorph',
    species: 'Xenomorph XX121',
    origin: 'Unknown',
    weight: 180
};

let output = '<ul class="lista-estilizada">';

for (let propiedad in alien) {
    console.log(`La propiedad ${propiedad} tiene como valor: ${alien[propiedad]}`);
    output += `<li>La propiedad ${propiedad} tiene como valor: ${alien[propiedad]}</li>`;
}

output += '</ul>';

document.getElementById("alienInfo").innerHTML = output;
