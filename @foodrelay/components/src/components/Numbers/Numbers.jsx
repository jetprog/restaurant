import React from "react";
import styled, { cx, css } from "react-emotion";
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

const Numbers = ({ numbers = [], light = false }) => {
  return (
    <NumberWrap>
      <Row>
        {numbers &&
          numbers.length > 0 &&
          numbers.map((n, k) => (
            <Number
              key={k}
              color={n.color}
              display={n.display}
              className={n.display}
              empty={parseInt(n.total) < 1}
              className={cx({ [Light]: light })}
            >
              <NumberInfo>
                {n.total}
                {n.icon && !n.label && <FontAwesomeIcon icon={n.icon} />}
                {n.label && <Label>{n.label}</Label>}
              </NumberInfo>
              <hr />
            </Number>
          ))}
      </Row>
    </NumberWrap>
  );
};

// Styles

const NumberWrap = styled("div")`
  &:hover .on-hover {
    opacity: 1;
  }
`;

const Label = styled("div")`
  font-size: 12px;
  font-family: ${Typography.body.fontFamily};
  display: inline-block;
  margin-left: ${Spacing.sm};
`;

const Row = styled("div")`
  display: flex;
  flex-direction: row;
  margin-right: -${Spacing.sm};
  flex-wrap: wrap;
`;

const Number = styled("h2")`
  padding: ${Spacing.xs} 0;
  margin: 0 ${Spacing.sm} 0 0;
  font-family: ${Typography.body.fontFamily};
  font-weight: 400;
  color: ${props =>
    props.empty ? Colors.utility.grey.default : Colors.utility.black.default};
  font-size: 18px;
  opacity: ${props => (props.display == "always" ? "1" : "0")};
  transition: ${Animation.defaultSpeed};
  flex: 1;
  flex-grow: 2;
  min-width: 65px;
  max-width: 180px;
  box-sizing: border-box;

  .label {
    color: ${Colors.utility.grey.default};
    padding-top: ${Spacing.xs};
  }

  hr {
    background-color: ${props => props.color};
    border: 0;
    height: 2px;
  }

  svg {
    margin-left: ${Spacing.sm};
    font-size: 14px;
    color: ${props => props.color};
  }
`;
const NumberInfo = styled("div")`
  display: flex;
  flex-direction: row;
`;

const Light = css`
  margin: 0;
  color: ${Colors.utility.grey.default};
  font-size: 14px;
  min-width: 50px;

  hr {
    display: none;
  }
  svg {
    color: ${Colors.utility.grey.default};
    font-size: 14px;
    opacity: 0.5;
  }
`;

export default Numbers;
