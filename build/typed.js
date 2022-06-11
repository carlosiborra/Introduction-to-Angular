// Por inferencia: var cadena = "hola";
// No se puede proq cada variable 1 tipo cadena = true;
// Same as above cadena = 1;
//* BOOLEAN
let esValido = true;
esValido = false;
//* NUMBER
let edad = 20;
//* STRING
let nombre = "Juan";
let apellido = "Perez";
let nombre_completo = `${nombre} ${apellido}`;
//* ARRAY
let numeros = [1, 2, 3, 4, 5]; // Array de numeros
let numeros2 = [1, 2, 3, 4, 5]; // Array de numeros
let letras = ["a", "b", "c"]; // Array de letras
//* TUPLES
let cliente;
cliente = ["Juan", 20, true]; // or sequently 
let cliente2 = ["Juan", 20, true];
//* ENUM
var Estado;
(function (Estado) {
    Estado[Estado["Offline"] = -1] = "Offline";
    Estado[Estado["Indefinido"] = 0] = "Indefinido";
    Estado[Estado["Online"] = 1] = "Online";
})(Estado || (Estado = {}));
let stat = Estado.Online;
console.log(stat);
// node build/tipado.js
// >> 1 ; sin los iguales seria autoincremental (= 2)
//* UNKNOWN
let sinTipo = "Hola";
sinTipo = 20;
sinTipo = true;
let nuevaCadena = "chain";
//! nuevaCadena = 20; Error
//* ANY
let cualquierCosa = "Hola";
cualquierCosa = 20;
cualquierCosa = true;
nuevaCadena = cualquierCosa; // No hay error
//* VOID
function logger() {
    console.log("Hola mundo");
}
