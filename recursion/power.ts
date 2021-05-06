  //Given base and n that are both 1 or more,
  // compute recursively (no loops) the value of base to the n power, so powerN(3, 2) is 9 (3 squared).


function powerN(base: number, n: number): number {
    // base = 4, n = 3
    if (n === 0) {
      // not true
      return 1;
    } else {
      return base * powerN(base, n - 1); // return 4 * powerN(4, 2)
    }
  }
  
  // iterative
  
  function powerNr(base: number, n: number): number {
    let result = 1;
    while (n--) {
      result *= base;
    }
    return result;
  }
  
  console.log(powerN(4, 3));