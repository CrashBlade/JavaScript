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

    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    }

    nombreCompletoSobrescrito(){
        return this._nombre + ' ' + this._apellido;
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


    //Overwritten method nombreCompelto 
    nombreCompletoSobrescrito(){
        return super.nombreCompleto() + ', ' + this._departamento;
    }


      //Overewritten class Father (Object) method 
      toString(){
        //Applies polymorphism (multiple forms EXCECUTION TIME)
        //if EMPLEADO VARIABLE calls this method, it calls nombreCompletoSobrescrito from EMPLEADO CLASS
        //if PERSON VARIABLE calls this method, it calls nombreCompletoSobrescrito from PERSONA CLASS
        return this.nombreCompletoSobrescrito();
    }
}
}

let persona1 = new Persona('Juan', 'Perez'); // Calling Set Method
console.log( persona1 );

let empleado1 = new Empleado('Maria', 'Jimenez', 'Sistemas');
console.log( empleado1 );
console.log( empleado1.nombre ); // Calling method GET, it doesn't need "()"

console.log( empleado1.nombreCompleto() ); // Inherited method nombreCompleto, it needs "()"

console.log( empleado1.nombreCompletoSobrescrito() ); // Inherited method nombreCompletoSobrescrito is overwriten

console.log( empleado1.toString()); // calls nombreCompletoSobrescrito from EMPLEADO CLASS
console.log( persona1.toString()); // calls nombreCompletoSobrescrito from PERSONA CLASS
