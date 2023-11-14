/*
Objeto "Cuenta Bancaria": 
Crea un objeto llamado cuentaBancaria 
con propiedades como saldo y titular,
 y métodos como depositar y retirar que actualicen el saldo.

*/

let cuentaBancaria = {
    titular: 'Juan mercado',
    saldo: 45.500,
    depositar : (nuevoSaldo) => {
        this.saldo += nuevoSaldo
    },
    retirar : (saldo) => {
        this.saldo -= saldo
    }
}