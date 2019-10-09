var nombre = 0;
let name = "hola";
const meinname = true;

function nombreFuncion(param) {
    //code

    return param;
}

let param = 0;

param = nombreFuncion(param);

let objeto = {
    nombre: "Al",
    apellido: "García",
    escuela: {
        nombre: "ITESM",
        anios: 50
    }
}

let keys = Object.keys(objeto);
let values = Object.values(objeto);    

console.log("keys");
console.log(keys);
console.log("values");
console.log(values);

console.log(objeto);
console.log(objeto.nombre);
console.log(objeto["nombre"]);

var mipapa = prompt('Dame tu nombre: ')

alert("Hello there!!!")

let arreglo = [];

arreglo.push(1);
arreglo.push("hola");

console.log(arreglo);

arreglo.pop();

console.log(arreglo);

let cero = (0=="0");
let zero = (0==="0");

console.log(cero);
console.log(zero);
