/* 
ZB-TASK:

Shunday function yozing, uni 2 ta number parametri bolsin va berilgan sonlar orasidan random raqam return qilsin
MASALAN: randomBetween(30, 50) return 45
*/

function randomBetween(first: number, second: number): number {
  return Math.ceil(Math.random() * (second - first + 1)) + first;
}

console.log(randomBetween(25, 39));
