'use babel';

export default class SahilWordCountView {

  constructor(serializedState) {
    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('sahil-word-count');

    // Create message element
    const message = document.createElement('div');
    message.textContent = 'Hello world';
    message.classList.add('message');
    this.element.appendChild(message);
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

  setCount(words) {
    this.element.children[0].textContent = `There are ${words} words!`
  }

}
