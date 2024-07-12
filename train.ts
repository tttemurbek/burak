/* 
T-TASK:

Shunday function yozing, u sonlardan tashkil topgan 2 ta array qabul qilsin va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin
MASALAN: mergeSortedArrays([0,3,4,31], [4,6,30]); return [0,3,4,4,6,30,31]
*/

function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
  let returnArray: number[] = [];
  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      returnArray.push(arr1[i]);
      i++;
    } else {
      returnArray.push(arr2[j]);
      j++;
    }
  }

  for (; i < arr1.length; i++) {
    returnArray.push(arr1[i]);
  }

  for (; j < arr2.length; j++) {
    returnArray.push(arr2[j]);
  }

  return returnArray;
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
