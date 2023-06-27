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

  insert(data, position) {
    let newNode = new Node(data);

    newNode.next = this.head;
    this.head = newNode;
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

    while( currentNode.next != null) {
      currentNode = currentNode.next;
    };
    return currentNode;
  }
};


module.exports = {
  Node,
  LinkedList,
};
