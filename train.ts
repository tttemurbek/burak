/* N-TASK: 

Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham, orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.
MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;

@MITASK
*/

function palindromCheck(str: string): boolean {
  let reversed = str.split("").reverse().join("");
  if (reversed === str) {
    return true;
  } else {
    return false;
  }
}

console.log(palindromCheck("eye"));
