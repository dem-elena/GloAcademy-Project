let num = 266219;
console.log(String(num), typeof String(num));
let l = String(num).split("");
let p = 1;
l.forEach((element) => {
  console.log(element);
  p *= element;
});
console.log(p);
let powP = p ** 3;
console.log(powP);
let m = String(powP).split("");
console.log(Number(m[0] + m[1]));
