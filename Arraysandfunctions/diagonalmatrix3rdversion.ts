 // - Create a two dimensional list dynamically with the following content.
 //   Note that a two dimensional list is often called matrix if every
 //   internal list has the same length.
 //   Use a loop!
 //
 //   1 0 0 0
 //   0 1 0 0
 //   0 0 1 0
 //   0 0 0 1
 //
 //   Its length should depend on a variable
 //  
 // - Print this two dimensional list to the output

 
 let lenghtVar: number = 4;
 let matrixDiag:number[][] =[];
 for (let ix = 0; ix < lenghtVar; ix++){
    matrixDiag.push([]);
     for (let iy = 0; iy < lenghtVar; iy++) {
         if (iy===ix) {
             matrixDiag[ix].push(1);        
         } else {
            matrixDiag[ix].push(0) ;        
         }
     }
 }
 console.log(matrixDiag);