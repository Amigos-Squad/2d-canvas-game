export {};
declare global {
  namespace Express {
    interface Request {
      logger: () => void;
    }

    interface Response {
      renderBundle(bundleName: string, data?: any): void;
    }
  }

  interface Window {
    __PRELOADED_STATE__: any;
  }
  interface NodeModule {
    hot: any;
  }
}
