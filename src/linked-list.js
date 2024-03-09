import Node from "./node";

export default class LinkedList {
  constructor() {
    this.head = null;
  }
  insertLast(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next != null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  }
  remove(indexToRemove) {
   if (indexToRemove === 0) {
     this.head = this.head.next;
   } else {
    let currentNode = this.head;
    let currentIndex = 0;
    while ((currentIndex + 1) <= indexToRemove) {
      if (currentNode.next === null) {
        return -1; //index out of range, doesn't exist.
      }
      if ((currentIndex + 1) === indexToRemove) {
        currentNode.next = currentNode.next.next;
        break;
      }
      currentNode = currentNode.next;
      currentIndex++;
    }
   }
  }
}