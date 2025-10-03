const mutants = [
    { name: 'Wolverine', power: 'regeneration' },
    { name: 'Magneto', power: 'magnetism' },
    { name: 'Professor X', power: 'telepathy' },
    { name: 'Jean Grey', power: 'telekinesis' },
    { name: 'Rogue', power: 'power absorption' },
    { name: 'Storm', power: 'weather manipulation' },
    { name: 'Mystique', power: 'shape-shifting' },
    { name: 'Beast', power: 'superhuman strength' },
    { name: 'Colossus', power: 'steel skin' },
    { name: 'Nightcrawler', power: 'teleportation' }
];

function findMutantByPower(mutants, power) {
    const found = mutants.filter(mutant => mutant.power === power);

    let message;
    if (found.length > 0) {
        message = `Mutante(s) con el poder "${power}": ${found.map(m => `<b>${m.name}</b>`).join(', ')}`;

        console.log(`Mutante(s) con el poder "${power}": %c${found.map(m => m.name).join(', ')}`, "font-weight: bold");
    } else {
        message = `No se encontró ningún mutante con el poder "${power}".`;
        console.log(message);
    }

    document.getElementById("mutant").innerHTML = message;
}

findMutantByPower(mutants, "telepathy"); 