export class Node {
  #value = null;

  #nextNode = null;

  constructor(value, nextNode) {
    this.#value = value;
    this.#nextNode = nextNode;
  }

  // Getter for #value
  get value() {
    return this.#value;
  }

  // Setter for #value
  set value(newValue) {
    this.#value = newValue;
  }

  // Getter for #nextNode
  get nextNode() {
    return this.#nextNode;
  }

  // Setter for #nextNode
  set nextNode(newNextNode) {
    this.#nextNode = newNextNode;
  }
}
