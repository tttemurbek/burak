/*H2-TASK: 

Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
MASALAN: getDigits("m14i1t") return qiladi "141"

@steezyworld MITASK
*/

function getDigits(str: string): string {
  let ans = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "0" && str[i] <= "9") {
      ans.push(str[i]);
    }
  }
  return ans.join("");
}

console.log(getDigits("m14i1t"));
