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
  // your code here
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
