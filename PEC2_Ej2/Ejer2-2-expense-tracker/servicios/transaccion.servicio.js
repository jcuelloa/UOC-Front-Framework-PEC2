/**
 * @class TransaccionServicio
 *
 * Maneja los datos de la app.
 */
class TransaccionServicio {
    constructor() {
        this.transacciones = (JSON.parse(localStorage.getItem('transactions')) || []).map(
            transaccion => new Transaccion(transaccion)
        );
    }

    //***** ESTA PARTA TE COMPRENDO PERO ES LA QUE VEO MÁS RARA 
    bindTransaccionListChanged(callback) {
        this.onTransaccionListChanged = callback;
    }

    _commit(transacciones) {
        this.onTransaccionListChanged(transacciones);
        localStorage.setItem('transactions', JSON.stringify(transacciones));
    }
    //****************************** */

    addTransaccion(texto, cantidad) {
        this.transacciones.push(new Transaccion({ undefined, texto, cantidad }));

        this._commit(this.transacciones);
    }

    deleteTransaccion(_id) {

        this.transacciones = this.transacciones.filter(transaccion =>
            transaccion.id !== +_id  //aquí _id es una cadena. Lo convierto a numero
        );
        //this.transacciones = this.transacciones.filter(({ id }) => id !== _id);

        this._commit(this.transacciones);
    }


}