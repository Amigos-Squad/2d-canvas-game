import { PureComponent, ErrorInfo } from 'react';
import { Props, State } from './ErrorBoundary.types';

export default class ErrorBoundary extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const { history, errorComponent, handler } = this.props;
    if (handler) {
      handler(error, errorInfo);
    }

    if (!errorComponent) {
      history.push('/500');
    }
  }

  render() {
    const { errorComponent, children } = this.props;
    const { hasError } = this.state;
    return hasError && errorComponent ? errorComponent : children;
  }
}
