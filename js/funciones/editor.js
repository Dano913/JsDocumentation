const customSelect = document.querySelector('.custom-select');              // Rescato html
const selected = customSelect.querySelector('.selected');
const optionsContainer = customSelect.querySelector('.options');
const optionsList = optionsContainer.querySelectorAll('div[data-value]');

selected.addEventListener('click', () => {                                  // Escucha el evento de click
    customSelect.classList.toggle('open');                                  //
});

optionsList.forEach(option => {
    option.addEventListener('click', () => {
        selected.textContent = option.textContent;
        customSelect.classList.remove('open');
        const snippetType = option.dataset.value;
        insertSnippet(snippetType);
    });
});

document.addEventListener('click', (e) => {
    if (!customSelect.contains(e.target)) {
        customSelect.classList.remove('open');
    }
});

// Añadir snippets al editor
function insertSnippet(type) {
    if (!window.CodeEditor || !window.CodeEditor.cmEditor) return;

    let snippet = "";

    const snippets = {
        forLoop: `for (let i = 0; i < 10; i++) {\n    console.log(i);\n}`,
        whileLoop: `let i = 0;\nwhile (i < 10) {\n    console.log(i);\n    i++;\n}`,
        doWhileLoop: `let i = 0;\ndo {\n    console.log(i);\n    i++;\n} while (i < 10);`,
        forOfLoop: `const arr = [1,2,3];\nfor (const val of arr) {\n    console.log(val);\n}`,
        forInLoop: `const obj = {a:1, b:2};\nfor (const key in obj) {\n    console.log(key, obj[key]);\n}`,

        // Condicionales
        ifStatement: `if (condition) {\n    // código\n}`,
        ifElseStatement: `if (condition) {\n    // código\n} else {\n    // otro código\n}`,
        switchStatement: `switch(value) {\n    case 1:\n        // código\n        break;\n    default:\n        // código\n}`,

        // Funciones
        functionDeclaration: `function myFunction(param) {\n    // código\n}`,
        arrowFunction: `const myFunction = (param) => {\n    // código\n};`,

        // Arrays
        arrayMap: `const newArray = arr.map(item => item * 2);`,
        arrayFilter: `const filtered = arr.filter(item => item > 10);`,
        arrayReduce: `const sum = arr.reduce((acc, val) => acc + val, 0);`,

        // Objetos
        objectLiteral: `const obj = { name: 'Luke', age: 19 };`,
        objectDestructuring: `const { name, age } = obj;`,

        // Modern JS
        templateStrings: "const greeting = `Hola, ${name}!`;",
        spreadOperator: "const arr2 = [...arr1, 4,5,6];",
        destructuring: "const { a, b } = obj;",
    };

    snippet = snippets[type];

    if (snippet) {
        const cm = window.CodeEditor.cmEditor;
        const doc = cm.getDoc();
        const cursor = doc.getCursor();
        doc.replaceRange(snippet + '\n', cursor);
        cm.focus();
    }
}

// ------------------------------
//  CODE EDITOR MAIN OBJECT
// ------------------------------
window.CodeEditor = {
    init: function () {
        this.cmEditor = CodeMirror.fromTextArea(document.getElementById("codeEditor"), {
            lineNumbers: true,
            mode: "javascript",
            theme: "dracula",
            tabSize: 2,
            indentWithTabs: true,
            lineWrapping: true,
        });

        this.cmEditor.setSize(null, "100%");
        this.output = document.getElementById('output');
        this.runBtn = document.getElementById('runBtn');
        this.clearBtn = document.getElementById('clearBtn');
        this.autoRun = document.getElementById('autoRun');
        this.executionTime = document.getElementById('executionTime');
        this.clearEditorBtn = document.getElementById('clearEditorBtn');

        if (this.clearEditorBtn) {
            this.clearEditorBtn.addEventListener('click', () => {
                this.cmEditor.setValue('');
                this.clearOutput();
            });
        }

        const copyEditorBtn = document.getElementById("copyEditorBtn");
        if (copyEditorBtn) {
            copyEditorBtn.addEventListener("click", () => {
                const code = this.cmEditor.getValue();
                navigator.clipboard.writeText(code).then(() => {
                    const original = copyEditorBtn.textContent;
                    copyEditorBtn.textContent = "Copied!";
                    setTimeout(() => copyEditorBtn.textContent = original, 2000);
                });
            });
        }

        this.setupEventListeners();
    },

    setupEventListeners: function () {
        this.runBtn.addEventListener('click', () => this.runCode());
        this.clearBtn.addEventListener('click', () => this.clearOutput());

        this.cmEditor.on("change", () => {
            this.saveToLocalStorage();
            if (this.autoRun.checked) {
                clearTimeout(this.autoRunTimeout);
                this.autoRunTimeout = setTimeout(() => {
                    this.runCode();
                }, 1000);
            }
        });

        this.cmEditor.on("keydown", (cm, e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
                e.preventDefault();
                this.runCode();
            }
        });
    },

    runCode: function () {
        const code = this.cmEditor.getValue();
        this.clearOutput();

        if (!code.trim()) {
            this.addOutput('// No hay código para ejecutar', 'log-warn');
            this.updateExecutionTime(0);
            return;
        }

        const startTime = performance.now();
        let executionStarted = false;

        const originalLog = console.log;
        const originalError = console.error;
        const originalWarn = console.warn;
        const self = this;

        console.log = (...args) => {
            if (!executionStarted) executionStarted = true;
            self.addOutput(args.map(a => this.formatValue(a)).join(' '), 'log-info');
        };
        console.error = (...args) => {
            self.addOutput('ERROR: ' + args.join(' '), 'log-error');
        };
        console.warn = (...args) => {
            self.addOutput('WARN: ' + args.join(' '), 'log-warn');
        };

        try {
            this.updateExecutionTime(null, true);
            const result = eval(code);
            const endTime = performance.now();
            const time = Math.round((endTime - startTime) * 100) / 100;

            if (result !== undefined) {
                this.addOutput('← ' + this.formatValue(result), 'log-success');
            }

            this.updateExecutionTime(time);
        } catch (error) {
            const endTime = performance.now();
            const time = Math.round((endTime - startTime) * 100) / 100;

            this.addOutput('ERROR: ' + error.message, 'log-error');
            this.updateExecutionTime(time);
        } finally {
            console.log = originalLog;
            console.error = originalError;
            console.warn = originalWarn;
        }
    },

    formatValue: function (value) {
        if (value === null) return 'null';
        if (value === undefined) return 'undefined';
        if (typeof value === 'object') {
            try { return JSON.stringify(value, null, 2); }
            catch { return String(value); }
        }
        return String(value);
    },

    addOutput: function (text, className = 'log-info') {
        const logEntry = document.createElement('div');
        logEntry.className = `log-entry ${className}`;
        logEntry.textContent = text;
        this.output.appendChild(logEntry);
        this.output.scrollTop = this.output.scrollHeight;
    },

    clearOutput: function () {
        this.output.innerHTML = '';
        this.updateExecutionTime(0);
    },

    updateExecutionTime: function (time, isExecuting = false) {
        if (isExecuting) {
            this.executionTime.innerHTML = '⏱️ Ejecutando...';
            return;
        }
        this.executionTime.innerHTML = `⏱️ Tiempo: ${time || 0}ms`;
    },

    saveToLocalStorage: function () {
        try {
            localStorage.setItem('jsEditor_code', this.cmEditor.getValue());
        } catch (e) {
            console.warn('No se pudo guardar en localStorage');
        }
    }
};

// Inicializar editor
document.addEventListener('DOMContentLoaded', () => {
    if (window.CodeEditor) {
        window.CodeEditor.init();
        console.log('Editor cargado desde editor.js');
    }
});
