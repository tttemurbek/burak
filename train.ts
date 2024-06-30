/* validation types
    frontend
    backend
    schema
    dto
*/

/*requst types
    traditional api (form  POST )
    rest api
    graphql api
 */

/* O-TASK:

Shunday function yozing, u har xil valuelardan iborat array qabul qilsin va array ichidagi sonlar yigindisini hisoblab chiqqan javobni qaytarsin.
MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]) return 45
*/

function calculateSumOfNumbers(arr: any[]): number {
  return arr.reduce((sum, current) => {
    if (typeof current === "number") {
      return sum + current;
    }
    return sum;
  }, 0);
}

console.log(calculateSumOfNumbers([10, "10", { son: 10 }, true, 35]));
