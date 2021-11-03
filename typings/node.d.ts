declare global {
  namespace Express {
    interface Request {
      logger: () => void;
    }

    interface Response {
      renderBundle(bundleName: string, data?: any): void;
    }
  }
}
