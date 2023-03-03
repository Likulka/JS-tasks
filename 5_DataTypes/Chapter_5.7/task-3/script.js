// запускать из терминала с помощью node
"use strict";
// Перебираемые ключи
// Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними, например, применить метод .push.
// Почему? Что нужно поправить в коде, чтобы вызов keys.push сработал?

let map = new Map();

map.set("name", "John");

// let keys = map.keys(); была такая строка

let keys = Array.from(map.keys()); // стала такая строка

keys.push("more");

console.log(keys);
