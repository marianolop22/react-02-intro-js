console.log("hola mundo");


//clon de objetos
const persona = {
    nombre: "Mariano",
    apellido : "Lopez",
    edad: "42"
};
const persona2 = {...persona}; //Esto hace copia del objeto
persona2.nombre = "pepe";

//concatenar arrays
const miArray = [1,2,3,4];

const miArray2 = [...miArray,5];

console.table(miArray2);






