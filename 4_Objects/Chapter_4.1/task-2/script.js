// запускать из терминала с помощью node
"use strict";
// Проверка на пустоту
// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
function isEmpty(object) {
  for (let key in object) {
    return false;
  }
  return true;
}

let schedule = {};

console.log(isEmpty(schedule));

schedule["8:30"] = "get up";

console.log(isEmpty(schedule));
