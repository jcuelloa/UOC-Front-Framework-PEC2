const { kMaxLength } = require("buffer");

function multiplyBy10(array) {
  // your code here

  const array2 = array.map(value => value * 10);
  return array2;

  // const array2 = array.map(multiplicarPor10);
  // function multiplicarPor10(value){
  //   return value * 10;
  // }

}

function shiftRight(array) {
  // your code here
  const array2 = array.map((value, i, a) => a[(i + a.length - 1) % a.length]);
  return array2;

  //Para rotar a la izquierda
  //const array3 = array.map((value, i, a) => a[(i + 1) % a.length]);

}

function onlyVowels(array) {
  // your code here
  const array2 = array.map((value) => value.replace(/[bcdfghjklmnñpqrstvwxyz]/gi, ''));  
  return array2;
  
}

function doubleMatrix(array) {
  // your code here
  const array2 = array.map((lista)=>{
    let lista_doble = [];
    for(let i = 0; i < lista.length; i++){
        lista_doble.push(lista[i] * 2);
    }
    return lista_doble;
  })
  return array2;
}



module.exports = {
  multiplyBy10,
  shiftRight,
  onlyVowels,
  doubleMatrix
};
