const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5},
    {name: 'Maria Aranda Jimenez', score: 1},
    {name: 'Cristóbal Martínez Lorenzo', score: 6},
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];
const sumNotas = exams.reduce((acc, item) => {
    return acc + item.score;
}, 0);
console.log(sumNotas);

const sumAprobados = exams.reduce((acc,  item) =>{
    if(item.score>=5){
        return acc + item.score
    }
    return acc;
}, 0);
console.log(sumAprobados);

const mediaNotas = exams.reduce((acc, exam) => acc + exam.score, 0) / exams.length;
console.log(mediaNotas);

document.getElementById('resultado6').innerHTML = `
    Suma de todas las notas: ${sumNotas}<br>
    Suma de aprobados: ${sumAprobados}<br>
    Media de las notas: ${mediaNotas.toFixed(2)}
`;