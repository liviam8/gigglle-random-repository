let mystring: string= 'I\'m a "fun ninja" string';

console.log(mystring);
console.log(mystring.length);
console.log(mystring.toUpperCase());
console.log(mystring.toLowerCase());
console.log(mystring.indexOf("string")); //visszaadja, hogy hanyadik helyen van a string szó 
console.log(mystring.indexOf("ninja")); //-1 et fog visszaadni, mert nincs ilyen 



if (mystring.indexOf("ninja") ===-1 ) {
 
    console.log("the word ninja is not in the string");

} else  {

    console.log ("the word ninja starts at postition " + mystring.indexOf ("ninja"));


}



let string1= "abc";
let string2 = "ABC";

console.log(string1 === string2) ;
console.log(string1.toLowerCase === string2.toLowerCase) ;

console.log(string1 === string2) ;


