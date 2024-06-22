function reverseSentence(str: string): string {
  const words: string[] = str.split(" ");

  const reversedWords: string[] = [];

  for (let i = 0; i < words.length; i++) {
    const reversedWord: string = words[i].split("").reverse().join("");
    reversedWords.push(reversedWord);
  }

  return reversedWords.join(" ");
}

console.log(reverseSentence("i love coding"));
