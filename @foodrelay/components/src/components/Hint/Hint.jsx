import React from "react";
import onClickOutside from "react-onclickoutside";
import styled, { css, cx } from "react-emotion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Design system elements
import {
  Colors,
  Shadows,
  Spacing,
  Animation,
  Typography,
  BorderRadius
} from "../../rules";

class Hint extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hint_shown: false };
  }

  handleClickOutside = evt => {
    this.setState({
      hint_shown: false
    });
  };

  toggleHint() {
    this.setState({
      hint_shown: !this.state.hint_shown
    });
  }

  render() {
    const { hint } = this.props;
    const { hint_shown } = this.state;

    if (hint) {
      return (
        <HintWrapper className="extra-menu-wrap">
          <HintButton className="hint" onClick={() => this.toggleHint()}>
            ?
          </HintButton>
          {hint_shown && <HintContent>{hint}</HintContent>}
        </HintWrapper>
      );
    } else {
      return <span />;
    }
  }
}

// Styles

const HintWrapper = styled("div")`
  position: relative;
  display: inline-block;
  margin: 0 ${Spacing.sm};
  margin-top: -4px;
`;

const HintButton = styled("a")`
  width: 24px;
  height: 24px;
  display: block;
  background: ${Colors.secondary.eggshell.default};
  font-size: 14px;
  cursor: pointer;
  text-align: center;
  line-height: 24px;
  box-sizing: border-box;
  border-radius: 50%;
  transition: ${Animation.defaultSpeed};
  font-family: ${Typography.body.fontFamily};

  &:hover {
    background: ${Colors.secondary.mushrooms.default};
  }
`;

const HintContent = styled("div")`
  border-radius: ${BorderRadius.sm};
  overflow: hidden;
  background: #fff;
  position: absolute;
  top: 34px;
  left: 0;
  z-index: 10;
  max-width: 250px;
  min-width: 250px;
  box-shadow: ${Shadows.level3};
  padding: ${Spacing.md};
  font-family: ${Typography.small.fontFamily};
  font-size: ${Typography.small.fontSize};
  color: ${Colors.secondary.eggplant.default};

  p {
    margin: 0;
  }

  a {
    color: ${Colors.primary.eggYolk.default};
  }
`;

export default onClickOutside(Hint);
