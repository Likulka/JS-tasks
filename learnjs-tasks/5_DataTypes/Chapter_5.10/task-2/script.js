// запускать из терминала с помощью node
"use strict";

// Максимальная зарплата
// важность: 5
// У нас есть объект salaries с зарплатами:
// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.

function topSalary(salaries) {
  let maxSalary = 0;
  let maxSalaryName = null;
  for (let [name, salary] of Object.entries(salaries)) {
    if (salary > maxSalary) {
      maxSalary = salary;
      maxSalaryName = name;
    }
  }
  return maxSalaryName;
}

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

console.log(topSalary(salaries));
