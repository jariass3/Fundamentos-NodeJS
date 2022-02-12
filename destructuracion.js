let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'regeneración',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
    }
}

console.log(deadpool.getNombre());

// Forma tradicional

let nom = deadpool.nombre;
let ape = deadpool.apellido;
let pod = deadpool.poder;

// Nueva forma, destructuración

let { nombre: primerNombre, apellido, poder } = deadpool;

console.log(primerNombre, apellido, poder);