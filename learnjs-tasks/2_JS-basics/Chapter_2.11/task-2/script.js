// запускать из терминала с помощью node
"use strict";
// Проверка значения вне диапазона
// Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.
// Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.
let age = 13;

// 1 вариант
if (!(age >= 14 && age <= 90)) {
  console.log("Вы попадаете в диапазон");
}

// 2 вариант
if (age < 14 || age > 90) {
  console.log("Вы попадаете в диапазон");
}
