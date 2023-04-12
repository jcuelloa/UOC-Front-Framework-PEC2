/**
 * @class TransaccionControlador
 *
 * Enlaza la vista con el servicio
 *
 * @param servicio
 * @param vista
 */
class TransaccionControlador {
  constructor(servicio, vista) {
    this.servicio = servicio;
    this.vista = vista;

    // Explicit this binding
    this.servicio.bindTransaccionListChanged(this.onTransaccionListChanged);
    this.vista.bindAddTransaccion(this.handleAddTransaccion);
    this.vista.bindDeleteTransaccion(this.handleDeleteTransaccion);

    // Display initial todos
    this.onTransaccionListChanged(this.servicio.transacciones);
  }

  onTransaccionListChanged = transacciones => {
    this.vista.displayTransacciones(transacciones);
  };

  handleAddTransaccion = (transaccionText, transaccionCantidad) => {
    this.servicio.addTransaccion(transaccionText, transaccionCantidad);
  };

  handleDeleteTransaccion = id => {
    this.servicio.deleteTransaccion(id);
  };




}