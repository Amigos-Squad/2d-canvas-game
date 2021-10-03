import { LinkedList } from './LinkedList';

export class Queue<T> {
  private queue: LinkedList<T>;

  constructor() {
    this.queue = new LinkedList<T>();
  }

  get isEmpty() {
    return this.queue.isEmpty;
  }

  enqueue(item: T) {
    this.queue.insert(item);
  }

  dequeue(): T | void {
    if (!this.isEmpty) {
      const node = this.queue.remove();
      if (node) {
        return node.value;
      }
    }

    return undefined;
  }

  peek() {
    if (!this.isEmpty) {
      return this.queue.peekValue();
    }

    return undefined;
  }
}
