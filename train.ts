/*
Y-TASK:

 Shunday function yozing, uni 2 ta array parapetri bolsin. Function ikkala arrayda ham ishtirok etgan qiymatlarni bir arrayda qaytarsin
 MASALAN: findIntersection([1,2,3], [3,2,0]) return [2,3]
*/

function findIntersection<T>(array1: T[], array2: T[]): T[] {
  const result: T[] = [];

  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j] && !result.includes(array1[i])) {
        result.push(array1[i]);
        break;
      }
    }
  }

  return result;
}

console.log(findIntersection([1, 2, 4, 3], [3, 2, 4, 0]));
