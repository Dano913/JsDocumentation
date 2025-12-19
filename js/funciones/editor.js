/*==================================================================================================================================================
==  HTMLS  ====  ESCUCHA DE CLICKS EN EDITOR ====  ADICION DE SNIPPETS A EDITOR  ====  LOGICA DEL EDITOR  ====  EJECUCION DEL CODIGO INTRODUCIDO  ==
==================================================================================================================================================*/

/*===========
==  HTMLS  ==
===========*/

const customSelect = document.querySelector('.custom-select');              // Rescato html
const selected = customSelect.querySelector('.selected');
const optionsContainer = customSelect.querySelector('.options');
const optionsList = optionsContainer.querySelectorAll('div[data-value]');

/*================================
==  ESCUCHA DE CLICKS EN EDITOR ==
================================*/

selected.addEventListener('click', () => {           // Escucha el evento de click
    customSelect.classList.toggle('open');           //  Abre o cierra el menu desplegable
});

optionsList.forEach(option => {                      // Recorro cada opcion del menu
    option.addEventListener('click', () => {         // Escucha el click
        selected.textContent = option.textContent;   // Cambia el texto del seleccionado por el de la opcion
        customSelect.classList.remove('open');       // Cierra el menu tras elegir
        const snippetType = option.dataset.value;    // Obtiene el valor de  data-value
        insertSnippet(snippetType);                  // Llama a una funcion para insetar snippet segun valor
    });
});

document.addEventListener('click', (e) => {     // Escucha click
    if (!customSelect.contains(e.target)) {     // Si el click es fuera del select
        customSelect.classList.remove('open');  // Se cierra el menu
    }
});

/*==================================
==  ADICION DE SNIPPETS A EDITOR  ==
==================================*/

function insertSnippet(type) {        // Funcion que insetar snippet segun eleccion
    if (!window.CodeEditor || !window.CodeEditor.cmEditor) return; // Si el editor no existe, termina

    let snippet = "";                 // Variable para guardar el snippet elegido

    const snippets = {                                                     // Objeto con todos los snippets disponibles
        forLoop: `for (let i = 0; i < 10; i++) {\n    console.log(i);\n}`, // Snippet de for loop
        whileLoop: `let i = 0;\nwhile (i < 10) {\n    console.log(i);\n    i++;\n}`, // Snippet de while loop
        doWhileLoop: `let i = 0;\ndo {\n    console.log(i);\n    i++;\n} while (i < 10);`, // Snippet de do-while
        forOfLoop: `const arr = [1,2,3];\nfor (const val of arr) {\n    console.log(val);\n}`, // Snippet de for...of
        forInLoop: `const obj = {a:1, b:2};\nfor (const key in obj) {\n    console.log(key, obj[key]);\n}`, // Snippet de for...in

        ifStatement: `if (condition) {\n    // código\n}`,                // Snippet de if
        ifElseStatement: `if (condition) {\n    // código\n} else {\n    // otro código\n}`, // Snippet de if else
        switchStatement: `switch(value) {\n    case 1:\n        // código\n        break;\n    default:\n        // código\n}`, // Snippet de switch

        functionDeclaration: `function myFunction(param) {\n    // código\n}`, // Snippet de función clásica
        arrowFunction: `const myFunction = (param) => {\n    // código\n};`, // Snippet de arrow function

        arrayMap: `const newArray = arr.map(item => item * 2);`,           // Snippet de .map
        arrayFilter: `const filtered = arr.filter(item => item > 10);`,    // Snippet de .filter
        arrayReduce: `const sum = arr.reduce((acc, val) => acc + val, 0);`, // Snippet de .reduce

        objectLiteral: `const obj = { name: 'Luke', age: 19 };`,           // Snippet de objeto literal
        objectDestructuring: `const { name, age } = obj;`,                 // Snippet de destructuring de objeto

        templateStrings: "const greeting = `Hola, ${name}!`;",             // Snippet de template strings
        spreadOperator: "const arr2 = [...arr1, 4,5,6];",                  // Snippet de spread operator
        destructuring: "const { a, b } = obj;",                            // Snippet de destructuring moderno
    };

    snippet = snippets[type];                                              // Selecciona el snippet correspondiente según "type"

    if (snippet) {                                                         // Si existe un snippet para ese tipo
        const cm = window.CodeEditor.cmEditor;                             // Obtiene la instancia de CodeMirror
        const doc = cm.getDoc();                                           // Obtiene el documento interno del editor
        const cursor = doc.getCursor();                                    // Obtiene la posición actual del cursor
        doc.replaceRange(snippet + '\n', cursor);                          // Inserta el snippet en esa posición
        cm.focus();                                                        // Hace foco en el editor después de insertar
    }
}

/*=======================
==  LOGICA DEL EDITOR  ==
=======================*/

window.CodeEditor = {                                 // Objeto global que agrupa toda la lógica del editor
    init: function () {                               // Función que inicializa el editor y todos sus elementos
        this.cmEditor = CodeMirror.fromTextArea(      // Crea una instancia de CodeMirror basada en un <textarea>
            document.getElementById("codeEditor"), {  // Selecciona el textarea con id="codeEditor"
                lineNumbers: true,                    // Activa los números de línea
                mode: "javascript",                   // Modo de sintaxis: JavaScript
                theme: "dracula",                     // Tema visual: dracula
                tabSize: 2,                           // Tamaño de tabulación: 2 espacios 
                indentWithTabs: true,                 // Indentación usando tabs
                lineWrapping: true,                   // Permite que el texto largo pase a la siguiente línea
            }
        );
        this.cmEditor.setSize(null, "100%");                        // Ajusta el tamaño del editor: ancho automático y altura al 100%
        this.output = document.getElementById('output');            // Guarda la referencia al contenedor donde se mostrará la salida del código
        this.runBtn = document.getElementById('runBtn');            // Botón para ejecutar el código
        this.clearBtn = document.getElementById('clearBtn');        // Botón para limpiar la salida
        this.autoRun = document.getElementById('autoRun');          // Checkbox que activa la ejecución automática
        this.executionTime = document.getElementById('executionTime'); // Elemento donde se mostrará el tiempo de ejecución
        this.clearEditorBtn = document.getElementById('clearEditorBtn'); // Botón para limpiar el editor

        if (this.clearEditorBtn) {                                   // Comprueba que el botón de limpiar el editor existe
            this.clearEditorBtn.addEventListener('click', () => {    // Añade evento al hacer clic en el botón
                this.cmEditor.setValue('');                          // Limpia el contenido del editor
                this.clearOutput();                                  // Limpia también el área de salida
            });
        }

        const copyEditorBtn = document.getElementById("copyEditorBtn"); // Referencia al botón de copiar el código del editor
        if (copyEditorBtn) {                                         // Comprueba que el botón exista
            copyEditorBtn.addEventListener("click", () => {          // Añade evento click para copiar
                const code = this.cmEditor.getValue();               // Obtiene el contenido actual del editor
                navigator.clipboard.writeText(code).then(() => {     // Copia el código al portapapeles
                    const original = copyEditorBtn.textContent;      // Guarda el texto original del botón
                    copyEditorBtn.textContent = "Copied!";           // Cambia el texto temporalmente
                    setTimeout(() => copyEditorBtn.textContent = original, 2000); // Lo restaura después de 2 segundos
                });
            });
        }

        this.setupEventListeners();     // Configura los eventos adicionales del editor (Run, Clear, etc.)
    },

    setupEventListeners: function () {                           // Define el método que configura todos los eventos
        this.runBtn.addEventListener('click', () => this.runCode());   // Cuando se hace clic en el botón "run", ejecuta runCode()
        this.clearBtn.addEventListener('click', () => this.clearOutput()); // Cuando se hace clic en "clear", limpia la salida
        this.cmEditor.on("change", () => {                       // Detecta cuando el usuario cambia el contenido del editor
            this.saveToLocalStorage();                           // Guarda el contenido del editor en localStorage

            if (this.autoRun.checked) {                          // Si la opción "autoRun" está activada...
                clearTimeout(this.autoRunTimeout);               // Cancela el temporizador anterior para evitar ejecuciones repetidas

                this.autoRunTimeout = setTimeout(() => {         // Crea un nuevo temporizador para ejecutar el código después de un tiempo
                    this.runCode();                              // Ejecuta runCode() después de 1 segundo sin cambios
                }, 1000);                                        // Espera 1000 ms (1 segundo)
            }
        });

        this.cmEditor.on("keydown", (cm, e) => {                 // Escucha cuando el usuario presiona una tecla dentro del editor
            if ((e.ctrlKey || e.metaKey) && e.key === "Enter") { // Si el usuario presiona Ctrl+Enter o Cmd+Enter...
                e.preventDefault();                               // Evita que el navegador haga su acción por defecto
                this.runCode();                                   // Ejecuta el código inmediatamente
            }
        });
    },


    runCode: function () {                                              // Método que ejecuta el código escrito en el editor
        const code = this.cmEditor.getValue();                           // Obtiene el contenido actual del editor
        this.clearOutput();                                              // Limpia la salida antes de ejecutar

        if (!code.trim()) {                                              // Si el código está vacío o solo espacios...
            this.addOutput('// No hay código para ejecutar', 'log-warn'); // Muestra un mensaje de advertencia en el output
            this.updateExecutionTime(0);                                 // Actualiza el tiempo de ejecución a 0
            return;                                                       // Sale de la función
        }

        const startTime = performance.now();                             // Guarda el tiempo de inicio para calcular duración
        let executionStarted = false;                                    // Variable para saber si ya se ejecutó algo

        const originalLog = console.log;                                 // Guarda la función original console.log
        const originalError = console.error;                             // Guarda console.error original
        const originalWarn = console.warn;                               // Guarda console.warn original
        const self = this;                                               // Guarda el contexto "this" para usar dentro de funciones

        console.log = (...args) => {                                     // Sobrescribe console.log temporalmente
            if (!executionStarted) executionStarted = true;             // Marca que ya comenzó la ejecución
            self.addOutput(args.map(a => this.formatValue(a)).join(' '), 'log-info'); // Muestra los logs en el output del editor
        };
        console.error = (...args) => {                                   // Sobrescribe console.error
            self.addOutput('ERROR: ' + args.join(' '), 'log-error');     // Muestra errores en el output con estilo 'log-error'
        };
        console.warn = (...args) => {                                    // Sobrescribe console.warn
            self.addOutput('WARN: ' + args.join(' '), 'log-warn');       // Muestra advertencias en el output con estilo 'log-warn'
        };

        try {                                                            // Intenta ejecutar el código
            this.updateExecutionTime(null, true);                        // Reinicia el tiempo de ejecución mientras corre
            const result = eval(code);                                   // Ejecuta el código usando eval
            const endTime = performance.now();                            // Obtiene el tiempo final
            const time = Math.round((endTime - startTime) * 100) / 100;  // Calcula el tiempo total de ejecución redondeado

            if (result !== undefined) {                                   // Si la ejecución devuelve algo...
                this.addOutput('← ' + this.formatValue(result), 'log-success'); // Muestra el resultado en el output
            }

            this.updateExecutionTime(time);                                // Actualiza el tiempo total de ejecución
        } catch (error) {                                                // Si ocurre un error al ejecutar...
            const endTime = performance.now();                            // Calcula el tiempo final
            const time = Math.round((endTime - startTime) * 100) / 100;  // Calcula tiempo total
            this.addOutput('ERROR: ' + error.message, 'log-error');       // Muestra el mensaje de error en el output
            this.updateExecutionTime(time);                                // Actualiza el tiempo total de ejecución
        } finally {                                                      // Siempre se ejecuta al final
            console.log = originalLog;                                    // Restaura console.log original
            console.error = originalError;                                // Restaura console.error original
            console.warn = originalWarn;                                  // Restaura console.warn original
        }
    },


    formatValue: function (value) {                                     // Convierte cualquier valor a string para mostrar en el output
        if (value === null) return 'null';                               // Si es null, devuelve "null"
        if (value === undefined) return 'undefined';                     // Si es undefined, devuelve "undefined"
        if (typeof value === 'object') {                                 // Si es un objeto o array...
            try { return JSON.stringify(value, null, 2); }               // Intenta convertirlo a JSON con indentación
            catch { return String(value); }                               // Si falla, lo convierte a string normal
        }
        return String(value);                                             // Para otros tipos (número, boolean, string), convertir a string
    },

    addOutput: function (text, className = 'log-info') {                 // Añade un mensaje al output del editor
        const logEntry = document.createElement('div');                  // Crea un div nuevo
        logEntry.className = `log-entry ${className}`;                    // Le asigna clases para estilos (tipo log-info, log-error, etc.)
        logEntry.textContent = text;                                      // Inserta el texto dentro del div
        this.output.appendChild(logEntry);                                // Lo agrega al contenedor de salida
        this.output.scrollTop = this.output.scrollHeight;                 // Hace scroll hacia abajo automáticamente
    },

    clearOutput: function () {                                           // Limpia todo el output
        this.output.innerHTML = '';                                       // Borra todos los logs
        this.updateExecutionTime(0);                                      // Resetea el tiempo de ejecución a 0
    },

    updateExecutionTime: function (time, isExecuting = false) {          // Actualiza el tiempo de ejecución en la interfaz
        if (isExecuting) {                                                // Si el código se está ejecutando...
            this.executionTime.innerHTML = '⏱️ Ejecutando...';             // Muestra "Ejecutando..."
            return;                                                       // Sale de la función
        }
        this.executionTime.innerHTML = `⏱️ Tiempo: ${time || 0}ms`;       // Si terminó, muestra el tiempo total en ms
    },

    saveToLocalStorage: function () {                                     // Guarda el contenido del editor en localStorage
        try {                                                             
            localStorage.setItem('jsEditor_code', this.cmEditor.getValue()); // Guarda el valor del editor bajo la key 'jsEditor_code'
        } catch (e) {                                                      // Si ocurre un error (p. ej. navegador bloquea storage)
            console.warn('No se pudo guardar en localStorage');           // Muestra advertencia en consola
        }
    }
};

/*======================================
==  EJECUCION DEL CODIGO INTRODUCIDO  ==
======================================*/

document.addEventListener('DOMContentLoaded', () => {           // Espera a que todo el HTML se haya cargado antes de ejecutar el código
    if (window.CodeEditor) {                                    // Comprueba si el objeto global CodeEditor existe
        window.CodeEditor.init();                                // Inicializa el editor llamando a su método init()
        console.log('Editor cargado desde editor.js');          // Muestra un mensaje en la consola confirmando que se cargó
    }
});
