
    const jedi = { nombre: "Luke Skywalker", edad: 19 };
    document.getElementById("jedi").innerText = `Nombre: ${jedi.nombre}\nEdad: ${jedi.edad}`;

    jedi.edad = 25;
    document.getElementById("jedi").innerText = `Nombre: ${jedi.nombre}\nEdad: ${jedi.edad}`;

    // 2. Leia Organa
    let nombre = "Leia";
    let apellido = "Organa";
    let edad = 20;
    document.getElementById("personaje").innerText =
        "Soy " + nombre + " " + apellido + ", tengo " + edad + " años y soy una princesa de Alderaan.";

    // 3. Sables de luz
    const sable1 = { nombre: "Shoto de Yoda", precio: 1500 };
    const sable2 = { nombre: "Sable de Darth Vader", precio: 2000 };
    const total = sable1.precio + sable2.precio;
    document.getElementById("precio").innerText = "El precio total de ambos sables es " + total;

    // 4. Naves
    let precioBaseGlobal = 25000;
    const nave1 = { nombre: "Ala-X", precioBase: 50000, precioFinal: 50000 + precioBaseGlobal };
    const nave2 = { nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 70000 + precioBaseGlobal };

    document.getElementById("naves1").innerText =
        "Con la subida del precio Base Global a " + precioBaseGlobal +
        ", el precio final del " + nave1.nombre + " se quedaría en " + nave1.precioFinal +
        " créditos y el del " + nave2.nombre + " en " + nave2.precioFinal + " créditos.";
