let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?");
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let rollback = 23;
let fullPrice = 100000;
let adaptive = confirm("Нужен ли адаптив на сайте ?");
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

let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");
fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = Math.ceil(fullPrice - rollback);
console.log(servicePercentPrice);
switch (true) {
  case fullPrice >= 30000:
    console.log("Даем скидку в 10%");
    break;
  case fullPrice >= 15000 && fullPrice < 30000:
    console.log("Даем скидку в 5%");
    break;
  case fullPrice < 15000 && fullPrice >= 0:
    console.log("Скидка не предусмотрена");
  default:
    console.log("Что то пошло не так");
}
