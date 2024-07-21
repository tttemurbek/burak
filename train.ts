/* 
X-TASK:

 Shunday function yozing, uni object va string parapetrlari bolsin. Function string parametri object ichida necha marotaba takrorlanganligini qaytarsin (nested object bolsa ham sanasin)
 MASALAN: countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model') return 2
*/

function countOccurrences(obj: any, key: any) {
  let count = 0;

  function recurse(currentObj: any) {
    if (currentObj && typeof currentObj === "object") {
      Object.keys(currentObj).forEach((prop) => {
        if (prop === key) {
          count++;
        }
        recurse(currentObj[prop]);
      });
    }
  }

  recurse(obj);
  return count;
}

console.log(
  countOccurrences(
    { model: "Bugatti", steer: { model: "HANKOOK", size: 30 } },
    "model"
  )
);
