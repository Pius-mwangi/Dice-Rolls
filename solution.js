function solution(A, F, M) {
    const N = A.length;
    const expectedSum = M * (N + F);
  
    let sumOfKnownRolls = A.reduce((acc, roll) => acc + roll, 0);
  
    let sumOfMissingRolls = expectedSum - sumOfKnownRolls;
  
    if (sumOfMissingRolls < F || sumOfMissingRolls > F * 6) {
      return [0];
    }
  
    const results = [];
  
    function findCombinations(remainingRolls, currentCombination, currentSum) {
      if (remainingRolls === 0) {
        if (currentSum === sumOfMissingRolls) {
          results.push(currentCombination.slice());
        }
        return;
      }
  
      for (let roll = 1; roll <= 6; roll++) {
        if (currentSum + roll + (remainingRolls - 1) * 1 <= sumOfMissingRolls) {
          currentCombination.push(roll);
          findCombinations(remainingRolls - 1, currentCombination, currentSum + roll);
          currentCombination.pop();
        }
      }
    }
  
    findCombinations(F, [], 0);
  
    return results.length > 0 ? results : [0];
  }
  
  console.log(solution([3, 2, 4, 3], 2, 4));
  console.log(solution([1, 5, 6], 4, 3));
  console.log(solution([1, 2, 3, 4], 4, 6));
  console.log(solution([6, 1], 1, 1));
  console.log(solution([6], 10, 4));
  