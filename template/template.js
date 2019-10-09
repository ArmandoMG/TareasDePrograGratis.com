var nombre = 0;
let name = "hola";
const meinname = true;

function nombreFuncion(param) {
    //code

    return param;
}

nama = (event) => {
    console.log("hello");
}

nama("hola");

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

// var mipapa = prompt('Dame tu nombre: ');

// alert("Hello there!!!");

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


var btn = document.getElementById("submitBtn");
// const btn = document.querySelector('#submitBtn');

console.log(btn);

btn.addEventListener("click", function (event){
    event.preventDefault();

    console.log("btn clicked");

    let divRaro = document.getElementsByClassName("hola");

    let divNode = document.createElement("DIV");
    let spanNode = document.createElement("SPAN");
    let inputNode = document.createElement("INPUT");
    let textNode = document.createTextNode("content");

    inputNode.setAttribute("type", "checkbox");
    inputNode.setAttribute("class", "checkBox");
    spanNode.setAttribute("class", "checkboxText");
    divNode.setAttribute("class", "todo");

    spanNode.appendChild(textNode);
    divNode.appendChild(inputNode);
    divNode.appendChild(spanNode);
    divRaro[0].appendChild(divNode);
    
});

let query = document.querySelectorAll(".todo");

console.log(query);
