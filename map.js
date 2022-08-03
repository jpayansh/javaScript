const map = new Map([
  ["a", 1],
  ["b", 2],
]);
console.log(map);
map.set("c", 3);
console.log(map);
map.delete("c");
console.log(map.has("a"));
console.log(map);
console.log(map.size);
for (const [key, value] of map) {
  console.log(`${key}:${value}`);
}
