import React from "react";
import styled, { css, cx } from "react-emotion";

const TableCell = ({ content }) => (
  <TableCellElement>{content}</TableCellElement>
);

const TableCellElement = styled("td")`
  display: table-cell;
`;

export default TableCell;
