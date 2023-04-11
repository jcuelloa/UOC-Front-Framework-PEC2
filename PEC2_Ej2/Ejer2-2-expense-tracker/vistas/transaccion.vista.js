/**
 * @class GastosVista
 *
 * Muestra los gastos manipulando el DOM.
 */
class TransaccionVista {
    constructor() {
        this.balance = document.getElementById('balance');
        this.money_plus = document.getElementById('money-plus');
        this.money_minus = document.getElementById('money-minus');
        this.list = document.getElementById('list');
        this.form = document.getElementById('form');
        this.text = document.getElementById('text');
        this.amount = document.getElementById('amount');

    }

    //Moatramos el historial de transacciones
    displayTransacciones(transacciones) {

        // Debugging
        console.log("display transacciones");
        console.log(transacciones);


        // Borramos todas las transacciones para volver a pintarlas
        while (this.list.firstChild) {
            this.list.removeChild(this.list.firstChild);
        }

        //Mostramos todas las transacciones
        transacciones.forEach((element) => (this.addTransactionDOM(element)));

        // for (let i = 0; i < transacciones.length; i++) {
        //     //console.log("transaccion " + i);
        //     //console.log(transacciones[i]);
        //     this.addTransactionDOM(transacciones[i]);
        // }

        this.updateValues(transacciones);

        //updateLocalStorage();

    }



    // Add transactions to DOM list
    addTransactionDOM(transaction) {
        // Get sign
        const sign = transaction.cantidad < 0 ? '-' : '+';

        const item = document.createElement('li');

        // Add class based on value
        item.classList.add(transaction.cantidad < 0 ? 'minus' : 'plus');

        //****** ORIGINAL, PASAMOS DIRECTAMENTE LA FUNCIÓN PARA ONCLICK */
        // item.innerHTML = `
        // ${transaction.texto} <span>${sign}${Math.abs(
        //     transaction.cantidad
        // )}</span> <button class="delete-btn" onclick="removeTransaction(${transaction.id
        //     })">x</button>
        // `;

        //****** UTILIZANDO EVENTOS, VAMOS A AÑADIR EL ID */
        item.innerHTML = `
        ${transaction.texto} <span>${sign}${Math.abs(
            transaction.cantidad
        )}</span> <button class="delete-btn" id="${transaction.id
            }">x</button>
        `;

        this.list.appendChild(item);
    }

    // Update the balance, income and expense
    updateValues(transactions) {

        const amounts = transactions.map(transaction => transaction.cantidad);

        const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

        const income = amounts
            .filter(item => item > 0)
            .reduce((acc, item) => (acc += item), 0)
            .toFixed(2);

        const expense = (
            amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
            -1
        ).toFixed(2);

        this.balance.innerText = `$${total}`;
        this.money_plus.innerText = `$${income}`;
        this.money_minus.innerText = `$${expense}`;
    }




    // _resetInput() {
    //     this.text.value = "";
    //     this.amount.value ="";
    // }

    bindAddTransaccion(handler) {
        this.form.addEventListener("submit", event => {
            event.preventDefault();

            if (this.text.value.trim() === '' || this.amount.value.trim() === '') {
                alert('Please add a text and amount');
            } else {
                handler(this.text.value, this.amount.value);
                this.text.value = "";
                this.amount.value = "";
                //this._resetInput();
            }

        });
    }

    bindDeleteTransaccion(handler) {
        this.list.addEventListener("click", event => {
            if (event.target.className === "delete-btn") {

                console.log("intentanto borrar transaccion");

                const id = event.target.id;
                console.log("id a borrar:" + id);

                handler(id);
            }
        });
    }




}