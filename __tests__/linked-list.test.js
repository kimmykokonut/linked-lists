import LinkedList from "../src/linked-list";

describe('LinkedList', () => {

  let linkedListWithNodes = new LinkedList();

  beforeEach(() => {
    linkedListWithNodes.insertLast("node1");
    linkedListWithNodes.insertLast("node2");
    linkedListWithNodes.insertLast("node3");
    linkedListWithNodes.insertLast("node4");
  });
  //cleanup-like deleting the head so tests don't pollute each other
  afterEach(() => {
    linkedListWithNodes.head = null;
  });

  test('should construct a linked list with a head property', () => {
    let linkedList = new LinkedList();
    expect(linkedList.head).toEqual(null);
  });
  test('LinkedList.prototype.insertLast() should add a node at head if list has no head', () => {
    let linkedList = new LinkedList();
    linkedList.insertLast("head");
    expect(linkedList.head.data).toEqual("head");
  });
  test('LinkedList.prototype.insertLast() should add a node at the end of a linked list', () => {
    linkedListWithNodes.insertLast("new last");
    expect(linkedListWithNodes.head.next.next.next.next.data).toEqual("new last");
  });
  test('it should set a new head if the head is removed', () => {
    linkedListWithNodes.remove(0);
    expect(linkedListWithNodes.head.data).toEqual("node2");
  });
  test('it should remove a node from the middle', () => {
    linkedListWithNodes.remove(2);
    expect(linkedListWithNodes.head.next.next.data).toEqual("node4");
  });
  test('it should return -1 if the index does not exist', () => {
    expect(linkedListWithNodes.remove(9)).toEqual(-1);
  });
  test('addFirst() should create new node with data at beginning of new list and become new head', () => {
    linkedListWithNodes.addFirst("new head");
    expect(linkedListWithNodes.head.data).toEqual("new head");
  });
  test('insertAtIndex() should insert a node at specified index location', () => {
    linkedListWithNodes.insertAtIndex(2, "testInsert");
    expect(linkedListWithNodes.head.next.next.data).toEqual("testInsert");
  });
  test('insertAtIndex() should insert a node at 0 index location, referring to addFirst', () => {
    linkedListWithNodes.insertAtIndex(0, "testInsert");
    expect(linkedListWithNodes.head.data).toEqual("testInsert");
  });
  // test('insertAtIndex() should insert a node at end of list if index location is greater than number of nodes', () => {
  //   linkedListWithNodes.insertAtIndex(20, "testInsert");
  //   expect(linkedListWithNodes.head.next.next.next.next.data).toEqual("testInsert");
  // });
  test('getCount should return total number nodes in linked list', () => {
    expect(linkedListWithNodes.getCount()).toEqual(4);
  });

});