/* 
S-TASK:

Shunday function yozing, u numberlardan tashkil topgan array qabul qilsin va osha numberlar orasidagi tushib qolgan sonni topib uni return qilsin
MASALAN: missingNumber([3, 0, 1]) return 2
*/

function missingNumber(num: number[]): number {
  const n = num.length;
  let totalSum = 0;
  for (let i = 0; i <= n; i++) {
    totalSum += i;
  }

  let numSum = 0;
  for (let i = 0; i < num.length; i++) {
    numSum += num[i];
  }

  const result = totalSum - numSum;
  if (result > 0) {
    return result;
  } else {
    return -1 * result;
  }
}

// Example usage:
console.log(missingNumber([1, 0, 9]));
