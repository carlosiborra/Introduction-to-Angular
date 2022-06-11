interface persona {
  nombre: string;
  apellido: string;
  edad: number;
}

function mostrarPersona(pPersona: persona) {
  console.log(pPersona);
}

mostrarPersona({ nombre: "Juan", apellido: "Perez", edad: 20 });
// node build/interfaces.js


//* Propiedades opcionales (?)
interface coche {
  marca: string;
  modelo: string;
  color?: string; //? (?) indica que es opcional
}

function mostrarCoche(pCoche: coche) {
  console.log(`Marca: ${pCoche.marca}. Modelo: ${pCoche.modelo}`);
  if (pCoche.color) {
    console.log(`Color: ${pCoche.color}`);
  }
  console.log("");
}

mostrarCoche({ marca: "Ford", modelo: "Mustang" });
mostrarCoche({ marca: "Ford", modelo: "Mustang", color: "rojo" });


//* Propiedades de solo lectura (readonly)
interface Punto {
  readonly x: number;
  readonly y: number;
}

let p1: Punto = { x: 10, y: 20 };
//! p1.x = 5; Error

//* Definir una funcion dentro del interface
interface Busqueda {
  (valor: string, search: string): boolean; // valor, valor que se busca, devolucion
}

// funcion
const miBusqueda: Busqueda = (v: string, s: string): boolean => {
  const result = v.search(s);
  return result > -1;
};

console.log(miBusqueda("Hola mundo", "mundo")); // true


//* Interfaz en una clase
interface Humano {
  nombre: string;
  edad: number;
}

class Adulto implements Humano {
  nombre: string;
  edad: number;
  coche: boolean;

  constructor(pNombre: string, pEdad: number, coche: boolean) {
    this.nombre = pNombre;
    this.edad = pEdad;
    this.coche = coche;
  }
}

class Child {
  nombre: string;
  edad: number;
  colegio: string;
}


