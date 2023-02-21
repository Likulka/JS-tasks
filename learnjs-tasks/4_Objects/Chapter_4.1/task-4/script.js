// запускать из терминала с помощью node
"use strict";

// Умножаем все числовые свойства на 2
// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

function multiplyNumeric(obj) {
  for (let key in obj) {
    typeof obj[key] == "number" && (obj[key] *= 2);
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

multiplyNumeric(menu);

console.log(menu);
