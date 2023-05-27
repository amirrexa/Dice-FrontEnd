//Table.js
import React from "react";
import {
  Table as MUITable,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { styled } from "@mui/system";

const CustomTableContainer = styled(TableContainer)({
  backgroundColor: "#333",
  display: "flex",
  width: "100vh",
});

const CustomTableCell = styled(TableCell)({
  color: "#FFF",
  padding: "8px",
  border: "1px solid #fff",
});

function Table({ headData, rowData }) {
  return (
    <CustomTableContainer>
      <MUITable>
        <TableHead>
          <TableRow>
            {headData.map((header, index) => (
              <CustomTableCell key={index}>{header}</CustomTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rowData.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {Object.values(row).map((cell, cellIndex) => (
                <CustomTableCell key={cellIndex}>{cell}</CustomTableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </MUITable>
    </CustomTableContainer>
  );
}

export default Table;