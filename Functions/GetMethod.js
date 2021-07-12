
// Using GET method instead of FUNCTION
let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    idioma: 'es',

    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    },

    get lang(){
        return this.idioma.toUpperCase();
    },

    set lang( language ){
        this.idioma = language.toUpperCase();
    }
}

// Using functions inside the Object Persona 
console.log( persona.nombreCompleto );

console.log( persona.lang );     // "persona.lang" uses GET
persona.lang = 'en';            // "persona.lang =" uses SET  
console.log(persona.lang );


//Using classic FUNCTION method
let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}
// Using function inside Object 
console.log(persona1.nombreCompleto());


