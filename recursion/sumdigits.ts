
  //Given a non-negative integer n, return the sum of its digits recursively (without loops).


  
  function sumDigits(a: number) {
    let remainder = a % 10;
    let sum = remainder;
    if (a >= 10) {
      let rest = Math.floor(a / 10);
      sum += sumDigits(rest);
    }
    console.log(sum);

    return sum;
  }
