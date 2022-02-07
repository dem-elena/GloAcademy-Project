const appData = {
  title: "",
  screens: [],
  screenPrice: 0,
  rollback: 10,
  fullPrice: 0,
  adaptive: true,
  services: {},
  allServicePrices: 0,
  servicePercentPrice: 0,
  asking: function () {
    do {
      appData.title = prompt(
        "Как называется ваш проект?",
        "Калькулятор верстки"
      );
    } while (appData.isNumber(appData.title));

    for (let i = 0; i < 2; i++) {
      do {
        name = prompt("Какие типы экранов нужно разработать?", "Простые");
      } while (appData.isNumber(name));

      let price = 0;
      do {
        price = prompt("Сколько будет стоить данная работа?");
      } while (!appData.isNumber(price));
      appData.screens.push({ id: i, name: name, price: price });
    }
    appData.adaptive = confirm("Нужен ли адаптив на сайте ?");
    for (let i = 0; i < 2; i++) {
      let key;
      do {
        key = prompt("Какой дополнительный тип услуги нужен?");
      } while (appData.isNumber(key));
      let price = 0;
      do {
        price = prompt("Сколько это будет стоить?");
      } while (!appData.isNumber(price));
      appData.services[key] = +price;
    }
  },
  addPrice: function () {
    for (let screen of appData.screens) {
      appData.screenPrice += +screen.price;
    }
    for (let key in appData.services) {
      appData.allServicePrices += +appData.services[key];
    }
  },

  // getAllServicePrices: function () {
  //   for (let key in appData.services) {
  //     appData.allServicePrices += +appData.services[key];
  //   }
  // },
  isNumber: function (num) {
    return (
      !isNaN(parseFloat(num)) &&
      isFinite(num) &&
      num.length == num.trim().length
    );
  },

  getFullPrice: function () {
    appData.fullPrice = appData.screenPrice + appData.allServicePrices;
  },
  getTitle: function (title) {
    appData.title =
      appData.title.trim()[0].toUpperCase() +
      appData.title.trim().substring(1).toLowerCase();
  },
  getServicePercentPrices: function () {
    appData.servicePercentPrice =
      appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
  },
  getRollbackMessage: function () {
    switch (true) {
      case appData.fullPrice >= 30000:
        console.log("Даем скидку в 10%");
        break;
      case appData.fullPrice >= 15000 && appData.fullPrice < 30000:
        console.log("Даем скидку в 5%");
        break;
      case appData.fullPrice < 15000 && appData.fullPrice >= 0:
        console.log("Скидка не предусмотрена");
        break;
      default:
        console.log("Что то пошло не так");
        break;
    }
  },
  start: function () {
    appData.asking();
    appData.addPrice();
    //appData.getAllServicePrices();
    appData.getFullPrice();
    appData.getServicePercentPrices();
    appData.getTitle();
    appData.getRollbackMessage();
    appData.logger();
  },
  logger: function () {
    console.log(appData.servicePercentPrice);
    console.log(appData.fullPrice);
    console.log(appData.screens);
    // for (let key in appData) {
    //   console.log(key);
    // }
  },
};

appData.start();
