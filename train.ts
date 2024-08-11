/**
 ZH-TASK:

Shunday function yozing, u berilgan array parametrni ichidagi eng katta raqamgacha tushib qolgan raqamlarni bir arrayda qaytarsin. 
MASALAN: findDisappearedNumbers([1, 3, 4, 7]) return [2, 5, 6]
 */

function findDisappearedNumbers(nums: number[]): number[] {
  const maxValue = Math.max(nums.length, ...nums);
  const present = new Array(maxValue);

  for (let num of nums) {
    present[num - 1] = true;
  }

  const missingNums = [];
  for (let i = 0; i < maxValue; i++) {
    if (!present[i]) {
      missingNums.push(i + 1);
    }
  }

  return missingNums;
}

console.log(findDisappearedNumbers([1, 5, 7]));
