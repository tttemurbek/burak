/* K-TASK: 

Shunday function yozing, u string qabul qilsin va string ichidagi unli harflar sonini qaytarsin.
MASALAN: countVowels("string") return 1;

@MITASK*/

function countVowels(str: string) {
  let vowelsCount = 0;

  for (var i = 0; i <= str.length - 1; i++) {
    if (
      str.charAt(i) == "a" ||
      str.charAt(i) == "e" ||
      str.charAt(i) == "i" ||
      str.charAt(i) == "o" ||
      str.charAt(i) == "u"
    ) {
      vowelsCount += 1;
    }
  }
  return vowelsCount;
}

console.log(countVowels("string"));
