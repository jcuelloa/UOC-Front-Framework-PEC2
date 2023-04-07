// Check to see if any of the elements in the
// array are numbers greater than 10.

function anyGreaterThan10 (input) {

  //Con funcion flecha
  return input.some(valor => valor > 10);

  // return input.some(mayor10);

  // function mayor10(valor){
  //   return valor>10; 
  // }

};

// Check to see if any of the strings in
// the array is longer than 10 characters.

function longWord (input) {
  return input.some(cadena => cadena.length >10);

};

// Check to see if any of the elements in
// the matrix are true.

function truePossibilities (input) {
  
  return input.some (array => {
    let algunTrue = false;
    for (let i=0; i<array.length; i++){
      if (array[i]==true){
        algunTrue = true;
      }
    }
    return algunTrue;
  });
  
};

// Check to see if 'Lost' is in
// the phrase (using some).

function lostCarcosa (input) {
  
  return input.some (frase => /Lost/.test(frase));
  
  // return input.some (existePalabraLost);
  // function existePalabraLost(frase){
  //   return /Lost/.test(frase);
  // }

};

module.exports = {
  anyGreaterThan10,
  longWord,
  truePossibilities,
  lostCarcosa
};
