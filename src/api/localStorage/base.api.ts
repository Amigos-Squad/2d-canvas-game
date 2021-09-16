export class BaseAPI<T> {
  protected localStorage: Storage = localStorage;

  protected item: string;

  protected defaultValue: T;

  get(): T {
    const itemValue = this.localStorage.getItem(this.item);
    const value = itemValue ? JSON.parse(itemValue) : '';

    return value || this.defaultValue;
  }

  set(data: T): void {
    this.localStorage.setItem(this.item, JSON.stringify(data));
  }

  reset(): void {
    this.set(this.defaultValue);
  }

  constructor(name: string, defaultValue: T) {
    this.item = name;
    this.defaultValue = defaultValue;
  }
}
