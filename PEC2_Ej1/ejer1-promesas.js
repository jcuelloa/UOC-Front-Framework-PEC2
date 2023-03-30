const findOne = (list, { key, value }, { onSuccess, onError }) => {
    const promesa = new Promise(function (resolve,reject){
      setTimeout(() => {
        const element = list.find(element => element[key] === value);
        if (element){
            resolve(onSuccess(element));
        }
        else{
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


findOne(users, { key: 'name', value: 'Carlos' }, { onSuccess, onError })
  .then(()=>console.log('findOne success'))
  .catch(()=>console.log('findOne error'));

console.log('esto es la asincroniar');
findOne(users, { key: 'name', value: 'Fermin' }, { onSuccess, onError })
    .then(()=>console.log('findOne success'))
    .catch(()=>console.log('findOne error'));

/*
findOne success
findOne error
 //wait 2 seconds
user: Carlos
ERROR: Element Not Found
*/
