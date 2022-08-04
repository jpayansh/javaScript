class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  prepand(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  print() {
    if (this.isEmpty()) {
      console.log("list is empty");
    } else {
      let curr = this.head;
      let listValues = " ";

      while (curr) {
        listValues += `${curr.value} ->`;
        curr = curr.next;
      }
      console.log(listValues);
    }
  }
  insert(value, index) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index == 0) {
      this.prepand(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }
  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }
    let removeNode;
    if (index === 0) {
      removeNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prex = prex.next;
      }
      removeNode = prev.next;
      prev.next = removeNode.next;
    }
    this.size--;
    return removeNode;
  }
  removeValue(value) {
    if (this.isEmpty()) {
      return null;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      let prev = this.head;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }
      if (prev.next) {
        const removeNode = prev.next;
        prev.next = removeNode.next;
        this.size--;
        return value;
      }
      return null;
    }
  }
  search(value) {
    if (this.isEmpty()) {
      return -1;
    }
    let i = 0;
    let curr = this.head;
    while (curr) {
      if (curr.value === value) {
        return i;
      }

      curr = curr.next;
      i++;
    }
    return -1;
  }
  reverse() {
    let prev = null;
    let curr = this.head;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }
}
const list = new LinkedList();
/*console.log("list is empty?", list.isEmpty());
console.log("list size", list.getSize());
list.prepand(10);
list.print();
list.prepand(20);
list.prepand(30);*/

// list.insert(10, 0);
//list.print();
list.insert(30, 0);
list.insert(20, 0);
list.insert(80, 1);
list.print();

/*console.log(list.removeFrom(10));
list.print();
console.log(list.removeFrom(0));
list.print();
console.log(list.removeFrom(1));
list.print();*/

/*console.log(list.removeValue(40));
list.print();
console.log(list.removeValue(30));
console.log(list.removeValue(20));
list.print();
console.log(list.removeValue(80));
list.print();*/

/*console.log(list.search(20));
console.log(list.search(60));
console.log(list.getSize());*/

list.reverse();
list.print();
