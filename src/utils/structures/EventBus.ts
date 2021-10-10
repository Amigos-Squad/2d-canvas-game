export class EventBus<T> {
  listeners: Map<T, Function[]> = new Map();

  on = (event: T, callback: Function) => {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }

    this.listeners.get(event)?.push(callback);
  };

  off = (event: T, callback: Function) => {
    if (!this.listeners.has(event)) {
      throw new Error(`Event ${event} is undefined `);
    }

    this.listeners.set(
      event,
      this.listeners.get(event)?.filter((listener) => listener !== callback) ||
        []
    );
  };

  emit = (event: T, ...args: unknown[]) => {
    if (!this.listeners.has(event)) {
      throw new Error(`Event ${event} is undefined `);
    }

    this.listeners.get(event)?.forEach((listener: Function) => {
      listener(...args);
    });
  };
}
