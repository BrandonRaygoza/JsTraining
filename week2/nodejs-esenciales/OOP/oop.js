
class Animal{
    constructor(categoria){
        this.categoria = categoria;
    }
}

class CuentaBancaria{
    constructor(saldo){
        this.saldo = saldo;
    }

    deposito(cantidad){
        this.saldo+=cantidad;
    }

    retiro(cantidad){
        this.saldo-=cantidad;
    }
}

class TarjetaDeCredito extends CuentaBancaria{
    constructor(saldo, fechaCorte, pagoMinimo){
        super(saldo);
        this.fechaCorte=fechaCorte;
        this.pagoMinimo=pagoMinimo;
    }
}

var main = function(){
    let perro = new Animal("perro");
    let gato = new Animal("gato");

    console.log(perro.categoria);
    console.log(gato.categoria);

    let cuenta1 = new CuentaBancaria(5000);
    cuenta1.deposito(1000);
    console.log(cuenta1.saldo);
}

let cuenta1 = new CuentaBancaria(5000);
main();

