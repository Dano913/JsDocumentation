const game = {
    title: 'The Last of Us 2', 
    gender: ['action', 'zombie', 'survival'], 
    year: 2020
}
const { title, gender, year } = game;

console.log(title);
console.log(gender);
console.log(year);

const fruits = ['Banana', 'Strawberry', 'Orange'];
const [fruit1, fruit2, fruit3] = fruits;

console.log(fruit1);
console.log(fruit2);
console.log(fruit3);

const animalFunction = () => {
    return {
        name: 'Bengal Tiger', 
        race: 'Tiger'
    } 
};
const { name: animalName, race: animalRace } = animalFunction();

console.log(animalName); // "Bengal Tiger"
console.log(animalRace); // "Tiger"

const car = {
    name: 'Mazda 6', 
    itv: [2015, 2011, 2020] 
}
const { name: nameCar, itv: itvCar } = car;

console.log(nameCar);
const [primero, segundo, tercero] = itvCar;
console.log(primero);
console.log(segundo);
console.log(tercero);

const resultado = `
--- Game ---
Title: ${game.title}
Gender: ${game.gender.join(', ')}
Year: ${game.year}

--- Fruits ---
1: ${fruits[0]}
2: ${fruits[1]}
3: ${fruits[2]}

--- Animal ---
Name: ${animalFunction().name}
Race: ${animalFunction().race}

--- Car ---
Name: ${car.name}
ITV years: ${car.itv.join(', ')}
`;

// Mostramos en el div con saltos de línea
const divResultado = document.getElementById('resultado');
divResultado.style.whiteSpace = 'pre-line';
divResultado.textContent = resultado;
