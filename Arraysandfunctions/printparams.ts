// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)
"use strict";


function printParams(a,b,c,d,e,f){
    for(let i: number = 0; i < arguments.length; i++){
        console.log(arguments[i]);
    }

}
printParams(1, 2, 3, 4, 5, 6);