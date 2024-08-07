/**
ZF-TASK:

Shunday function yozing, uni string parametri bolsin. String ichidagi har bir sozni bosh harflarini katta harf qilib qaytarsin lekin 1 yoki 2 harfdan iborat sozlarni esa oz holicha qoldirsin.
MASALAN: capitalizeWords('name should be a string') return 'Name Should be a String'
 */

function capitalizeWords(input: string): string {
  return input
    .split(" ")
    .map((word) => {
      if (word.length > 2) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
      return word;
    })
    .join(" ");
}

console.log(
  capitalizeWords(
    "everything around you that you call life was made up by people that were no smarter than you"
  )
);
