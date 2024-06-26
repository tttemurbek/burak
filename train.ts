/* M-TASK: 

Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin va array ichidagi har bir raqam uchun raqamni ozi va hamda osha raqamni kvadratidan tashkil topgan object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin.
MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}];

@MITASK
*/

function getSquareNumbers(
  input: number[]
): { number: number; square: number }[] {
  let result: { number: number; square: number }[] = [];

  for (let i = 0; i < input.length; i++) {
    result.push({
      number: input[i],
      square: input[i] * input[i],
    });
  }

  return result;
}

console.log(getSquareNumbers([1, 88, 3]));
