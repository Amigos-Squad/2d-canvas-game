import { Component } from 'react';
import { Props, State } from './ErrorBoundary.types';

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    const { history } = this.props;
    history.replace('/500');
  }

  render() {
    return this.props.children;
  }
}
