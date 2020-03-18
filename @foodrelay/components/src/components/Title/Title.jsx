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

const Title = ({ text, buttons, numbers, level = 1, marginBottom }) => {
  return (
    <TitleContainer className="title" marginBottom={marginBottom}>
      {numbers && <Numbers>{numbers}</Numbers>}
      {level == 1 && <Text>{text}</Text>}
      {level == 2 && <Text2>{text}</Text2>}
      {level == 3 && <Text3>{text}</Text3>}
      {buttons && <Buttons>{buttons}</Buttons>}
    </TitleContainer>
  );
};

// Styles
const TitleContainer = styled("div")`
  flex-direction: row;
  display: flex;
  margin-bottom: ${props =>
    props.marginBottom ? props.marginBottom : Spacing.xl};
  @media (max-width: 480px) {
    margin-bottom: ${Spacing.lg};
    flex-direction: column;
  }
`;

const Text = styled("h1")`
  flex: 2;
  margin: 0;
  color: ${Colors.secondary.eggplant.default};

  @media (max-width: 480px) {
    font-size: 30px;
  }
`;

const Text2 = styled("h2")`
  flex: 2;
  margin: 0;
  font-family: ${Typography.body.fontFamily};
  color: ${Colors.secondary.eggplant.default};

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const Text3 = styled("h3")`
  flex: 2;
  margin: 0;
  font-family: ${Typography.body.fontFamily};
  color: ${Colors.secondary.eggplant.default};

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const Buttons = styled("div")`
  flex: 2;
  text-align: right;

  a {
    margin-right: ${Spacing.md};
  }

  a:last-child {
    margin-right: 0;
  }

  .extra-menu-wrap {
    vertical-align: top;

    a {
      margin-right: 0;
    }
  }

  @media (max-width: 480px) {
    padding-top: ${Spacing.md};
    text-align: left;
  }
`;

const Numbers = styled("div")`
  flex: 1;
  max-width: 250px;
`;

export default Title;
