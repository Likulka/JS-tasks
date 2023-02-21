// запускать из терминала с помощью node
"use strict";
// Операции с массивами
// Создайте массив styles с элементами «Джаз» и «Блюз».
// 1) Добавьте «Рок-н-ролл» в конец.
// 2) Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// 3) Удалите первый элемент массива и покажите его.
// 4) Вставьте Рэп и Регги в начало массива.

const styles = ["Джаз", "Блюз"];

console.log(styles);

styles.push("Рок-н-ролл");
console.log(styles);

styles[Math.ceil(styles.length / 2) - 1] = "Классика";
console.log(styles);

console.log(styles.shift());
console.log(styles);

styles.unshift("Рэп", "Регги");
console.log(styles);
