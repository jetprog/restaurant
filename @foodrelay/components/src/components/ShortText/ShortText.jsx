import React from "react";
import PropTypes from "prop-types";
import styled, { css, cx } from "react-emotion";

const ShortText = ({ text, maxLength, classNames }) => {
  if (text && text.length > maxLength) {
    let cropped_text = text.substring(0, maxLength);
    return (
      <span className={"short-text " + classNames}>{cropped_text}...</span>
    );
  } else {
    return <span className={"short-text " + classNames}>{text}</span>;
  }
};

export default ShortText;
