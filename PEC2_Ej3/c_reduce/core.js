function sum(array) {
  // your code here
  let totalSuma = array.reduce((total,num)=>{
    total = total + num;
    return total;
  });
  return totalSuma;

}

function productAll(array) {
  // your code here
  var producto=1;
  let totalProducto = array.reduce((total,lista)=>{
    //var producto=1;
    for (let i=0; i<lista.length; i++){
       producto = producto * lista[i];    
    }
   
  },0);  //El 0 es el segundo parámetro del reduce, valor inicial

  return producto;

}

function objectify(array) {
  // your code here
  let objeto = array.reduce((p, c)=> {
    p[c[0]] = c[1];
    return p;
  }, {});
 
  return objeto;

}

function luckyNumbers(array) {
  // your code here
  //'Your lucky numbers are: 30, 48, 11, 5, and 32'
  var ultimoIndice = array.length-1;

  let cadena = array.reduce((total,num,indice)=>{
    if (indice != ultimoIndice){
      //Primeros casos
      total = total + num + ", ";
    }
    else{
      //Ultimo caso
      total = total + "and "+num;
    }
   
    return total;
  },0);
  
  cadena = "Your lucky numbers are: "+cadena;
  return cadena;
}

module.exports = {
  sum,
  productAll,
  objectify,
  luckyNumbers
};
