// запускать из терминала с помощью node
"use strict";

// Есть массив сообщений такой же, как и в предыдущем задании.

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];
// Теперь вопрос стоит так: какую структуру данных вы бы предложили использовать для хранения информации о том, когда сообщение было прочитано?

let readedMessages = new WeakMap();

readedMessages.set(messages[1], new Date()); // добавляем в контейнер прочитанное сообщение.  в качестве ключа - элемент массива messages, а в качества значения - обьект Date с текущей датой
console.log(readedMessages.has(messages[1])); // проверяем добавилось ли сообщение в контейнер

messages.forEach((msg, i) => {
  // выводим индексы сообщений которе прочитаны
  if (readedMessages.has(msg)) {
    console.log(`Message ${i} was readed at ${readedMessages.get(msg)}`);
  } else console.log(`Message ${i} wasn't readed`);
});

messages.splice(0, 1); // удаляем сообщение из массива

console.log(readedMessages.has(messages[1])); // проверяем удалилось ли сообщение из контейнера
