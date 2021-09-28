
// Firts function declaration -- It has HOISTING ------------------------->
function miFuncionUno (a,b){
    console.log("Suma: "+ (a+b));
    console.log(arguments.length)   // numero de argumentos que ingresan a la funcion y solo puede ser usada dentro de la funcion  
    console.log(arguments[0]);      // accede al primer argumento posicion 0
}

miFuncionUno(2,3);    // Se llama a la funcion y ella imprime el resultado ella misma. 

let miFincionTexto = miFuncionUno.toString();  // Imprime la definicion de la funcion. (metodos-variables) 
console.log(miFincionTexto);




// Second function declaration -- It has HOISTING ------------------------->
function miFuncionDos (a,b){
    return (a+b);
}

let restultadoDos = miFuncionDos(2,3);
console.log(restultadoDos);



// Third "Function Type Expression" (anonymous) ------------------------->
let sumar = function(a,b) {
    return(a+b);
};

let restultadoTres = sumar(2,3);
console.log(restultadoTres);



// Fourth Function Self-Invoking -- It isn't reusable ------------------------->
(function (a,b){
    console.log("ejecutando la funcion: " + (a+b));
})(3,4);



// Fift Arrow Function      ------------------------->
const   miFuncionFlecha = (a,b) => (a+b);
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

