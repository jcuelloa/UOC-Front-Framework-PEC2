/**
 * @class Transaccion
 *
 * Modelo de datos anémico, sin funcionalidad. Representa una transaccion
 *
 */
class Transaccion {

    constructor({ id, texto, cantidad }) {
        if (id === undefined) {
            this.id = this.generateID();
        } else {
            this.id = id;
        }
        this.texto = texto;
        this.cantidad = +cantidad;
    }

    // Generate random ID
    generateID() {
        return Math.floor(Math.random() * 100000000);
    }

}