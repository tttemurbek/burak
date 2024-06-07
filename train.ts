/* H-TASK: 

shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
MASALAN: getPositive([]) return qiladi "12"

@MITASK
*/

function getPositive(getNumber: any) {
  let ans: number[] = [];

  for (let i = 0; i < getNumber.length; i++) {
    if (getNumber[i] > 0) {
      ans.push(getNumber[i]);
    }
  }
  return ans.join("");
}

console.log(getPositive([1, -4, 2]));
