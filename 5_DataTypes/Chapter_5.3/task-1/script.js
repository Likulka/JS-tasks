"use strict";
// Сделать первый символ заглавным
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
function ucFirst(str) {
  return str ? str[0].toUpperCase() + str.slice(1) : str;
}

console.log(ucFirst("вася") == "Вася");
