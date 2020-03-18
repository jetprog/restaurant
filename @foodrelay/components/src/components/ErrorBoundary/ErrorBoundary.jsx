import React from "react";
import styled, { css, cx } from "react-emotion";
// Design system elements
import {
  Colors,
  Shadows,
  Spacing,
  Animation,
  Typography,
  BorderRadius
} from "../../rules";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    //logErrorToMyService(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Message>
          <h3>Something went wrong.</h3>
        </Message>
      );
    }

    return this.props.children;
  }
}

// Styles
const Message = styled("div")`
  padding: 16px;
  background: ${Colors.primary.squash.default}30;
  border-radius: 4px;
  color: ${Colors.primary.squash.default};
`;

export default ErrorBoundary;
