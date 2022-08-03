/*const obj = {
  name: "john",
  age: 45,
  "key-three": true,
  sayMyName: function () {
    console.log(this.name);
  },
};
console.log(obj.name);
console.log(obj["age"]);
console.log(obj["key-three"]);
obj.sayMyName();
obj.hooby = "football";
console.log(obj.hooby);
delete obj.hooby;
console.log(obj);*/

const obj1 = {
  a: "some",
  b: 42,
  c: false,
};
console.log(Object.keys(obj1));
console.log(Object.entries(obj1));
console.log(Object.values(obj1));
