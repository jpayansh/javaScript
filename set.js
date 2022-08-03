const set1 = new Set([1, 2, 3]);
set1.add(5);
console.log(set1);
set1.add(4);
console.log(set1);
for (const item of set1) {
  console.log(item);
}
set1.delete(3);
console.log(set1);
set1.clear();
console.log(set1);
