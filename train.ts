/* R-TASK:

Shunday function yozing, u string parametrga ega bolsin. String "1+2" holatda pass qilinganda string ichidagi sonlar yigindisini number holatda qaytarsin.
MASALAN: calculate("1+3") return 4; 
*/

function calculate(str: string) {
  let result = new Function("return " + str)();
  return result;
}

console.log(calculate("1+2"));
