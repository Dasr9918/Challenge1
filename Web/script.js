// 1.Creacion de la funcion regular:

function esPar(numero) {
    return numero % 2 === 0;
  }
  //Creo un arreglo
  let numeros = [1, 4, 6, 8, 10, 15]; 
  
  let sonPares = numeros.every(numero => esPar(numero));
  
  if (sonPares) {
    console.log("Todos los números son pares.");
  } else {
    console.log("Al menos uno de los números es impar.");
  }
  
  // 2.Creacion de la funcion flecha

 //Creo un arreglo 
const numeros = [4, 7, 8, 11, 44]; 
const sonPares = numeros.every(numero => numero % 2 === 0);

console.log(sonPares ? "Todos los números son pares." : "Al menos uno de los números es impar.");
