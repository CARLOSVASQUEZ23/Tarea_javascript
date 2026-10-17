//si o si la necesitamos para que el usuario ingrese datos
const prompt = require("prompt-sync")();

// Si se dan cuenta este es como el leer del PSEINT
let nombre = prompt("Ingresa tu nombre: ");
let edad = prompt("Ingresa tu edad: ");
let profesion = prompt("Ingresa tu profesion: ");



console.log(`Hola, ${nombre}, tienes ${edad} años y tu profesión es: ${profesion}`);




