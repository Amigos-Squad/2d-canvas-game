export class Validator<T> {
  config: any;

  constructor(config: any) {
    this.config = config;
  }

  validate = (form: T, changeError: any) => {
    console.warn(form);
    changeError(form);
    return true;
  };
}
