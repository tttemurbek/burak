/* J-TASK: 

Shunday function yozing, u string qabul qilsin va string ichidagi eng uzun sozni qaytarsin.
MASALAN: findLongestWord("I come from Uzbekistan") return "Uzbekistan"

@MITASK
*/

// JavaScript code to for the above approach..

function findLongestWord(str: string) {
  const words = str.split(" ");

  const wordLengths = words.map((word) => ({ word, length: word.length }));

  const longestWord = wordLengths.reduce((before, current) => {
    if (before.length > current.length) {
      return before;
    } else {
      return current;
    }
  });

  return longestWord.word;
}

console.log(
  findLongestWord(
    "Hello guys this is geeksforgeeks where geeksforgetks learn programming"
  )
);
