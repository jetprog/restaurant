import React from "react";
import styled, { css, cx } from "react-emotion";

const TableBody = ({ content }) => (
  <TableBodyElement>{content}</TableBodyElement>
);

const TableBodyElement = styled("tbody")`
  display: table-row-group;
`;

export default TableBody;
