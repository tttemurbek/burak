/**
 ZG-TASK:

Shunday function yozing, u berilgan string parametrni snake casega otkazib qaytarsin. 
MASALAN: capitalizeWords('name should be a string') return 'name_should_be_a_string'
 */

function capitalizeWords(input: string): string {
  return input.toLowerCase().replace(/\s+/g, "_");
}

console.log(capitalizeWords("name should be a string"));
