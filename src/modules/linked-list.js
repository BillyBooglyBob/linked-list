import { Node } from './node.js';

export class LinkedList {
  #linkedList = [];

  append(value) {
    // two possible cases
    //  empty, no next
    //  non-empty, previous node's nextNode will be the current one
    let newNode;
    newNode = new Node(value, null);
    if (this.#linkedList.size != 0) {
      let lastIndex = this.#linkedList.size - 1;
      let currentNode = this.#linkedList[lastIndex];
      currentNode.nextNode = newNode;
    }

    this.#linkedList.push(newNode);
  }

  prepend(value) {
    const newNode = new Node(value);
    this.#linkedList.unshift(newNode);
  }

  size() {
    return this.#linkedList.size;
  }

  head() {
    return this.#linkedList[0];
  }

  tail() {
    const lastIndex = this.#linkedList.size - 1;
    return this.#linkedList[lastIndex];
  }

  at(index) {
    return this.#linkedList[index];
  }

  pop() {
    this.#linkedList.pop();
  }

  contains(value) {
    for (const node of this.#linkedList) {
      node.value === value ? true : false;
    }
  }

  find(value) {
    for (let i = 0; i < this.#linkedList.size; i++) {
      if (this.#linkedList[i].value === value) return i;
    }
    return null;
  }

  toString() {
    let string = '';
    for (let i = 0; i <= this.#linkedList.size; i++) {
      let value = this.LinkedList[i];

      if (i === this.#linkedList.size) {
        string += 'null';
      } else {
        string += `( ${node.value} ) -> `;
      }
    }
  }
}
