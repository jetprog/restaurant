import React from "react";
import styled, { css, cx } from "react-emotion";

const Table = ({ content }) => <TableElement>{content}</TableElement>;

const TableElement = styled("table")`
  display: table;
`;

export default Table;
