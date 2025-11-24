console.log(
  "%c===== Ejercicio 10 =====",
  "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;"
);

const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(numberList) {
  if (!numberList.length) return 0; // evita división por cero
  const sum = numberList.reduce((acc, num) => acc + num, 0);
  return sum / numberList.length;
}

const promedio = average(numbers);

console.log(`El promedio de la lista es ${promedio}`);

const promedioDiv = document.getElementById("promedio");
if (promedioDiv) {
  promedioDiv.textContent = `El promedio de la lista es ${promedio}`;
}
