import React, { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Only log if it's not a WebGL context error
    if (!error.message.includes('WebGL context')) {
       console.warn('UI component error caught by boundary', error);
    }
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="w-full h-full flex items-center justify-center bg-gray-900 border border-gray-800 rounded-lg">
          <div className="text-center p-6">
            <h3 className="text-white font-semibold mb-2">3D View Unavailable</h3>
            <p className="text-gray-400 text-sm">Your browser or device does not support WebGL, which is required for 3D rendering.</p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
