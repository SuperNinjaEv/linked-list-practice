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

  insert(data, position){
    let newNode = new Node(data);

    newNode.next = this.head;
    this.head = newNode;
  }
};


module.exports = {
  Node,
  LinkedList,
};
