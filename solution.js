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
  };

  size(){
    let count = 0;
    let currentNode = this.head;

    while(currentNode){
      count++;
      currentNode = currentNode.next;
    };
    return count;
  }
};


module.exports = {
  Node,
  LinkedList,
};
