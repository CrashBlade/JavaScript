
// Creating variable ------------>
let x = 10;
console.log(x.length);


// Creating objetct 1st method  ------------>
let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.apellido);



// Printing complete Object
console.log(persona);

// Using function inside Object 
console.log(persona.nombreCompleto());


//Adding new atributes.
persona.tel = '55544333'
console.log(persona);


// Deleting exist atributes
delete persona.tel;
console.log(persona);


//for in -- shows object data fields. 
for( nombrePropiedad in persona){
    console.log( nombrePropiedad );
    console.log( persona[nombrePropiedad]);
}


// Creating object 2nd method ---------->

let persona2 = new Object();

persona2.nombre = 'Carlos';
persona2.direccion = 'Saturno 15';
persona2.tel = '55443322';

console.log( persona2.tel );

// Printin object diferent ways.
// 1. Concat each value (Classic)
console.log( persona.nombre + ', ' + persona.apellido);

// 2. for in 
for( nombrePropiedad in persona){
    console.log( persona[nombrePropiedad]);
}

// 3. Using property VALUES 
let personaArray = Object.values( persona );
console.log( personaArray );

// 4. Using JASON Object.
let personaString = JSON.stringify( persona );
console.log( personaString );




// Creating object 3rd method ---------->

//CONSTRUCTOR FUNCTION Type Object Individuo
function Individuo(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;

    this.nombresCompletos = function(){
        return this.nombre + ' ' + this.apellido;
    }
}


// Object declare and iniciatilization. 
let padre = new Individuo('Juan', 'Perez', 'jperez@mail.com');
console.log( padre );
console.log(padre.codigoPostal);


Individuo.prototype.codigoPostal = '00000';


// Object declare and inicialization
let madre = new Individuo('Laura', 'Quintero', 'lquintero@mail.com');
console.log( madre );

// Updating data member or property.
padre.nombre = 'Carlos';

// Printing the whole object
console.log( padre );
console.log( madre );

// Using function embebed "CONSTRUCTOR FUNCTION" 
console.log(padre.nombresCompletos());
console.log(madre.nombresCompletos());


