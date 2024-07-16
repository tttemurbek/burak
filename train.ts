/* 
V-TASK:

Shunday function yozing, uni string parametri bolsin va stringdagi harf va u harf necha marta takrorlangani sonidan tashkil topgan object qaytarsin.
MASALAN: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}
*/

function countChars(str: string): { [key: string]: number } {
  const charCounter: { [key: string]: number } = {};

  for (let char of str) {
    if (charCounter[char]) {
      charCounter[char]++;
    } else {
      charCounter[char] = 1;
    }
  }

  return charCounter;
}

console.log(countChars("absdsdsajhwqirohfbjhdabszdniqlkafm"));
