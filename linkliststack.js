const LinkedList = require(`./linklisttail.js`);
class LinkedListStack {
  constructor() {
    this.list = new LinkedList();
  }
  push(value) {
    this.list.prepand(value);
  }
  pop() {
    return this.list.removeFromFront();
  }
  peek() {
    return this.list.head.value;
  }
  isEmpty() {
    return this.list.isEmpty();
  }
  getSize() {
    this.list.getSize();
  }
  print() {
    return this.list.print();
  }
}
const stack = new LinkedListStack();
console.log(stack.isEmpty());
stack.push(20);
stack.push(80);
stack.push(60);
console.log(stack.getSize());
stack.print();
console.log(stack.pop());
console.log(stack.peek());
