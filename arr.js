/*const arr = [1, 2, 3, "yo"];
console.log(arr);
console.log(arr[0]);
arr.push(4);
console.log(arr);
for (const item of arr) {
  console.log(item);
}
arr.unshift(10);
console.log(arr);
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);*/

/*const arr1 = [1, 2, 34, 4, 5];
const map1 = arr1.map((x) => x * 2);
console.log(map1);
const map2 = arr1.filter((x) => x > 4);
console.log(map2);
const sum = arr1.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(sum);*/

const a = [1, 2, 3, 4, 5];
const b = [6, 67, 78, 9];
const c = a.concat(b);
console.log(c);

const no = [1, 2, 3, 4, 5];
const no2 = no.slice(1, 5);
console.log(no2);
console.log(no);
const no3 = no.slice(-3);
console.log(no3);

const x = [1, 2, 3, 4, 5];
x.splice(2, 3);
console.log(x);
x.splice(2, 3, 6, 7);
console.log(x);
