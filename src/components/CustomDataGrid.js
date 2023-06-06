import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { makeStyles } from "@mui/styles";
import { Button, Card, CardContent, IconButton, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  dataGrid: {
    boxShadow: 2,
    border: 1,
    color: "white",
    width: "100%",
    marginTop: "30px",
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
    "& .MuiDataGrid-cell": {
      color: "lightgray",
    },
    "& .MuiDataGrid-cell:hover": {
      color: "black",
    },
    "& .MuiDataGrid-cell:focus": {
      outline: "none!important", // Remove the focus outline
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
    "& .MuiDataGrid-row:hover": {
      backgroundColor: "#818cf6!important",
      transition: "background-color 0.5s ease!important",
    },
    "& .MuiDataGrid-columnHeader:focus": {
      outline: "none!important", // Remove the focus outline on column headers
    },
    "& .MuiDataGrid-columnHeader:selected": {
      outline: "none!important", // Remove the select outline on column headers
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
  },

  cardContainer: {
    marginTop: "24px",
    justifyContent: "center!important",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",

    alignItems: "center!important",
  },

  card: {
    backgroundColor: "lightgray!important",
    justifyContent: 'center!important',
    alignItems: 'center!important',
    borderRadius: '20px!important'
  },

  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  closeButton: {
    position: "absolute",
    marginLeft: "auto!important",
    backgroundColor: '#ffffff !important',
    borderRadius: '8px !important',
    marginTop: '0px !important',
    '&:hover':{
      backgroundColor: 'darkred !important',
    }
  },
}));

const CustomDataGrid = ({ rows, columns }) => {
  const classes = useStyles();
  const [selectedRow, setSelectedRow] = React.useState(null);
  const handleRowClick = (params) => {
    setSelectedRow(params.row);
    console.log(params.row);
  };
  const handleClose = () => {
    setSelectedRow(null);
  };

  return (
    <div className={classes.dataGridContainer}>
      <DataGrid
        rows={rows}
        columns={columns}
        className={classes.dataGrid}
        onRowClick={handleRowClick}
      />
      {selectedRow && (
        <div className={classes.cardContainer}>
          <Card variant="outlined" className={classes.card}>
            <div className={classes.buttonContainer}>
              <Button
                className={classes.closeButton}
                variant="contained"
                onClick={handleClose}
              >
                  <IconButton><Close /></IconButton>
              </Button>
              </div>
            <CardContent>
              <Typography variant="h5" component="div">
                Player: {selectedRow.col1}
              </Typography>
              <Typography variant="body1">
                Target: {selectedRow.col2}
                <br />
                Rolled: {selectedRow.col3}
                <br />
                Payout: {selectedRow.col4}
              </Typography>
              {/* Render other details */}
            </CardContent>          
            
          </Card>
        </div>
      )}
    </div>
  );
};

export default CustomDataGrid;
