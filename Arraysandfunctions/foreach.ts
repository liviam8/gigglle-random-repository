let num = [7, 8, 9];
num.forEach(function (value) {
  console.log(value);
});


let arrayfruits = ['apple', 'pear', 'melon'];
arrayfruits.forEach(function(e, i) {
    console.log(e, i);
  });
  

  ['apple', 'pear', 'melon'].forEach(function(e, i) {
    console.log(e, i);
  });
  
  var numbers = [1, 4, 9]; 
var roots = numbers.map(Math.sqrt); 
console.log("roots is : " + roots );