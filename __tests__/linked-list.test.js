import LinkedList from "../src/linked-list";

describe('LinkedList', () => {
  test('should construct a linked list with a head property', () => {
    let linkedList = new LinkedList();
    expect(linkedList.head).toEqual(null);
  });

});