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

  unshift(val) {
    //creates a new node with the val passed
    const newNode = new Node(val);
    //if there is no head property on the list, set the head and tail to be the new node
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      //set the new node's next property to the current head
      newNode.next = this.head;
      //reassign head property to be the new node
      this.head = newNode;
    }
    //increment the list length by 1
    this.length++;
  }

  _get(idx) {
    let cur = this.head;
    let count = 0;

    while (cur !== null && count != idx) {
      count += 1;
      cur = cur.next;
    }

    return cur;
  }

  /** pop(): return & remove last item. */

  pop() {
    return this.removeAt(this.length - 1);
  }
  /** shift(): return & remove first item. */

  shift() {
    return this.removeAt(0);
  }
  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }

    return this._get(idx).val;
  }
  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }

    let cur = this._get(idx);
    cur.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {}

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }

    // special case: remove first item

    if (idx === 0) {
      let val = this.head.val;
      this.head = this.head.next;
      this.length -= 1;
      if (this.length < 2) this.tail = this.head;
      return val;
    }

    let prev = this._get(idx - 1);

    // special case: remove tail

    if (idx === this.length - 1) {
      let val = prev.next.val;
      prev.next = null;
      this.tail = prev;
      this.length -= 1;
      return val;
    }

    // normal case: removes in the middle

    let val = prev.next.val;
    prev.next = prev.next.next;
    this.length -= 1;
    return val;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0;

    let total = 0;
    let current = this.head;

    while (current) {
      total += current.val;
      current = current.next;
    }

    return total / this.length;
  }
}

module.exports = LinkedList;
