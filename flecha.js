// 1. Declaración habitual

function suma(a, b) {
    return a + b;
}

// 2. Declaración como función flecha
let restar = (a, b) => {
    return a - b;
}

// 3. Definición simplificada
let multiplicar = (a, b) => a * b;

let saludar = (nombre) => `Hola ${nombre}, cómo estás?`;

console.log(saludar('Joel'));

console.log(suma(5, 9));

console.log(restar(8, 3));

console.log(multiplicar(4, 5));