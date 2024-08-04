/** 
 * ZE-TASK:

Shunday function yozing, uni  string parametri bolsin. String ichida takrorlangan harflarni olib tashlab qolganini qaytarsin
MASALAN: removeDuplicate('stringg') return 'string'
 */


function removeDuplicate(input: string): string {
  const charMap = new Map<string, boolean>();
  const result: string[] = [];

  for (const char of input) {
    if (!charMap.has(char)) {
      charMap.set(char, true);
      result.push(char);
    }
  }

  return result.join('');
}

console.log(removeDuplicate("Helllllloworldddddd"));

