import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { makeStyles } from "@mui/styles";
import { Button, Card, CardContent, IconButton, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";
import axios from "axios";

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

const columns = [
  // { field: "id", headerName: "ID", width: 10 },
  { field: "playerWalletAddress", headerName: "Player", width: 150 },
  { field: "multiplier", headerName: "Multiplier", width: 100 },
  { field: "rolledValue", headerName: "Rolled", width: 100 },
  { field: "payout", headerName: "Payout", width: 100 },
  { field: "time", headerName: "Time", width: 200 },
];

const CustomDataGrid = () => {
  const classes = useStyles();
  const [selectedRow, setSelectedRow] = React.useState(null);
  const [rows, setRows] = React.useState([]);
  const [entries, setEntries] = React.useState([]);

  const fetchEntries = async () => {
    try {
      const response = await axios.get('https://localhost:7163/Dice/AllEntries');
      setEntries(response.data);
    } catch (error) {
      console.error('Error retrieving game entries:', error);
    }
  }

  const handleRowClick = (params) => {
    setSelectedRow(params.row);
    console.log(params.row);
  };

  const handleClose = () => {
    setSelectedRow(null);
  };

  React.useEffect(() => {
    fetchEntries();
  }, []);


  // React.useEffect(() => {
  //   axios.get('/Dice/AllEntries')
  //     .then(response => {
  //       setRows(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching table entries:', error);
  //     });
  // }, []);


  return (
    <div className={classes.dataGridContainer}>
      <DataGrid
        rows={entries}
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
                Player: {selectedRow.playerWalletAddress}
              </Typography>
              <Typography variant="body2">
                Multiplier: {selectedRow.multiplier}
                <br />
                Rolled: {selectedRow.rolledValue}
                <br />
                Payout: {selectedRow.payout}
                <br />
                Time: {selectedRow.time}
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