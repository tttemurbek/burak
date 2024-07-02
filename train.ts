// P-TASK:

// Shunday function yozing, u object qabul qilsin va arrayni object arrayga otkazib arrayni qaytarsin qaytarsin.
// MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]

function objectToArray(obj: object): [any, any][] {
  return Object.entries(obj);
}

console.log(objectToArray({ a: 10, b: 20 }));
