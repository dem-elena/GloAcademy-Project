let title;
let screens;
let screenPrice;
let rollback = 10;
let fullPrice;
let adaptive;
let service1;
let service2;
let allServicePrices;
let servicePercentPrice;
//asking();
const asking = function () {
  title = prompt("Как называется ваш проект?", "Калькулятор верстки");
  screens = prompt(
    "Какие типы экранов нужно разработать?",
    "Простые, Сложные, Адаптивные"
  );
  do {
    screenPrice = prompt("Сколько будет стоить данная работа?");
  } while (!isNumber(screenPrice));
  screenPrice = +screenPrice;
  adaptive = confirm("Нужен ли адаптив на сайте ?");
};

const getAllServicePrices = function () {
  let sum = 0;
  let price;
  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      service1 = prompt("Какой дополнительный тип услуги нужен?");
    } else if (i == 1) {
      service2 = prompt("Какой дополнительный тип услуги нужен?");
    }

    do {
      price = prompt("Сколько это будет стоить?");
    } while (!isNumber(price));
    sum += +price;
  }
  return sum;
};

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
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

//console.log(getTitle(title));

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

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice(screenPrice, allServicePrices);
servicePercentPrice = getServicePercentPrices(fullPrice, rollback);
showTypeOf(fullPrice);
showTypeOf(adaptive);
console.log(screens.toLowerCase().split(", "));
getRollbackMessage(fullPrice);
console.log(servicePercentPrice);

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
