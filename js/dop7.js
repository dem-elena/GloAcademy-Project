"use strict";
const myDate = new Date();
const day = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];
const dayOfWeek = myDate.getDate();

const id = document.getElementById("week");
day.forEach((element, ind, array) => {
  switch (true) {
    case (ind == 5 || ind == 6) && ind == dayOfWeek:
      id.innerHTML += "<b><i>" + element + "</i></b>" + "<br/>";
      break;
    case (ind == 5 || ind == 6) && ind !== dayOfWeek:
      id.innerHTML += "<i>" + element + "</i>" + "<br/>";
      break;
    default:
      id.innerHTML += element + "<br/>";
  }
});
