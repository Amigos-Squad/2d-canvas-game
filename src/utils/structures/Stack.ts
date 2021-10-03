export class Stack<T> {
  private stack: T[];

  constructor() {
    this.stack = [];
  }

  get isEmpty() {
    return this.stack.length === 0;
  }

  push(item: T) {
    this.stack.push(item);
  }

  pop(): T | void {
    if (!this.isEmpty) {
      return this.stack.pop();
    }

    return undefined;
  }

  peek(): T | void {
    if (!this.isEmpty) {
      return this.stack[this.stack.length - 1];
    }

    return undefined;
  }
}
