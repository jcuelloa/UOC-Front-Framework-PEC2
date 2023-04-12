# PEC2

Login: jcuelloa@uoc.edu

Nombre y apellidos: Juan Antonio Cuello Alarcon

El orden en el que hice los ejercicicios fúe: primero el 1, luego el 3 y me dejé para el final el ejercicio del MVC, porque pensaba que este último me iba a resultar más dificil. Tengo que decir que fué un acierto hacer el ejercicio3 de los arrays antes del segundo, porque en este ejercicio se hace uso de la función *array.filter* y *array.map* y me sirvio de ayuda haberla ya practicado.

No he realizado la mejora del ejercicio2, el apartado G (actualizar un gasto concreto) por falta de tiempo.



## **EJERCICIO1**
Ha sido lo que más me ha costado, pues el uso de la asincronía es algo novedoso para mi. Aún así, revisando y comentando el ejercicio ahora al final, lo he visto fácil. Es porque ahora comprendo mejor, bastante bien el uso de promesas, async/await. Aún así, creo que no lo domino al 100%.

El código está comentado. No se si es lo que se pedía, pero he intentado ceñirme al enunciado. 

En el último ejercicio, *Ejer1-d.js* de ejecución en paralelo, lo he resuelto de dos maneras:
- usando una función asincrona *buscar(objeto)* y llamándola dos veces.
- usando Promise.all

## **EJERCICIO3**
Este ejercicio lo hice en segundo lugar y me resulto largo y relativamente fácil. Quizás, tuve más dificultad con la primera función, la de *array.map*, sobre todo porque no uso mucho las funciones flecha y no estaba acostumbrado a usar funciones como parámetros. Ahora creo que ya lo domino.Una vez hecho el primer grupo de pruebas, el resto me salió fácil, cuestión de tiempo. 

El último ejercicio fue largo, pero poco a poco fuí sacando las funciones. Me ha servido mucho para dominar bien los arrays y los objetos, un ejercicio largo pero muy bueno para aprender.

Al final, **he conseguido pasar todos los 47 test**. 

La instalación y uso de _mocha_ fué fácil. En otra asignatura del master ya hemos usado otro software de pruebas, por lo que estaba familiarizado.

## **EJERCICIO2**
### IMPORTANTE
Cuando hice el ejercicio, cambíe TODO por TRANSACCION. Mi app maneja transacciones, en lugar de usar EXPENSE. Los nombre de los ficheros son _transaccion.modelo.js_, _transaccion.controlador.js_, _transaccion.vista.js_, _transaccion.servicio.js_, y la lista de transacciones es la variable llamada _transacciones_.

```js
class Transaccion {
    //construtor y métodos
}
```
```js
this.transacciones = (JSON.parse(localStorage.getItem('transactions')) || []).map(
            transaccion => new Transaccion(transaccion)
        );
```


### RESOLUCION

Antes de empezar a hacer este ejercicio, pensaba que me iba a costar más. Quizás, tenía respeto por usar una aplicación con el patrón MVC.

Primero dediqué el tiempo suficiente a comprender bien el ejercicio TODO. Una vez comprendido, me cree las carpetas y archivos del modelo, servicio, vista y controlador. 

Fui poco a poco sancando cada archivo, usando el código que me proporcionaba el archivo original _script.js_

Primero me centré en añadir una nueva transacción, el ADD, en guardar bien la transacción, mirando la consola del navegador y el local storage del navagador. La vista no la actualizaba aún. Algún elemento difería, como era el guardado en localstorage. No usé la función `updateLocalStorage()` del ejemplo y seguí el modelo del TODO, usando la función `_commit(transacciones)`.

Una vez hecho, me centré en la vista, en mostrar las transacciones manejando el DOM. Copié mucho código de funciones ya programadas. Algun elemento difería.

Finalmente, a la hora de borrar una transacción, si que me encontré que el ejemplo original asignaba en el HTML dinamicamente una función `removeTransaction()` al evento on-click. Quise hacerlo como el ejemplo TODO y separar la vista del servicio totalmente, creando el manejador para el borrado de la transacción.

```html
<!-- codigo html generado en el ejemplo original para el botón de borrado  -->
<button class="delete-btn" onclick="removeTransaction(58085646)">x</button>
```

```html
<!-- codigo del boton borrado usando MVC  -->
<button class="delete-btn" id="58085646">x</button>
```
Todo funcionaba correctamente, para mi satisfacción.