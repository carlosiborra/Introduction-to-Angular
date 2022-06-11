// Por inferencia: var cadena = "hola";
// No se puede proq cada variable 1 tipo cadena = true;
// Same as above cadena = 1;
/* --------------------------------------------------- */
// BOOLEAN
let esValido = true;
esValido = false;
// NUMBER
let edad = 20;
// STRING
let nombre = "Juan";
let apellido = "Perez";
let nombre_completo = `${nombre} ${apellido}`;
// ARRAY
let numeros = [1, 2, 3, 4, 5]; // Array de numeros
let numeros2 = [1, 2, 3, 4, 5]; // Array de numeros
let letras = ["a", "b", "c"]; // Array de letras
// TUPLES
let cliente;
cliente = ["Juan", 20, true]; // or sequently 
let cliente2 = ["Juan", 20, true];
// ENUM
var Estado;
(function (Estado) {
    Estado[Estado["Offline"] = 0] = "Offline";
    Estado[Estado["Indefinido"] = 1] = "Indefinido";
    Estado[Estado["Online"] = 2] = "Online";
})(Estado || (Estado = {}));
let stat = Estado.Online;
console.log(stat);
