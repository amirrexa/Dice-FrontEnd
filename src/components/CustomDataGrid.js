import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  dataGrid: {
    boxShadow: 2,
    border: 1,
    color: "white",
    width: "100%",
    margintop: "30px",
    backgroundColor: "#1c2233",
    fontSize: "15px",
    fontWeight: "normal",
    justifyContent: "center",

    "& .MuiDataGrid-root .MuiDataGrid-iconSeparator": {
      color: "white", // Change the color of the separator line
    },
    "& .MuiDataGrid-columnHeaderTitleContainer": {
      color: "white", // Change the color of the column header text
    },
    "& .MuiDataGrid-sortIcon": {
      color: "white", // Change the color of the sorting arrows
    },
    "& .MuiDataGrid-root .MuiTablePagination-select": {
      color: "red", // Change the color of the dropdown
    },
    "& .MuiDataGrid-root .MuiTablePagination-caption": {
      color: "red", // Change the color of the "Rows per page" text
    },
    "& .MuiDataGrid-cell:hover": {
      color: "#818cf6",
    },
    "& .MuiDataGrid-cell:focus": {
      outline: "none", // Remove the focus outline
    },
    "& .MuiDataGrid-cell:focus-within": {
      outline: "none", // Remove the focus outline when any element within the cell is focused
    },
    "& .MuiDataGrid-cell.Mui-focused": {
      backgroundColor: "transparent", // Remove the background color when the cell is focused
    },
    "& .MuiDataGrid-row.Mui-selected": {
      backgroundColor: "transparent", // Remove the background color when the entire row is selected
    },
    "& .MuiDataGrid-columnHeader:focus": {
      outline: "none", // Remove the focus outline on column headers
    },
    "& .MuiDataGrid-columnHeader:selected": {
      outline: "none", // Remove the select outline on column headers
    },
    "& .MuiDataGrid-columnHeader:focus, .MuiDataGrid-columnHeader:focus-within":
      {
        outline: "none", // Remove the focus outline on column headers
      },
    "& .MuiDataGrid-columnHeader .MuiDataGrid-columnHeaderTitle:focus": {
      outline: "none", // Remove the focus outline on column header titles
    },
  },
  dataGridContainer: {
    height: 300,
        width: "60%",
        margin: "auto",
        marginTop: "24px",
  }
}));

const CustomDataGrid = ({ rows, columns }) => {
    const classes = useStyles();
  return (
    <div
      className={classes.dataGridContainer}
    >
      <DataGrid rows={rows} columns={columns} className={classes.dataGrid} />
    </div>
  );
};

export default CustomDataGrid;