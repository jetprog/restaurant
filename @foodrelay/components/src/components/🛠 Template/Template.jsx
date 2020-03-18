import React from "react";
import styled, { css, cx } from "react-emotion";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Atoms

import {
  Colors,
  Shadows,
  Spacing,
  Animation,
  Typography,
  BorderRadius
} from "../../rules";

class Template extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {} = this.props;
    return <ExempleWrap />;
  }
}

const ExempleWrap = styled("div")``;

export default Template;
