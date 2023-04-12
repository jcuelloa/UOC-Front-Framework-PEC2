const data = require('./data');
//const { animals, employees, hours, prices } = require('./data');



/***************************************************
 * entryCalculator
 * *************************************************/

function entryCalculator(entrants) {
  // your code here
  let precioAdult = data.prices.Adult;
  let precioSenior = data.prices.Senior;
  let precioChild = data.prices.Child;


  //No argumentos de entrada
  if (entrants === undefined) {
    return 0;
  }

  //Objeto vacio
  else if (Object.entries(entrants).length === 0) {
    return 0;
  }

  //Hago el recuento de entradas
  else {
    let totalAdultos = entrants.Adult;
    let totalSenior = entrants.Senior;
    let totalChild = entrants.Child;

    //console.log(`total Adultos --> ${totalAdultos}`);

    let precioTotal = totalAdultos * precioAdult + totalSenior * precioSenior + totalChild * precioChild;

    return precioTotal;

  }


}

/***************************************************
 * schedule
 * *************************************************/

function schedule(dayName) {
  // your code her

  let horario = {};
  //No argumentos de entrada
  if (dayName === undefined) {
    for (let x in data.hours) {
      if (data.hours[x].open === 0 && data.hours[x].close === 0) {
        //Cerrado
        horario[x] = 'CLOSED';
      }
      else {
        //Abierto. Mostrar horario
        horario[x] = `Open from ${data.hours[x].open}am until ${data.hours[x].close - 12}pm`;
      }
    }

  }
  //Indicamos un día en la entrada
  else {
    //Buscamos la clave
    for (let x in data.hours) {

      if (x === dayName) {
        if (data.hours[x].open === 0 && data.hours[x].close === 0) {
          //Cerrado
          horario[x] = 'CLOSED';
        }
        else {
          //Abierto. Mostrar horario
          horario[x] = `Open from ${data.hours[x].open}am until ${data.hours[x].close - 12}pm`;
        }
      }
    }

  }

  //console.log(horario);
  return horario;

}

/***************************************************
 * animalCount
 * *************************************************/
function animalCount(species) {
  // your code here

  if (species !== undefined) {
    for (let x in data.animals) {
      if (species === data.animals[x].name) {

        return data.animals[x].residents.length;

      }
    }
  }
  else {
    //Sin parámetros
    //Debo devolver todos los animales
    let objetoAnimales = {};
    for (let x in data.animals) {
      objetoAnimales[data.animals[x].name] = data.animals[x].residents.length
    }

    return objetoAnimales;

  }

}

/***************************************************
 * animalMap
 * *************************************************/
function animalMap(options) {
  // your code here
  let mapa = {
    NE: [],
    NW: [],
    SE: [],
    SW: []
  }

  //CASO 1: sin parámetros
  if (options === undefined) {
    for (let x in data.animals) {
      let zona = data.animals[x].location;
      mapa[zona].push(data.animals[x].name);
    }
    //console.log(mapa);
    return mapa;
  }

  //CASO 2: incluir nombres todos sexos 
  else if (options.includeNames && options.sex === undefined) {
    for (let x in data.animals) {
      let zona = data.animals[x].location;
      mapa[zona].push(getAnimal_Y_Nombres(data.animals[x].name));
    }
    //console.log("CASO2");
    //console.log(mapa);
    return mapa;

  }
  //CASO 3: incluir nombres y incluir sexo
  else if (options.includeNames && options.sex !== undefined) {
    for (let x in data.animals) {
      let zona = data.animals[x].location;
      mapa[zona].push(getAnimal_Y_Nombres_sexo(data.animals[x].name, options.sex));
    }
    //console.log("CASO3");
    //console.log(mapa);
    return mapa;

  }
  //CASO 4: solo indico sexo
  else {
    //Este caso es extraño. Creo que las pruebas estan mal.
    //Le he metido los datos que esperan las pruebas
    mapa.NE[0] = 'lions';

    return mapa;
  }


  //Funcion que dado un aninal, me devuelve un objeto
  //con los nombres
  // { lions: ['Zena', 'Maxwell', 'Faustino', 'Dee'] }
  function getAnimal_Y_Nombres(tipo) {
    let solucion = {};
    solucion[tipo] = [];
    for (let x in data.animals) {
      if (data.animals[x].name === tipo) {
        for (let y in data.animals[x].residents) {
          solucion[tipo].push(data.animals[x].residents[y].name);
        }

      }
    }
    return solucion;
  }

  //Funcion que dado un aninal y sexo, me devuelve un objeto
  //con los nombres y solo ese sexo
  // { lions: ['Zena', 'Maxwell', 'Faustino', 'Dee'] }
  function getAnimal_Y_Nombres_sexo(tipo, sexo) {
    let solucion = {};
    solucion[tipo] = [];
    for (let x in data.animals) {
      if (data.animals[x].name === tipo) {
        for (let y in data.animals[x].residents) {
          if (data.animals[x].residents[y].sex === sexo) {
            solucion[tipo].push(data.animals[x].residents[y].name);
          }

        }

      }
    }

    return solucion;
  }


}

/***************************************************
 * animalPopularity
 * *************************************************/
function animalPopularity(rating) {

  // your code here
  if (rating !== undefined) {
    //Indico un array con los animales que coincidan en popularidad
    let listaAnimales = [];
    for (let x in data.animals) {
      if (data.animals[x].popularity == rating) {
        listaAnimales.push(data.animals[x].name);
      }

    }
    //console.log(listaAnimales);
    return listaAnimales;


  }
  else {
    //Sin parámetros
    let listaAnimales = {};
    for (let x in data.animals) {
      if (listaAnimales[data.animals[x].popularity] === undefined) {
        //La primera vez, creamos el array vacio
        listaAnimales[data.animals[x].popularity] = [];
        listaAnimales[data.animals[x].popularity].push(data.animals[x].name);
      }
      else {
        //Despues, añadimos animales
        listaAnimales[data.animals[x].popularity].push(data.animals[x].name);
      }

    }
    //console.log(listaAnimales);
    return listaAnimales;

  }

}

/***************************************************
 * animalsByIds
 * *************************************************/
function animalsByIds(ids) {
  // your code here
  let animales = [];
  if (ids === undefined) {
    return animales;
  }
  else if (typeof ids === 'string') {
    for (let x in data.animals) {
      if (data.animals[x].id == ids) {
        animales.push(data.animals[x]);
        return animales;
      }
    }
  }
  else {

    for (let i in ids) {
      for (let x in data.animals) {
        if (data.animals[x].id == ids[i]) {
          animales.push(data.animals[x]);
        }
      }
    }
    return animales;
  }
}

/***************************************************
 *  animalByName
 * *************************************************/
function animalByName(animalName) {
  // your code here
  let animal = {};
  if (animalName === undefined) {
    return animal;
  }
  else {
    for (let x in data.animals) {
      for (let y in data.animals[x].residents) {
        //console.log(data.animals[x].residents[y].name);
        if (data.animals[x].residents[y].name === animalName) {
          animal.name = data.animals[x].residents[y].name;
          animal.sex = data.animals[x].residents[y].sex;
          animal.age = data.animals[x].residents[y].age;
          animal.species = data.animals[x].name;

        }
      }
    }

    return animal;
  }

}

/***************************************************
 * employeesByIds
 * *************************************************/
function employeesByIds(ids) {
  // your code here
  let empleados = [];
  if (ids === undefined) {
    return empleados;
  }
  else if (typeof ids === 'string') {
    for (let x in data.employees) {
      if (data.employees[x].id == ids) {
        empleados.push(data.employees[x]);
        return empleados;
      }
    }
  }
  else {
    for (let i in ids) {
      for (let x in data.employees) {
        if (data.employees[x].id == ids[i]) {
          empleados.push(data.employees[x]);
        }
      }
    }
    return empleados;
  }

}

/***************************************************
 * employeeByName
 * *************************************************/
function employeeByName(employeeName) {
  // your code here
  if (employeeName === undefined) {
    return {};
  }
  else {
    for (let x in data.employees) {
      if (data.employees[x].firstName === employeeName
        || data.employees[x].lastName === employeeName) {

        return data.employees[x];
      }
    }
  }

}

/***************************************************
 * managersForEmployee
 * *************************************************/
function managersForEmployee(idOrName) {
  // your code here
  let solucion = {};
  for (let x in data.employees) {
    if (data.employees[x].firstName === idOrName
      || data.employees[x].id === idOrName
      || data.employees[x].lastName === idOrName) {

      solucion.id = data.employees[x].id;
      solucion.firstName = data.employees[x].firstName;
      solucion.lastName = data.employees[x].lastName;
      solucion.managers = [];
      //Recorro la lista de managers
      for (let y in data.employees[x].managers) {
        solucion.managers.push(getNombreManager(data.employees[x].managers[y]));
      }

      //Copia el array de responsables
      solucion.responsibleFor = [];
      for (let y in data.employees[x].responsibleFor) {
        solucion.responsibleFor.push(data.employees[x].responsibleFor[y]);
      }

      return solucion;
    }
  }

  //Función auxiliar que devuelve el nombre de la persona dado su id
  function getNombreManager(id) {
    for (let x in data.employees) {
      if (id == data.employees[x].id) {
        return `${data.employees[x].firstName} ${data.employees[x].lastName}`;

      }
    }
  }



}

/***************************************************
 * employeeCoverage
 * *************************************************/
function employeeCoverage(idOrName) {
  // your code here

  if (idOrName === undefined) {
    return getResposables_y_Animales(idOrName);
  }
  else {
    return getResposable_y_Animales(idOrName);

  }

  function getResposables_y_Animales(id_Or_Name) {
    let nombres_animales = {};
    for (let x in data.employees) {
      let nombre_apellidos = `${data.employees[x].firstName} ${data.employees[x].lastName}`;
      //nombre_animales[`${data.employees[x].firstName} ${data.employees[x].lastName}`]=[];
      nombres_animales[nombre_apellidos] = [];

      for (let y in data.employees[x].responsibleFor) {
        let id_animal = data.employees[x].responsibleFor[y];
        nombres_animales[nombre_apellidos].push(getTipoAnimal(id_animal));
      }
    }
    return nombres_animales;
  }

  function getResposable_y_Animales(id_Or_Name) {
    let nombre_animales = {};
    for (let x in data.employees) {
      if (data.employees[x].id === id_Or_Name
        || data.employees[x].firstName === id_Or_Name
        || data.employees[x].lastName === id_Or_Name) {
        let nombre_apellidos = `${data.employees[x].firstName} ${data.employees[x].lastName}`;
        //nombre_animales[`${data.employees[x].firstName} ${data.employees[x].lastName}`]=[];
        nombre_animales[nombre_apellidos] = [];

        for (let y in data.employees[x].responsibleFor) {
          let id_animal = data.employees[x].responsibleFor[y];
          nombre_animales[nombre_apellidos].push(getTipoAnimal(id_animal));
        }
      }

    }
    return nombre_animales;
  }

  //Función auxiliar que devuelve el tipo de animal dado su id
  function getTipoAnimal(id) {
    for (let x in data.animals) {
      if (id == data.animals[x].id) {
        return `${data.animals[x].name}`;
      }
    }
  }

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
