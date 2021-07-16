class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre; 
        this._apellido = apellido;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
}


// Inheritance of Persona on Empleado
class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);// Calling fathers class constructor. 
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
}

let persona1 = new Persona('Juan', 'Perez'); // Calling Set Method
console.log( persona1 );

let empleado1 = new Empleado('Maria', 'Jimenez', 'Sistemas');
console.log( empleado1 );
console.log( empleado1.nombre ); // Calling method GET, it doesn't need "()"
