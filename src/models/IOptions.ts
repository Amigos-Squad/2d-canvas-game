type PlainObject<T = unknown> = {
  [k in string]: T;
};

export type IOptions =
  | {
      data?: PlainObject;
      method?: string;
      headers?: PlainObject;
      timeout?: number;
    }
  | PlainObject;
