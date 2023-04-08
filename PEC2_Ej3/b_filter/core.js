function onlyEven(array) {
  // your code here
  const array2 = array.filter(element => element%2 == 0 );
  return array2;
}

function onlyOneWord(array) {
  // your code here
  const array2 = array.filter(element => element.indexOf(" ")==-1);
  return array2;
}

function positiveRowsOnly(array) {
  // your code here
  const array2 = array.filter(lista => {
    todosPositivos=true;
    for (let numero of lista){
      if (numero<0){
        todosPositivos=false;
      }
    }

    // for (let i=0; i<lista.length; i++){
    //     if (lista[i]<0){
    //       todosPositivos=false;
    //     }
    // }

    return todosPositivos;
  });
  return array2;

}

function allSameVowels(array) {
  // your code here
  const array2 = array.filter(cadena => {
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
  });
  
  return array2;
}

module.exports = {
  onlyEven,
  onlyOneWord,
  positiveRowsOnly,
  allSameVowels
};
