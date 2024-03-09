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
    this.head = this.head.next;
  }
}