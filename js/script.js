const appData = {
  title: "",
  screens: "",
  screenPrice: 0,
  rollback: 10,
  fullPrice: 0,
  adaptive: true,
  service1: "",
  service2: "",
  allServicePrices: 0,
  servicePercentPrice: 0,
  asking: function () {
    appData.title = prompt("Как называется ваш проект?", "Калькулятор верстки");
    appData.screens = prompt(
      "Какие типы экранов нужно разработать?",
      "Простые, Сложные, Адаптивные"
    );
    do {
      appData.screenPrice = prompt("Сколько будет стоить данная работа?");
    } while (!appData.isNumber(appData.screenPrice));
    appData.screenPrice = +appData.screenPrice;
    appData.adaptive = confirm("Нужен ли адаптив на сайте ?");
  },

  getAllServicePrices: function () {
    let sum = 0;
    let price;
    for (let i = 0; i < 2; i++) {
      if (i === 0) {
        appData.service1 = prompt("Какой дополнительный тип услуги нужен?");
      } else if (i == 1) {
        appData.service2 = prompt("Какой дополнительный тип услуги нужен?");
      }

      do {
        price = prompt("Сколько это будет стоить?");
      } while (!appData.isNumber(price));
      sum += +price;
    }
    return sum;
  },
  isNumber: function (num) {
    return (
      !isNaN(parseFloat(num)) &&
      isFinite(num) &&
      num.length == num.trim().length
    );
  },

  getFullPrice: function (screenPrice, allServicePrices) {
    return screenPrice + allServicePrices;
  },
  getTitle: function (title) {
    return (
      title.trim()[0].toUpperCase() + title.trim().substring(1).toLowerCase()
    );
  },
  getServicePercentPrices: function (fullPrice, rollback) {
    return Math.ceil(fullPrice - rollback);
  },
  getRollbackMessage: function (fullPrice) {
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
  },
  start: function () {
    appData.asking();
    appData.allServicePrices = appData.getAllServicePrices();
    appData.fullPrice = appData.getFullPrice(
      appData.screenPrice,
      appData.allServicePrices
    );
    appData.servicePercentPrice = appData.getServicePercentPrices(
      appData.fullPrice,
      appData.rollback
    );
    appData.getRollbackMessage(appData.fullPrice);
    appData.logger();
  },
  logger: function () {
    console.log(appData.servicePercentPrice);
    console.log(appData.fullPrice);
    for (let key in appData) {
      console.log(key);
    }
  },
};

appData.start();
