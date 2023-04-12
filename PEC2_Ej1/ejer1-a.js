
//"findOne" es una función, que dado una key (nombre de atributo) y value (valor de atributo),
//busca dicha key en una lista de objetos. Si la encuentra, llama a la función "onSuccess" y 
//si no la encuentra, llama a la función "onError"

//La busqueda esta diferida por 2 segundos, usando "setTimeout"

const findOne = (list, { key, value }, { onSuccess, onError }) => {

  //Esta es la función que se ejecuta. Espera 2 segundos y luego hace la búsqueda.
  setTimeout(() => {
    const element = list.find(element => element[key] === value);
    element ? onSuccess(element) : onError({ msg: 'ERROR: Element Not Found' });
  }, 2000);
};

//Funciones o callback que se llaman si ha habido exito (true) o fracaso (false) en la búsqueda
const onSuccess = ({ name }) => console.log(`user: ${name}`);
const onError = ({ msg }) => console.log(msg);

//Lista de usuarios. Donde buscar la key
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


//Inicio - Programa principal
console.log('findOne success');
findOne(users, { key: 'name', value: 'Carlos' }, { onSuccess, onError }); //esta fución terminará despues del siguiente console.log
console.log('findOne error');   //Se ejecuta antes que la instrucción anterior que tarda 2 segundos
findOne(users, { key: 'name', value: 'Fermin' }, { onSuccess, onError });

/*
findOne success           //primera línea de código  
findOne error             //tercera línea de código. Se muestra anter de terminar la búsqueda por el timeout. 
 //wait 2 seconds
user: Carlos              //termina la primera busqueda despues de 2 segundos y muestra resultado
ERROR: Element Not Found  //termina la segunda busqueda
*/
