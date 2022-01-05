/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    //accepts a val and creates a new node using the value passed
    let newNode = new Node(val);
    //if there is no head property on the list, the head and tail is set to newNode
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      //set the next property on the tail to be the newNode and the tail property on the list to the newNode
      this.tail.next = newNode;
      this.tail = newNode;
    }
    //increment the list length by 1
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {}

  /** pop(): return & remove last item. */

  pop() {}

  /** shift(): return & remove first item. */

  shift() {}

  /** getAt(idx): get val at idx. */

  getAt(idx) {}

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {}

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {}

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {}

  /** average(): return an average of all values in the list */

  average() {}
}

module.exports = LinkedList;
