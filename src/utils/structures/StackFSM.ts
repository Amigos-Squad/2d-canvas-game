import { Stack } from './Stack';

type Action = () => void;

export class StackFSM {
  private stack: Stack<Action>;

  private baseState: Action | null = null;

  constructor(baseState: Action | null = null) {
    this.stack = new Stack();
    this.baseState = baseState;
  }

  get activeState() {
    return this.stack.peek() || this.baseState;
  }

  popState() {
    this.stack.pop();
  }

  pushState(state: Action) {
    if (this.activeState !== state) {
      this.stack.push(state);
    }
  }

  pushWithPop(state: Action) {
    this.popState();
    this.pushState(state);
  }

  update() {
    if (this.activeState) {
      this.activeState();
    }
  }
}
