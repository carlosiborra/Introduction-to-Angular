function mostrarPersona(pPersona) {
    console.log(pPersona);
}
mostrarPersona({ nombre: "Juan", apellido: "Perez", edad: 20 });
function mostrarCoche(pCoche) {
    console.log(`Marca: ${pCoche.marca}. Modelo: ${pCoche.modelo}`);
    if (pCoche.color) {
        console.log(`Color: ${pCoche.color}`);
    }
    console.log("");
}
mostrarCoche({ marca: "Ford", modelo: "Mustang" });
mostrarCoche({ marca: "Ford", modelo: "Mustang", color: "rojo" });
let p1 = { x: 10, y: 20 };
// funcion
const miBusqueda = (v, s) => {
    const result = v.search(s);
    return result > -1;
};
console.log(miBusqueda("Hola mundo", "mundo")); // true
class Adulto {
    constructor(pNombre, pEdad, coche) {
        this.nombre = pNombre;
        this.edad = pEdad;
        this.coche = coche;
    }
}
class Child {
}
