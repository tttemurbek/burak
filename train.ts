/*
ZD-TASK:

Shunday function yozing, uni number, array va number parametrlari bolsin va berilgan 1-parametr numberga teng indexni array ichidan topib 3-parametrdagi raqam bilan almashtirib yangilangan arrayni qaytarsin
MASALAN: changeNumberInArray(1, [1,3,7,2], 2) return [1,2,7,2]
*/

function changeNumberInArray(
  index: number,
  arr: number[],
  newValue: number
): number[] {
  let newArray = [...arr];

  if (index >= 0 && index < newArray.length) {
    newArray[index] = newValue;
  }

  return newArray;
}

console.log(changeNumberInArray(1, [1, 3, 7, 2], 4));
