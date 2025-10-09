const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
    { name: "Heura", isVegan: true },
    { name: "Salmon", isVegan: false },
    { name: "Tofu", isVegan: true },
    { name: "Burger", isVegan: false },
    { name: "Rice", isVegan: true },
    { name: "Pasta", isVegan: true },
];

let fruitIndex = 0;

for (let i = 0; i < foodSchedule.length; i++) {
    if (!foodSchedule[i].isVegan) {
        foodSchedule[i].name = fruits[fruitIndex];
        foodSchedule[i].isVegan = true;
        fruitIndex++;
    }
}

console.log(foodSchedule);

const container = document.getElementById("fruit");

const ul3 = document.createElement("ul");
ul3.classList.add("lista-estilizada");
container.appendChild(ul3);

for (let i = 0; i < foodSchedule.length; i++) {
    const item = document.createElement("li");
    item.textContent = foodSchedule[i].name;
    ul3.appendChild(item);
}