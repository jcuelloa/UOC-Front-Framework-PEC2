

//Esta función es exactamente como la anterior. 

const findOne = (list, { key, value }, { onSuccess, onError }) => {
  const promesa = new Promise(function (resolve, reject) {
    setTimeout(() => {
      const element = list.find(element => element[key] === value);
      if (element) {
        resolve(onSuccess(element));
      }
      else {
        reject(onError({ msg: 'ERROR: Element Not Found' }))
      }
    }, 2000);
  });
  return promesa;
};

const onSuccess = ({ name }) => console.log(`user: ${name}`);
const onError = ({ msg }) => console.log(msg);

const users = [
  {
    name: 'Carlos',
    rol: 'Teacher'
  },
  {
    name: 'Ana',
    rol: 'Boss'
  }
];


//  ASYNC/AWAIT es una forma más sencilla de usar promesas.
//La función que devuelve una promesa tiene que ir despues de un AWAIT. 
//Se espera a que termine. Hasta que no termina, no continua el flujo de ejecucion. 
//Si termina con exíto (la promesa se resuelve), se ejecuta la siguiente línea, 
//en este caso el console.log(exito) y luego la segunda búsqueda
//Si la promesa se rechaza, y queremos ejecutar algo en tal caso (no es obligatorio), hay que capturar dicho rechazo
//usando try{...función con AWAIT...} catch{...ejecución si hay rechazo...} 

//Para usar await, la función que devuelve la promesa debe estar dentro de una función asincrona,
//con la palabra async.

//Me he creado una nueva función buscar() con ASYNC y la llamo.
//Hasta que no termina la primera busqueda, no contiuamos con la siguiente.

async function buscar() {
  try {
    await findOne(users, { key: 'name', value: 'Carlos' }, { onSuccess, onError });
    console.log('findOne success');
    await findOne(users, { key: 'name', value: 'Fermin' }, { onSuccess, onError });
    console.log('findOne success');
  }
  catch (e) {
    console.log('findOne error')
  };
};

buscar();


/* SALIDA

//wait 2 seconds     //Se ejectua la primera busqueda, que tarde 2 segundosos segundos.

user: Carlos         //Al pasar 2 segundos, termina la busqueda con exito. Pasamos a la siguiente linea.
findOne success

//wait 2 seconds    //Volvemos a esperar al ejecutar la segunda busqueda

ERROR: Element Not Found   //Al pasar 2 segundos, termina la busqueda con fracaso.
findOne error
*/


