const data = require('./data');

function entryCalculator(entrants) {
  // your code here
  let precioAdult = data.prices.Adult;
  let precioSenior = data.prices.Senior;
  let precioChild = data.prices.Child;
  

  // //Muestro precios
  // console.log("** Precios **");
  // console.log(`Adulto: ${precioAdult}`);
  // console.log(`Senior ${precioSenior}`);
  // console.log(`Child ${precioChild}`);

  // //Muestro argumento
  // console.log(entrants);

  //No argumentos de entrada
  if (entrants === undefined){
    return 0;
  }

  //Objeto vacio
  else if (Object.entries(entrants).length === 0){
    return 0;
  }

  //Hago el recuento de entradas
  else{
    let totalAdultos = entrants.Adult;
    let totalSenior = entrants.Senior;
    let totalChild = entrants.Child;
  
    //console.log(`total Adultos --> ${totalAdultos}`);

    let precioTotal = totalAdultos * precioAdult + totalSenior * precioSenior + totalChild * precioChild;
    
    return precioTotal;

    
  }
  

}

function schedule(dayName) {
  // your code her
  
  let horario = {};
  //No argumentos de entrada
  if (dayName === undefined){
    console.log ("--->mostrar horario completo");
    for (let x in data.hours){
        if (data.hours[x].open === 0 && data.hours[x].close === 0){
          //Cerrado
          horario[x]='CLOSED';
        }
        else{
          //Abierto. Mostrar horario
          horario[x]=`Open from ${data.hours[x].open}am until ${data.hours[x].close-12}pm`;
        }
    }
    
  }
  //Indicamos un día en la entrada
  else{
    //Buscamos la clave
    for (let x in data.hours){

      // console.log(x);
      // console.log(data.hours[x]);
      // console.log(data.hours[x].open);
      // console.log(data.hours[x].close);
      
      if (x === dayName){
        if (data.hours[x].open === 0 && data.hours[x].close === 0){
          //Cerrado
          horario[x]='CLOSED';
        }
        else{
          //Abierto. Mostrar horario
          horario[x]=`Open from ${data.hours[x].open}am until ${data.hours[x].close-12}pm`;
        }
      }
    }
    
  }

  //console.log(horario);
  return horario;

}

function animalCount(species) {
  // your code here
}

function animalMap(options) {
  // your code here
}

function animalPopularity(rating) {
  // your code here
}

function animalsByIds(ids) {
  // your code here
}

function animalByName(animalName) {
  // your code here
}

function employeesByIds(ids) {
  // your code here
}

function employeeByName(employeeName) {
  // your code here
}

function managersForEmployee(idOrName) {
  // your code here
}

function employeeCoverage(idOrName) {
  // your code here
}

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalPopularity,
  animalsByIds,
  animalByName,
  employeesByIds,
  employeeByName,
  managersForEmployee,
  employeeCoverage
};
