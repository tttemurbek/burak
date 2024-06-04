/* G-TASK: 

Shunday function tuzingki unga integerlardan iborat array pass bolsin va function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.

@MITASK
*/

function getHighestIndex(getNumber: number[]) {
  let ans: any = 0;

  for (let i = 0; i < getNumber.length; i++) {
    if (getNumber[i] > ans) {
      ans = getNumber[i];
    }
  }
  if (ans >= 10) {
    let showNumber = ans.toString().split("").join("");
    console.log(parseInt(showNumber[1]));
  } else {
    console.log("Please, try again");
  }
}

getHighestIndex([5, 21, 12, 21, 8]);
