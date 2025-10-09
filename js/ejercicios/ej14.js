const words = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code'
];

function repeatCounter(list) {
const counter = {};

for (let word of list) {
    if (counter[word]) {
        counter[word]++;
    } else {
        counter[word] = 1;
    }
}

return counter;

}

console.log(repeatCounter(words));

const repeatResult = repeatCounter(words);

const outputDiv = document.getElementById("counter");

outputDiv.innerHTML = `
<ul class="lista-estilizada">
    ${Object.entries(repeatResult)
    .map(([word, count]) => `<li>${word}: ${count}</li>`)
    .join("")}
</ul>
`;