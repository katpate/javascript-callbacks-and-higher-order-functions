//Exercise #2: At Least Five Function
const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

const checkGradeOver70 = (score) => {
  return score > 70 ? true : false;
};

const atLeastFive = (array, operation) => {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (operation(array[i])) {
      count++;
    }
  }
  return count >= 5;
};

// Using `atLeastFive` function here
let scoreRoom1Result = atLeastFive(studentScoresRoom1, checkGradeOver70);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, checkGradeOver70);
let scoreRoom3Result = atLeastFive(studentScoresRoom3, checkGradeOver70);

console.log(scoreRoom1Result); //true
console.log(scoreRoom2Result); //false
console.log(scoreRoom3Result); //false


/*
====================================

1. ใน Exercise นี้ ฟังก์ชันใดเป็น Callback Function?
atLeastFive(studentScoresRoom1, checkGradeOver70);
atLeastFive(studentScoresRoom2, checkGradeOver70);
atLeastFive(studentScoresRoom3, checkGradeOver70);
เพราะว่า checkGradeOver70 ถูกส่งเข้าไปเป็นพารามิเตอร์ของฟังก์ชัน atLeastFive
2. ใน Exercise นี้ ฟังก์ชันใดเป็น Higher Order Function?
function atLeastFive(array, operation)
เพราะว่า atLeastFive รับฟังก์ชันอื่นมาเป็นพารามิเตอร์ และเรียกใช้งานฟังก์ชันนั้นภายในตัวเอง

====================================
*/
