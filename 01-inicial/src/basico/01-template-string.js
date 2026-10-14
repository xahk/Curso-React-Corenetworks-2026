// Template Strings

const nombre   = 'Alejandro';
const apellido = 'Gómez';

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`;

//  {} llaves, () parentesis, [] corchetes

console.log(nombreCompleto);

function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

console.log( `Este es un texto: ${ getSaludo( nombre ) } `);
// console.log( `Este es un texto: ${ getSaludo( nombreCompleto ) } `);