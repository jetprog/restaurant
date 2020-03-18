import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { injectIntl, formatMessage, FormattedMessage } from "react-intl";
import styled, { css, cx, keyframes } from "react-emotion";
import TextButton from "../TextButton";
// Design system elements
import {
  Colors,
  Shadows,
  Spacing,
  Animation,
  Typography,
  BorderRadius
} from "../../rules";

class LinkField extends React.Component {
  constructor(props) {
    super(props);
    this.state = { successfully_copied: false };
  }

  copyToClipboard = e => {
    this.textArea.select();
    document.execCommand("copy");
    this.setState({ successfully_copied: true });
    setTimeout(() => {
      this.setState({ successfully_copied: false });
    }, 1500);
  };

  render() {
    const { linkUrl, label, showCopyLink, small, intl } = this.props;
    const { successfully_copied } = this.state;

    const copied_confirmation = intl.formatMessage({
      id: "invite_link.copied_confirmation"
    });

    return (
      <OuterContainer>
        <Label>{label}</Label>
        <Row>
          <LinkContainer small={small}>
            <input
              type="text"
              onClick={this.copyToClipboard}
              ref={textarea => (this.textArea = textarea)}
              value={linkUrl}
            />
          </LinkContainer>
          {showCopyLink && document.queryCommandSupported("copy") && (
            <CopyButton small={small}>
              <TextButton
                label={<FontAwesomeIcon icon="copy" />}
                onClick={this.copyToClipboard}
              />
            </CopyButton>
          )}
        </Row>
        {successfully_copied && (
          <CopiedWrapper>
            <Copied>
              <FontAwesomeIcon icon="check" />
              {copied_confirmation}
            </Copied>
          </CopiedWrapper>
        )}
      </OuterContainer>
    );
  }
}

// Styles

const OuterContainer = styled("div")`
  position: relative;
`;

const Row = styled("div")`
  display: flex;
  flex-direction: row;
`;

const LinkContainer = styled("div")`
  border-radius: ${BorderRadius.sm};
  padding: ${props =>
    props.small ? Spacing.sm + " " + Spacing.md : Spacing.md};
  background: ${Colors.secondary.eggshell.default};
  overflow-y: hidden;
  overflow-x: auto;
  width: 100%;
  box-sizing: border-box;
  position: relative;

  input {
    border: 0;
    font-size: ${props => (props.small ? Typography.body.fontSize : "20px")};
    font-family: ${Typography.body.fontFamily};
    color: ${Colors.secondary.eggplant.default};
    background: transparent;
    width: 100%;
    box-sizing: border-box;
  }

  input::selection {
    background-color: transparent;
  }
`;

const CopyButton = styled("div")`
  margin-left: ${Spacing.md};
  padding: ${props => (props.small ? "0" : Spacing.md + " 0")};
  line-height: 10px;
  a {
    right: ${Spacing.md};
    top: ${Spacing.sm};
    font-size: ${props => (props.small ? Typography.body.fontSize : "20px")};
  }

  a:hover {
    border-color: transparent;
  }
`;

const CopiedWrapper = styled("div")`
  width: 100%;
  position: absolute;
  top: -20px;
  text-align: center;
`;

const Copied = styled("div")`
  color: ${Colors.secondary.eggplant.default};
  display: inline-block;
  border-radius: ${BorderRadius.sm};
  background: ${Colors.secondary.mushrooms.default};
  text-align: center;
  padding: ${Spacing.xs} ${Spacing.sm};
  box-shadow: ${Shadows.level2};
  font-size: ${Typography.small.fontSize};
  animation: ${appear} 0.3s ease normal forwards;

  svg {
    margin-right: ${Spacing.sm};
  }
`;

const Label = styled("label")`
  color: ${Colors.secondary.eggplant.lighter};
  font-size: 12px;
  margin-bottom: ${Spacing.sm};
  display: block;
  width: auto;
`;

const appear = keyframes`
  0% {opacity: 0;}
  100% {opacity: 1;}
`;

export default injectIntl(LinkField);
