//------------------------FUNCTION DEFINITIONS EXPLAINED----------------------------
// - All functions are treated as Objects, therefore they have methods and properties
// - Hosting means that function could be used before its definition. 


// (1.) function declaration -- It has HOISTING ------------------------->
function miFuncionUno (a,b){
    console.log("Suma: "+ (a+b));
    // "arguments" is a property of objects but functions work as objects
    console.log(arguments);
    // "arguments.length" Number of arguments that enter the function. Can only be used inside the function.
    console.log(arguments.length);  
    // "arguments[0]" Accesses the firtst argument position.
    console.log(arguments[0]); 
}

// The function is called and it print the result itself.    
 miFuncionUno(2,3);


// "toString" is a method of objects but functions work as objects
// "toString" print literaly the code of the function (its methods, its variables) print the function itself
let miFincionTexto = miFuncionUno.toString();  
console.log(miFincionTexto);




// (2.) function declaration WITH RETURN-- It has HOISTING ------------------------->
function miFuncionDos (a,b){
    return (a+b);
}

// The function called needs a variable to receive the value!
let restultadoDos = miFuncionDos(2,3);
console.log(restultadoDos);



// (3.) Function SELF-INVOKING -- It isn't reusable ------------------------->
// The function needs Parenthesis 
// The function is called afther its definition just using (3,4). Is not reusable!!
(function (a,b){
    console.log("ejecutando la funcion: " + (a+b));
})(3,4);



// (4.)  "Function TIPO EXPRESION" (anonymous) ------------------------->
// The function doesn't have a name. WARNING!! it needs (;) at the end of the line.
let sum = function(a,b) {
    return(a+b);};

// "sum(2,3)" The variable SUM works like a function. 
let restultadoTres = sum(2,3);
console.log(restultadoTres);



// (5.) Function declaration WITH DEFAULT VALUES  ------------------------->
let myFuncionDefault = function (a = 4, b = 5){
  
    console.log(arguments[0]);
    return (a+b);};

// The function is called whitout arguments because there are default values (4,5)
resultDefault = myFuncionDefault(); 
console.log(resultDefault);



// (6.)  function declaration CALLING MORE ARGUMENTS THAN IT HAS ------------------------->
let miFuncionDefault = function (a = 4, b = 5){

    //The function assigns the third value "4" into poscition two even without parameter ( 
    console.log(arguments[2]);
    return (a+b);};      
}

miFuncionDefault(1,2,4);


// (7.) function WITHOUT PARAMETERS      ------------------------->

let resultadoSeis = funcionSumarTodo (5, 4, 3, 2, 1);

function funcionSumarTodo(){
    let suma = 0;
    for(let i=0; i<arguments.length;i++){
        suma += arguments[i];
    }
    return suma;
}

console.log(resultadoSeis);


// (8.) Function ARROW TIPE      ------------------------->

// Is used CONST because It gonna save the reference of the function. That reference should't change. 
// It doesn't need the word FUNCTION and it doesn't need RETURN
const  miFuncionFlecha = (a,b) => (a+b);
let resultadoCinco = miFuncionFlecha(2,3);
console.log(resultadoCinco);




