class Converter {
  convertSnakeToCamelCase = <T>(object: T) =>
    Object.entries(object).reduce((acc, [key, value]) => {
      if (typeof value === 'object' && value !== null) {
        acc[this.camelize(key) as keyof T] =
          this.convertSnakeToCamelCase(value);
      } else {
        acc[this.camelize(key) as keyof T] = value;
      }
      return acc;
    }, {} as T);

  convertCamelToSnakeCase = <T>(object: T) =>
    Object.entries(object).reduce((acc, [key, value]) => {
      if (typeof value === 'object' && value !== null) {
        acc[this.snakefy(key) as keyof T] = this.convertCamelToSnakeCase(value);
      } else {
        acc[this.snakefy(key) as keyof T] = value;
      }
      return acc;
    }, {} as T);

  camelize = (str: string) =>
    str
      .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
        index === 0 ? word.toLowerCase() : word.toUpperCase()
      )
      .replace(/\s+/g, '');

  snakefy = (str: string) =>
    str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
}

export const converter = new Converter();
