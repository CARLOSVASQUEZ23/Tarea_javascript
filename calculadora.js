const prompt = require("prompt-sync")();


let cantidad1 = parseFloat(prompt("Ingresa la primera cantidad: "));
let cantidad2 = parseFloat(prompt("Ingresa la segunda cantidad: "));

let suma = cantidad1 + cantidad2


console.log(`La suma de los dos números es: ${suma}`);
