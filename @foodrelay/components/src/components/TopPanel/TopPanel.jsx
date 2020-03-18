import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
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

class TopPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { headerHeight: 0 };
  }

  componentDidMount() {
    const height = document.getElementById("top-panel-header").clientHeight;
    this.setState({ headerHeight: height });
  }

  render() {
    const {
      open,
      children,
      close,
      closeLink,
      size,
      headerContent
    } = this.props;
    const { headerHeight } = this.state;
    return (
      <Wrap>
        <Popup className={cx({ [SlideOut]: open })} size={size}>
          <Header id="top-panel-header">{headerContent}</Header>
          <Content headerHeight={headerHeight}>{children}</Content>
        </Popup>
        {closeLink ? (
          <OverlayLink className={cx({ [Shown]: open })} to={closeLink} />
        ) : (
          <Overlay className={cx({ [Shown]: open })} onClick={close} />
        )}
      </Wrap>
    );
  }
}

// Styles

const Popup = styled("div")`
  position: absolute;
  max-height: calc(100% - 80px);
  left: 50%;
  top: 50px;
  width: ${props => (props.size === "big" ? "1000px" : "500px")};
  margin-top: -1500px;
  margin-bottom: 60px;
  overflow-x: hidden;
  transition: ${Animation.defaultSpeed};
  z-index: 100000;
  border-radius: ${BorderRadius.md};
  margin-left: ${props => (props.size === "big" ? "-500px" : "-250px")};
  background: #fff;
  box-shadow: 0px 10px 32px -9px rgba(0, 0, 0, 0.38);
  pointer-events: auto;
  @media (max-width: 480px) {
    width: 100%;
    left: 0;
    margin-left: 0;
    top: 0;
    border-radius: 0;
    margin-bottom: 0;
    bottom: 0;
    max-height: 100%;
  }
`;

const Overlay = styled("div")`
  background: ${Colors.utility.lightGrey.default};
  pointer-events: none;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
`;

const OverlayLink = styled(Link)`
  background: ${Colors.utility.lightGrey.default};
  pointer-events: none;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  display: block;
`;

const Wrap = styled("div")`
  z-index: 100000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  height: 100%;
`;

const Header = styled("div")`
  border-radius: ${BorderRadius.md} ${BorderRadius.md} 0 0;
  overflow: hidden;
  display: flex;
  position: relative;
  z-index: 100;
  @media (max-width: 480px) {
    border-radius: 0;
  }
`;

const Content = styled("div")`
  height: calc(100vh - 152px);
  display: flex;
  overflow: hidden;
  position: relative;
  margin-top: -${props => props.headerHeight}px;
  padding-top: ${props => props.headerHeight}px;
  @media (max-width: 480px) {
    height: calc(100vh - ${props => props.headerHeight}px);
  }
`;

// State style

const SlideOut = css`
  margin-top: 0 !important;
`;

const Shown = css`
  opacity: 0.5;
  pointer-events: auto;
  cursor: pointer;
`;

TopPanel.propTypes = {
  open: PropTypes.bool,
  children: PropTypes.any,
  close: PropTypes.func
};

export default TopPanel;
