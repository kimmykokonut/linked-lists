import Node from "../src/node";

describe('Node', () => {
  test('should correctly create a node', () => {
    const node = new Node("head");
    expect(node.data).toEqual("head");
    expect(node.next).toEqual(null);
  });

});