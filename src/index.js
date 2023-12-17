import './css/normalise.css';
// import { LinkedList } from "./modules/linked-list";

class Node {
  constructor(value, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  #head = null;

  // Function to append a new node to the end of the list
  append(value) {
    const newNode = new Node(value);
    if (!this.#head) {
      this.#head = newNode;
    } else {
      let current = this.#head;
      while (current.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
    }
  }

  // Function to prepend a new node to the start of the list
  prepend(value) {
    const newNode = new Node(value, this.#head);
    this.#head = newNode;
  }

  // Function to get the size of the list
  size() {
    let count = 0;
    let current = this.#head;
    while (current) {
      count++;
      current = current.nextNode;
    }
    return count;
  }

  // Function to get the head of the list
  head() {
    return this.#head;
  }

  // Function to get the tail of the list
  tail() {
    let current = this.#head;
    while (current && current.nextNode) {
      current = current.nextNode;
    }
    return current;
  }

  // Function to get the node at a specific index
  at(index) {
    if (index < 0) return null;
    let count = 0;
    let current = this.#head;
    while (current) {
      if (count === index) {
        return current;
      }
      count++;
      current = current.nextNode;
    }
    return null;
  }

  // Function to remove the last element from the list
  pop() {
    if (!this.#head) return;
    if (!this.#head.nextNode) {
      this.#head = null;
      return;
    }
    let current = this.#head;
    let prev = null;
    while (current.nextNode) {
      prev = current;
      current = current.nextNode;
    }
    prev.nextNode = null;
  }

  // Function to check if the list contains a specific value
  contains(value) {
    let current = this.#head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }

  // Function to find the index of a node with a specific value
  find(value) {
    let index = 0;
    let current = this.#head;
    while (current) {
      if (current.value === value) {
        return index;
      }
      index++;
      current = current.nextNode;
    }
    return null;
  }

  // Function to represent the LinkedList as a string
  toString() {
    let result = '';
    let current = this.#head;
    while (current) {
      result += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    result += 'null';
    return result;
  }
}

// Example usage:
const myList = new LinkedList();
myList.append(1);
myList.append(2);
myList.prepend(0);

console.log(myList.toString()); // Output: ( 0 ) -> ( 1 ) -> ( 2 ) -> null
console.log(myList.size()); // Output: 3
console.log(myList.head()); // Output: Node { value: 0, nextNode: Node { value: 1, nextNode: Node { value: 2, nextNode: null } } }
console.log(myList.tail()); // Output: Node { value: 2, nextNode: null }
console.log(myList.at(1)); // Output: Node { value: 1, nextNode: Node { value: 2, nextNode: null } }
console.log(myList.contains(2)); // Output: true
console.log(myList.find(1)); // Output: 1

myList.pop();
console.log(myList.toString()); // Output: ( 0 ) -> ( 1 ) -> null
console.log(myList.size()); // Output: 2
