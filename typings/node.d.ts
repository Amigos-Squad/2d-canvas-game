declare global {
  namespace Express {
    interface Request {
      /** Logger instance associated with current request */
      logger: () => void;
    }

    interface Response {
      // tslint:disable-next-line:no-any
      renderBundle(bundleName: string, data?: any): void;
    }
  }
}
