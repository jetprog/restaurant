import React from "react";
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

class LocaleSwitch extends React.Component {
  componentWillMount() {}

  render() {
    const {
      user,
      onChange,
      onChangeLoggedIn,
      currentLocale = "en",
      darkBack = false,
      languages = [{ id: "en", label: "EN" }, { id: "fr", label: "FR" }]
    } = this.props;

    return (
      <LocaleSwitchContainer
        className={cx({ [DarkBackground]: darkBack }, "locale-switch")}
      >
        {languages &&
          languages.map((lang, key) => (
            <Language
              key={key}
              onClick={
                onChangeLoggedIn
                  ? () =>
                      onChangeLoggedIn({
                        id: user.id,
                        preferred_locale: lang.id
                      })
                  : () => onChange(lang.id)
              }
              className={cx({ [Active]: currentLocale === lang.id })}
            >
              {lang.label}
            </Language>
          ))}
      </LocaleSwitchContainer>
    );
  }
}

const LocaleSwitchContainer = styled("div")`
  display: inline-block;
  vertical-align: top;
  pointer-events: auto;
  padding-left: ${Spacing.lg};

  @media (max-width: 480px) {
    display: block;
    padding-top: ${Spacing.md};
    padding-left: 0;
  }
`;

const Language = styled("span")`
  font-size: 12px;
  opacity: 0.5;
  padding-left: ${Spacing.md};
  font-family: ${Typography.body.fontFamily};
  font-size: ${Typography.body.fontSize};
  transition: ${Animation.defaultSpeed};
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

const Separator = styled("div")`
  display: inline-block;
  opacity: 0.5;
  font-size: 27px;
  margin-top: -7px;
  vertical-align: top;
`;

const Active = css`
  opacity: 1;
`;

const DarkBackground = css`
  color: ${Colors.utility.white.default};
`;

export default LocaleSwitch;
