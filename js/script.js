let title = "GloAcademy-Project";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 500;
let rollback = 23;
let fullPrice = 100000;
let adaptive = true;
// alert("HELLO, WORLD!!!");

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log(
  `Стоимость верстки экранов ${screenPrice} рублей/${screenPrice / 80} долларов`
);
console.log(
  `Стоимость разработки сайта ${fullPrice} рублей/${fullPrice / 80} долларов`
);
console.log(screens.toLowerCase());
console.log(screens.toLowerCase().split(", "));
console.log(
  `Процент отката посреднику за работу ${fullPrice * (rollback / 100)}`
);
