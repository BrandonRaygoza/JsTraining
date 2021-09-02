class Persona{
    constructor(firstName, lastName, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    printData(){
        console.log(this);
    }
}

let persona = new Persona("Juan", "Escutia","juanlover@gmail.com");
let persona2 = new Persona("Juan", "Escutia","juanlover@gmail.com");
let persona3 = new Persona("Juan", "Escutia","juanlover@gmail.com");

persona.printData();

// string ->  JSON
let personas = [];
personas.push(persona);
personas.push(persona2);
personas.push(persona3);
console.log(JSON.stringify(persona));
console.log(JSON.stringify(personas));

// JSON -> string
var persona4 = '{"firstName": "Juan", "lastName": "Escutia", "email": "juanlover@gmail.com"}';
console.log(JSON.parse(persona4));