const { nums, words } = require("./data/data.js");

// NODE
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  };
};

// LINKED LIST
class LinkedList {
  constructor(head = null) {
    this.head = head;
  };

  insert(data) {
    let newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
  } else {
      newNode.next = this.head;
      this.head = newNode;
  };
  };

  size() {
    let count = 0;
    let currentNode = this.head;

    while (currentNode) {
      count++;
      currentNode = currentNode.next;
    };
    return count;
  };

  delete(position) {
    if (position <= 0 || position > this.size()) {
      return;
    };
    if (position === 1) {
      this.head = this.head.next;
      return;
    };

    let currentNode = this.head;
    let count = 1;

    while (count < position - 1) {
      currentNode = currentNode.next;
      count++;
    };
    currentNode.next = currentNode.next.next;
  };

  getFirst() {
    return this.head;
  };

  getLast() {
    let currentNode = this.head;

    while (currentNode.next != null) {
      currentNode = currentNode.next;
    };
    return currentNode;
  };

  search(value) {
    let currentNode = this.head;

    while (currentNode != null) {
      if (currentNode.data === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    };
    return null;
  };

  getKth(key) {
    let currentNode = this.head;
    let count = 1;

    while (count < key) {
      console.log(currentNode)
      currentNode = currentNode.next;
      count++;
    };
    return currentNode;
  };

  getKthToLast(key) {
    let currentNode = this.head;
    let size = this.size();

    while (size - 1 > key) {
      console.log(currentNode);
      currentNode = currentNode.next;
      size--;
    };
    return currentNode;
  };

  isEmpty() {
    return this.head === null ? true : false
  };

  clear() {
    return this.head = null;
  };

  // toArray() {
  //   let currentNode = this.head;
  //   let dataArray = [];

  //   while (currentNode) {
  //     dataArray.push(currentNode.data);
  //     console.log(dataArray, currentNode);
      
  //     currentNode = currentNode.next;
  //   };
  //   return dataArray;
  // };

};


module.exports = {
  Node,
  LinkedList,
};
