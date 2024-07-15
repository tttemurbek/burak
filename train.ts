/* 
U-TASK:

Shunday function yozing, uni number parametri bolsin va 0 dan berilgan parametrgacha bolgan oraliqdagi faqat toq sonlar nechtaligini return qilsin
MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;
*/

function sumOdds(num: number): number {
  if (num >= 0 && num % 2 === 0) {
    let counter = num / 2;
    return counter;
  } else {
    let coutner = (num - 1) / 2;
    return coutner;
  }
}

console.log(sumOdds(12));
