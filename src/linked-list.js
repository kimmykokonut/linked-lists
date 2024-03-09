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
      const popped = this.head;
      this.head = this.head.next;
      return popped.data;
    } else {
      let currentNode = this.head;
      let currentIndex = 0;
      while ((currentIndex + 1) <= indexToRemove) {
        if (currentNode.next === null) {
          return -1; //index out of range, doesn't exist.
        }
        if ((currentIndex + 1) === indexToRemove) {
          const popped = currentNode.next;
          currentNode.next = currentNode.next.next;
          return popped.data;
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
  //insert node a spec. point of list. if i> # nodes in list, node added to end of list
  insertAtIndex(index, data) {
    if (index === 0) {
      this.addFirst(data);
      return;
    }
    let lengthList = this.getCount();
    if (index > lengthList) {
      this.insertLast(data);
      return;
    }

    const nodeToInsert = new Node(data);
    let currentNode = this.head;
    let currentIndex = 0;

    while (currentIndex + 1 <= index) {
      // if (currentNode.next === null) {
      //   console.log('cn.next is null');
      //   //insertLast(data);
      // }
      if (currentIndex + 1 === index) {
        nodeToInsert.next = currentNode.next;
        currentNode.next = nodeToInsert;
        break;
      }
      currentNode = currentNode.next;
      currentIndex++;
    }
  }
  //return total # nodes in list
  getCount() {
    let currentNode = this.head;
    let count = 0;
    while (currentNode != null) {
      count ++;
      currentNode = currentNode.next;
    }
    return count;
  }
  //return node at spec.index. if no exist, return -1
  get(index) {
    let currentNode = this.head;
    let indexCount = 0;
    while (currentNode != null) {
      if (indexCount === index) {
        return currentNode.data;
      }
      currentNode = currentNode.next;
      indexCount++;
    }
    return -1;
  }
  //search list for specified data. if no exist, return -1
  search(data) {
    let currentNode = this.head;
    while (currentNode != null) {
      if (currentNode.data === data) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return -1;
  }
  
  //update remove() to return removed node (like pop())



}