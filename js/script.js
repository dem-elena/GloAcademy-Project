let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?");
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let rollback = 23;
let fullPrice = 100000;
let adaptive = confirm("Нужен ли адаптив на сайте ?");

let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");
//fullPrice = screenPrice + servicePrice1 + servicePrice2;
//let servicePercentPrice = Math.ceil(fullPrice - rollback);

const getAllServicePrices = function (service1, service2) {
  return service1 + service2;
};

function getFullPrice(screenPrice, allServicePrices) {
  return screenPrice + allServicePrices;
}
function getTitle(title) {
  return (
    title.trim()[0].toUpperCase() + title.trim().substring(1).toLowerCase()
  );
}
function getServicePercentPrices(fullPrice, rollback) {
  return Math.ceil(fullPrice - rollback);
}
const showTypeOf = function (typeVar) {
  console.log(typeof typeVar);
};
const allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);
//console.log(getTitle(title));
const servicePercentPrice = getServicePercentPrices(fullPrice, rollback);
const getRollbackMessage = function (fullPrice) {
  switch (true) {
    case fullPrice >= 30000:
      console.log("Даем скидку в 10%");
      break;
    case fullPrice >= 15000 && fullPrice < 30000:
      console.log("Даем скидку в 5%");
      break;
    case fullPrice < 15000 && fullPrice >= 0:
      console.log("Скидка не предусмотрена");
      break;
    default:
      console.log("Что то пошло не так");
      break;
  }
};

fullPrice = getFullPrice(screenPrice, allServicePrices);
showTypeOf(fullPrice);
showTypeOf(adaptive);
console.log(screens.toLowerCase().split(", "));
getRollbackMessage(fullPrice);
console.log(getServicePercentPrices(fullPrice, rollback));

// console.log(screens.length);
// console.log(
//   `Стоимость верстки экранов ${screenPrice} рублей/${screenPrice / 80} долларов`
// );
// console.log(
//   `Стоимость разработки сайта ${fullPrice} рублей/${fullPrice / 80} долларов`
// );
// console.log(screens.toLowerCase());
// console.log(screens.toLowerCase().split(", "));
// console.log(
//   `Процент отката посреднику за работу ${fullPrice * (rollback / 100)}`
// );
//console.log(servicePercentPrice);
