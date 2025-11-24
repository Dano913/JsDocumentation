console.log(
  "%c===== Ejercicio 2 =====",
  "color: white; background-color: #085f0c; font-weight: bold; padding: 2px 6px; border-radius: 3px;"
);

const ejercicio2 = {
  jedi: {
    nombre: "Luke Skywalker",
    edadActual: 25,
    frase() {
      return `${this.nombre} tiene actualmente ${this.edadActual} años.`;
    }
  },
  personaje: {
    nombre: "Leia",
    apellido: "Organa",
    edad: 20,
    descripcion() {
      return `Soy ${this.nombre} ${this.apellido}, tengo ${this.edad} años y soy una princesa de Alderaan.`;
    }
  },
  sables: (() => {
    const lista = [
      { nombre: "Shoto de Yoda", precio: 1500 },
      { nombre: "Sable de Darth Vader", precio: 2000 }
    ];
    const total = lista.reduce((acc, s) => acc + s.precio, 0);
    return { lista, total }; // total **dentro** del objeto
  })(),
  naves: {
    precioBaseGlobal: 25000,
    nave1: { nombre: "Ala-X", precioBase: 50000 },
    nave2: { nombre: "Halcón Milenario", precioBase: 70000 },
    calcularPreciosFinales() {
      this.nave1.precioFinal = this.nave1.precioBase + this.precioBaseGlobal;
      this.nave2.precioFinal = this.nave2.precioBase + this.precioBaseGlobal;
    }
  }
};

// Calcular precios finales de las naves
ejercicio2.naves.calcularPreciosFinales();

// Actualizar HTML
document.getElementById("jedi").innerText = ejercicio2.jedi.frase();
document.getElementById("personaje").innerText = ejercicio2.personaje.descripcion();
document.getElementById("precio").innerText = `El precio total de ambos sables es ${ejercicio2.sables.total}`;
document.getElementById("naves1").innerText =
  `Con la subida del precio Base Global a ${ejercicio2.naves.precioBaseGlobal}, ` +
  `el precio final del ${ejercicio2.naves.nave1.nombre} se quedaría en ${ejercicio2.naves.nave1.precioFinal} créditos ` +
  `y el del ${ejercicio2.naves.nave2.nombre} en ${ejercicio2.naves.nave2.precioFinal} créditos.`;

// Consola
console.log("Frase del Jedi:", ejercicio2.jedi.frase());
console.log("Frase de Leia:", ejercicio2.personaje.descripcion());
console.log("Sables:", ejercicio2.sables.lista);
console.log("Total sables:", ejercicio2.sables.total); // total dentro del objeto
console.log("Naves:", ejercicio2.naves);
