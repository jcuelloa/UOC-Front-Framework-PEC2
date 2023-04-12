# Ejercicio2 - Pregunta sobre ambito de this


**this** dentro de una función definida con fat arrow (o una función que va dentro de otra función) no se refiere o no tiene ámbito en el objeto padre. Su ambito pasa a ser el **ambito global**, el más externo, y en ese punto, no hay ningún objeto para referenciar con el *this*.
Por eso hay que llevar cuiadado a donde se usa **this**.


