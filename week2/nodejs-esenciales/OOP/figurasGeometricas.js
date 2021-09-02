class FiguraGeometrica{
    constructor(base, altura){  // Solo se puede un solo constructor
        this.base = base;
        this.altura = altura;
    }
}

/*To add getters and setters in the class, use the get and set keywords. */
class Triangulo extends FiguraGeometrica{
    constructor(base, altura){
        super(base,altura);
    }

    get area(){
        return this.calcArea();
    }

    calcArea(){
        return (this.base * this.altura)/2;
    }
}

class Rectangulo extends FiguraGeometrica{
    constructor(base, altura){
        super(base,altura);
    }

    calcArea(){
        return (this.base*this.altura);
    }
}

class Cuadrado extends FiguraGeometrica{
    constructor(lado){
        //super(lado,lado);
        super();    // JS me lo permite
        this.lado = lado;
    }

    calcArea(){
        return (this.lado * this.lado);  // si jala por la clase padre
    }
}

let triangulo = new Triangulo(2,5);
let rectangulo = new Rectangulo(4,7);
let cuadrado = new Cuadrado(2);

console.log(triangulo.area);
console.log(rectangulo.calcArea());
console.log(cuadrado.calcArea());