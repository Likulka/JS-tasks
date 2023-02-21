// запускать из терминала с помощью node
"use strict";
// Вывести простые числа
// Напишите код, который выводит все простые числа из интервала от 2 до n.
let n = 10;

outer: for (let i = 2; i <= n; i++) {
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j == 0) continue outer;
  }
  console.log(i);
}
