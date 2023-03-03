// запускать из терминала с помощью node
"use strict";
// Сумма свойств объекта
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sumOfSalaries = 0;
for (let key in salaries) {
  sumOfSalaries += salaries[key];
}

console.log(sumOfSalaries);
