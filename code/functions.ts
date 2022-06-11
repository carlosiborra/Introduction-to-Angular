//* Javascript style
function sumarJS(a, b)
{
    return a + b;
}

//* Typescript style
const sumarTS = function(a: number, b: number): number
{
    return a + b;
}

sumarTS(1, 2);


//* Parametros opcionales
function completeName(nombre: string, apellido?: string): string
{
    if (apellido)
    {
        return `${nombre} ${apellido}`;
    }
    else
    {
        return nombre;
    }
}
console.log(completeName("Juan"));
console.log(completeName("Juan", "Perez"));

// tsc
// node build/funciones.js


//* Parametros por defecto
//? Por defecto tendrá ese valor si no se le asigna ningun otro
function completeName2(nombre: string, apellido: string = "Gomez"): string
{
    if (apellido)
    {
        return `${nombre} ${apellido}`;
    }
    else
    {
        return nombre;
    }
}
console.log(completeName2("Juan")); // >> Juan Gomez, ya que Gomez es el valor por defecto
console.log(completeName2("Juan", "Perez")); // >> Juan Perez


//* Parametros REST (o infinitos)
//? Parametros que se pasan como un array (se pueden pasar tantos como se quiera)
function completeName3(nombre: string, ...apellidos: string[]): string
{
    return `${nombre} ${apellidos.join(" ")}`;
}
console.log(completeName3("Juan", "Perez", "Gomez")); // >> Juan Perez Gomez