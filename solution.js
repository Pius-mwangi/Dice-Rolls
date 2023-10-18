function solution(A, F, M) {
    const N = A.length;
    const expectedSum = M * (N + F);
  
    let sumOfKnownRolls = 0;  // Start with a total of 0.

    for (let i = 0; i < A.length; i++) {
      sumOfKnownRolls = sumOfKnownRolls + A[i];  // Add each number in the array to the total.
    }
    let sumOfMissingRolls = expectedSum - sumOfKnownRolls;
  
    if (sumOfMissingRolls < F || sumOfMissingRolls > F * 6) {
      return [0];

    }
    //not complete still working 
  
  }
  
 