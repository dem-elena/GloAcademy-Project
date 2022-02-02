let arr = ["1234", "127", "89701", "222415", "544", "2444", "4788877"];
console.log(arr);
arr.forEach((element) => {
  if (element[0] == 2 || element[0] == 4) {
    console.log(element);
  }
});
const simpleNum = () => {
  let n;
  for (let i = 2; i < 100; i++) {
    n = i - 1;
    while (i % n !== 0 && n > 1) {
      n--;
    }
    if (n == 1) {
      console.log(`${i}: Делители этого числа: 1 и ${i}`);
    }
  }
};
simpleNum();
