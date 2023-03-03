"use strict";

// Проверка на спам
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру:

function checkSpam(str) {
  let lowerCaseStr = str.toLowerCase();
  return lowerCaseStr.includes("viagra") || lowerCaseStr.includes("xxx");
}

console.log(checkSpam("buy ViAgRA now") == true);
console.log(checkSpam("free xxxxx") == true);
console.log(checkSpam("innocent rabbit") == false);
