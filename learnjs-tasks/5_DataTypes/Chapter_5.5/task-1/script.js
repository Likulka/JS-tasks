// запускать из терминала с помощью node
"use strict";
// Переведите текст вида border-left-width в borderLeftWidth
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

// То есть дефисы удаляются, а все слова после них получают заглавную букву.

function camelize(str) {
  let arr = str.split("-");
  let result = arr.map((item, index) => {
    return index == 0 ? item : item[0].toUpperCase() + item.slice(1);
  });
  return result.join("");
}

console.log(camelize("background-color") == "backgroundColor");
console.log(camelize("list-style-image") == "listStyleImage");
console.log(camelize("-webkit-transition") == "WebkitTransition");
