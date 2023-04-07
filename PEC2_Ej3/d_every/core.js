// Check to see if all elements in an array
// are even numbers.

function allEven(input) {

  //En lugar de usar funciones flecha, voy a usar el callback tal cual
  //solo por cambiar un poco y practicar.

  return input.every(esPar);

  function esPar(valor){
    return valor%2 == 0; 
  }
 
}

// Check to see if all elements in an array
// are of the same type.

function allSameType(input) {

  return input.every(mismoTipo);

  function mismoTipo(valor){
    return typeof input[0] == typeof valor;    
  }
  
}

// Check to see if every element in the matrix is
// an array and that every element in the array is
// greater than 0.

function positiveMatrix(input) {

  
  return input.every(arrayDePositivos);
  
  function arrayDePositivos (array){
    //console.log(array);
    let todosNumPositivos = true;
    array.forEach(element => {
      if (element<0){
        todosNumPositivos = false;
      }
    });
    return todosNumPositivos;

  }  

}

// Check that all items in an array are strings
// and that they all only contain the same vowels.

function allSameVowels(input) {
  
  return input.every(mismasVocales);
  
  function mismasVocales (cadena){
    let mismasVocales=true;
    //Extraer la lista de vocales
    const listavocales = cadena.match(/[aeiou]/gi);
    //Comparo la primera vocal con el resto
    for (let vocal of listavocales){
      if (listavocales[0]!=vocal){
         mismasVocales=false;
      }
   }
   return mismasVocales;
  }


}

module.exports = {
  allEven,
  allSameType,
  positiveMatrix,
  allSameVowels
};
