interface ILinkedListNode<V> {
  value: V;
  next: null | ILinkedListNode<V>;
}

export class LinkedList<T> {
  private head: ILinkedListNode<T> | null = null;

  private tail: ILinkedListNode<T> | null = null;

  get isEmpty() {
    return this.head === null;
  }

  private createNode = (nodeValue: T) => ({
    value: nodeValue,
    next: null,
  });

  insert(nodeValue: T) {
    const node = this.createNode(nodeValue);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else if (this.tail) {
      this.tail.next = node;
      this.tail = node;
    }
  }

  remove(): ILinkedListNode<T> | void {
    if (this.head && this.head.next) {
      const temp = this.head;
      this.head = this.head.next;
      return temp;
    }

    if (this.head) {
      const temp = this.head;
      this.head = null;
      this.tail = null;

      return temp;
    }

    return undefined;
  }

  peekValue(): T | void {
    if (this.head) {
      return this.head.value;
    }

    return undefined;
  }
}
