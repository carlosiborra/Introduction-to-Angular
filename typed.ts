// Por inferencia: var cadena = "hola";
// No se puede proq cada variable 1 tipo cadena = true;
// Same as above cadena = 1;


//* BOOLEAN
let esValido: boolean = true;
esValido = false;


//* NUMBER
let edad: number = 20;


//* STRING
let nombre: string = "Juan";
let apellido: string = "Perez";

let nombre_completo: string = `${nombre} ${apellido}`;


//* ARRAY
let numeros: number[] = [1, 2, 3, 4, 5]; // Array de numeros
let numeros2: Array<number> = [1, 2, 3, 4, 5]; // Array de numeros
let letras: string[] = ["a", "b", "c"]; // Array de letras


//* TUPLES
let cliente: [string, number, boolean];
cliente = ["Juan", 20, true]; // or sequently 
let cliente2: [string, number, boolean] = ["Juan", 20, true];


//* ENUM
enum Estado // Si no se hace un igual, son valores autoincrementales
{
    Offline = -1,
    Indefinido = 0,
    Online = 1,
}

let stat: Estado = Estado.Online;
console.log(stat);
// node build/tipado.js
// >> 1 ; sin los iguales seria autoincremental (= 2)


//* UNKNOWN
let sinTipo: unknown = "Hola";
sinTipo = 20;
sinTipo = true;

let nuevaCadena: string = "chain";
//! nuevaCadena = 20; Error


//* ANY
let cualquierCosa: any = "Hola";
cualquierCosa = 20;
cualquierCosa = true;
nuevaCadena = cualquierCosa; // No hay error


//* VOID
function logger(): void // No devuelve nada
{
    console.log("Hola mundo");
}

