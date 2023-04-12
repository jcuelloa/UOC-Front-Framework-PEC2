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



//Mi función buscar va a ser una función asincrona que busca un valor.
//Imprime existo o fracaso.
//Lo hacemos así, para poder llamarla en paralelo
async function buscar(objeto) {
  try {
    await findOne(users, objeto, { onSuccess, onError });
    console.log('findOne success');
  }
  catch (e) {
    console.log('findOne error')
  };
};

//Inicio
//Los dos buscar se ejecutan en paralelo.
buscar({ key: 'name', value: 'Carlos' });  //función asincrona
buscar({ key: 'name', value: 'Fermin' });  //función asoncrona. Va en paralelo con la anterior.


/* SALIDA

//wait 2 seconds     //las dos funciones de buscar() se lanzan en paralelo. Como tardan dos segundos, no se muestra nada

user: Carlos         //pasados 2 segundos, se muestra el existo de la primera busqueda
findOne success

ERROR: Element Not Found  //paralelamente a la anterior, se muestra el fracaso de la segunda
findOne error
*/

//   --------   OTRA FORMA CON PROMISE.ALL  ---------

//Otra forma de ejecutar en paralelo funciones que devuelven promesas, es con Promise.all
/*
try {
  await Promise.all([
    findOne(users, { key: 'name', value: 'Carlos' }, { onSuccess, onError }),
    findOne(users, { key: 'name', value: 'Fermin' }, { onSuccess, onError })
  ])
}
catch (e) {
  console.log('findOne error')
};
*/

