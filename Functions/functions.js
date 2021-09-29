//------------------------FUNCTION DEFINITIONS EXPLAINED----------------------------
// - All functions are treated as Objects, therefore they have methods and properties
// - Hosting means that function could be used before its definition. 


// (1.) function declaration -- It has HOISTING ------------------------->
function miFuncionUno (a,b){
    console.log("Suma: "+ (a+b));
    // "arguments" is a method of objects.
    console.log(arguments);
    // "arguments.length" Number of arguments that enter the function. Can only be used inside the function.
    console.log(arguments.length);  
    // "arguments[0]" Accesses the firtst argument position.
    console.log(arguments[0]); 
}

// The function is called and it print the result itself.    
 miFuncionUno(2,3);




let miFincionTexto = miFuncionUno.toString();  // Imprime la definicion de la funcion. (metodos-variables) 
console.log(miFincionTexto);




// (2.) function declaration -- It has HOISTING ------------------------->
function miFuncionDos (a,b){
    return (a+b);
}

// The function called needs a variable to receive the value!
let restultadoDos = miFuncionDos(2,3);
console.log(restultadoDos);



// (3.)  "Function TIPO EXPRESION" (anonymous) ------------------------->
// The function doesn't have a name. WARNING!! it needs (;) at the end of the line.
let sum = function(a,b) {
    return(a+b);};

// "sum(2,3)" The variable SUM works like a function. 
let restultadoTres = sum(2,3);
console.log(restultadoTres);



// (4.) Function SELF-INVOKING -- It isn't reusable ------------------------->
// The function needs Parenthesis 
// The function is called afther its definition just using (3,4). Is not reusable!!
(function (a,b){
    console.log("ejecutando la funcion: " + (a+b));
})(3,4);



// (5.) Arrow Function      ------------------------->

const  miFuncionFlecha = (a,b) => (a+b);
let resultadoCinco = miFuncionFlecha(2,3);
console.log(resultadoCinco);



// Sixth function declaration with default values  ------------------------->
function miFuncionDefault (a = 4, b = 5 ){
    console.log("Suma: "+ (a+b));
    console.log(arguments.length)   // numero de argumentos que ingresan a la funcion
                                    // solo puede ser usada dentro de la funcion  

    console.log(arguments[0]);      // accede al primer argumento posicion 0
    
}

miFuncionDefault();


// Seventh function declaration calling more arguments ------------------------->
function miFuncionDefault (a = 4, b = 5 ){
    console.log("Suma: "+ (a+b));
    console.log(arguments.length)   // numero de argumentos que ingresan a la funcion
                                    // solo puede ser usada dentro de la funcion  

    console.log(arguments[2]);      // accede al primer argumento posicion 0
    
}

miFuncionDefault(1,2,4);


// Eigth function without parameters      ------------------------->

let resultadoSeis = funcionSumarTodo (5, 4, 3, 2, 1);

function funcionSumarTodo(){
    let suma = 0;
    for(let i=0; i<arguments.length;i++){
        suma += arguments[i];
    }
    return suma;
}

console.log(resultadoSeis);

