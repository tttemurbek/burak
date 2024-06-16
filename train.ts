/* I-TASK:

Shunday function yozing, u parametridagi array ichida eng kop takrorlangan raqamni topib qaytarsin.
MASALAN: majorityElement([1,2,3,4,5,4,3,4]) return 4

@MITASK*/

function majorityElement(nums: number[]) {
  let counter: number = 0;
  let salt: number = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (counter === 0) {
      salt = nums[i];
    } else {
      if (nums[i] === salt) {
        counter++;
      } else {
        counter--;
      }
    }
  }

  return salt;
}

console.log(majorityElement([1, 2, 3, 4, 5, 4, 3, 4]));

/* PROJECT STANDARDS
-   logging standards
-   naming stardards
        camel case => function, method, variable
        pascal => class case
        kebab => folder case
        css => snake case
-   error handlings        
*/

/* 
traditional api
rest api
graphql api
*/

/* */
