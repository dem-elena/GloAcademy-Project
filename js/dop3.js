const land = prompt("Введите язык ru или en", "ru");
const listRu =
  "Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье";
const listEn = "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday";
if (land == "ru") {
  console.log(listRu);
} else if (land == "en") {
  console.log(listEn);
} else console.log("Error");

switch (land) {
  case "ru":
    console.log(listRu);
    break;
  case "en":
    console.log(listEn);
    break;
  default:
    console.log("Error");
}
const ArrayLand = [listRu.split(", "), listEn.split(", ")];
console.log(
  land === "ru"
    ? ArrayLand[0].join(", ")
    : land === "en"
    ? ArrayLand[1].join(", ")
    : "Error"
);

//Можно еще одним способом
const ArrayOb = { ru: listRu, en: listEn };
//console.log(ArrayOb[land]);
console.log(ArrayOb[land] == undefined ? "Error" : ArrayOb[land]);
//Задание 2
const namePerson = prompt("Введите имя", "Артем");
console.log(
  namePerson === "Артем"
    ? "директор"
    : namePerson === "Александр"
    ? "преподаватель"
    : "студент"
);
