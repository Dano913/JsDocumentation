const users = [
    { name: "Tony", years: 43 },
    { name: "Peter", years: 18 },
    { name: "Natasha", years: 14 },
    { name: "Bruce", years: 32 },
    { name: "Khamala", years: 16 },
];

console.log("Usuarios menores de edad:");
for (const user of users) {
    if (user.years < 18) {
        console.log(user.name);
    }
}

console.log("Usuarios mayores de edad:");
for (const user of users) {
    if (user.years >= 18) {
        console.log(user.name);
    }
}

let menores = "<p>Usuarios menores de edad:</p><ul class='lista-estilizada'>";
for (const user of users) {
    if (user.years < 18) {
        menores += `<li>${user.name}</li>`;
    }
}
menores += "</ul>";

let mayores = "<p>Usuarios mayores de edad:</p><ul class='lista-estilizada'>";
for (const user of users) {
    if (user.years >= 18) {
        mayores += `<li>${user.name}</li>`;
    }
}
mayores += "</ul>";

document.getElementById("edades").innerHTML = mayores + "<br>" + menores;