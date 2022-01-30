let num = 266219;
let listNum = String(num).split("");
let p = 1;
listNum.forEach((element) => {
  p *= element;
});
console.log(p);
let powP = p ** 3;
console.log(powP);
console.log(Number(String(powP).substr(0, 2)));
