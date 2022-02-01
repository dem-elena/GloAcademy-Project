`use strict`;
const myString = function (str) {
  if (typeof str != typeof "string") {
    console.log("!!!");
  } else {
    str = str.trim();
    console.log(str.length > 30 ? str.substr(0, 30) + "..." : str);
  }
};

myString("в этой строке не может быть никогда 30 символов");
myString(24242);
