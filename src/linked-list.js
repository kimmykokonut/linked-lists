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
  //create new node w/data at beginning of list (becomes new head)
  addFirst(data) {
    const newNode = new Node(data);
    let oldHead = this.head;
    newNode.next = oldHead;
    this.head = newNode;
  }
  insertAtIndex(index) {
    //insert node a spec. point of list. if i> # nodes in list, node added to end of list
  }
  get(index){
    //return node at spec.index. if no exist, return -1
  }
  search(data){
    //search list for specified data. if no exist, return -1
  }
  count(){
    //return total # nodes in list
  }
  //update remove() to return removed node (like pop())



}