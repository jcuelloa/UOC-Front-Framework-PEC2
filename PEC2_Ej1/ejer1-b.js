
//La función findOne crea una promesa que será devuelta. 
//La promesa hace una busqueda con un timeout de 2 segundos, como antes. 
//Si encontramos el elemento, llamamos al resolve y si no lo encontramos, llamamos a reject.
//Lo interesantes está en que quien llamé a la funcion findOne, se quedará esperando hasta que se le
//devuelva la promesa. El flujo de código no esperará y continuará. Por eso, la llamada a la función
//findOne es una llamada asíncrona.

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



//FindOne devuelve una promesa. 
//Al resolverse la promesa (es este caso cuando encontramos el nombre) se captura con el then
//Si la promesa se rechaza, se captura con el catch. 
findOne(users, { key: 'name', value: 'Carlos' }, { onSuccess, onError })
  .then(() => console.log('findOne success'))
  .catch(() => console.log('findOne error'));


findOne(users, { key: 'name', value: 'Fermin' }, { onSuccess, onError })
  .then(() => console.log('findOne success'))
  .catch(() => console.log('findOne error'));

//Esta línea se ejecuta antes porque aún no se han devuelto las dos promesas anteriores. Tardan 2 segundos en devolverse.
console.log('esto es la asincroniar. Se ejecuta antes porque aún no se ha devuelto la promesa');

/* SALIDA
esto es la asincroniar. Se ejecuta antes porque aún no se han devuelto las promesas

//wait 2 seconds

user: Carlos
findOne success

ERROR: Element Not Found
findOne error
*/
