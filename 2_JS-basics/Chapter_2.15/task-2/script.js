// запускать из терминала с помощью node
"use strict";
// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
function min(a, b) {
  return a < b ? a : b;
}

console.log(min(2, 5) == 2);
console.log(min(3, -1) == -1);
console.log(min(1, 1) == 1);
