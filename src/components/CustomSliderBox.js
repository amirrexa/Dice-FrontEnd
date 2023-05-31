import * as React from 'react';
import { Slider, Button, TextField, InputAdornment, Select, MenuItem, } from "@mui/material";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(()=>({
    contextBox: {
      display: 'block',
      margin: 'auto',
      marginTop: '10px',
      marginRight: 'auto',
      position: 'static',
      justifyContent: 'center',
      top: '30%',
      width: '35%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      /* opacity: 0; */
      padding: '40px',
      borderRadius: '11px'
    },

    sliderContainer: {
      justifyContent: 'center',
      /* width: 100%; */
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      padding: '16px',
      borderRadius: '8px',
      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
      marginBottom: '16px',
      marginRight: 'auto',
    },

    sliderValue: {
      textAlign: 'center',
      color: '#fff',
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '8px',
    },

    slider: {
      color: 'rgb(68, 201, 121)',
      "& .MuiSlider-rail": { color: "green", opacity: 1 },
      "& .MuiSlider-track": { color: "red" },
      "& .MuiSlider-thumb": { color: "green" },
    },

    inputContainer:{
      display: 'flex',
      alignItems: 'center',
      height: '100%',
      justifyContent: 'center',
      backgroundColor: 'rgba(34, 34, 34, 0.5)',
      marginTop: '0%',
      borderEadius: '17px',
      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
      border: 'none',
      outline: 'none',
    },

    betButton: {
      border: 'none !important',
      backgroundColor: 'transparent !important',
      padding: '0 !important',
      color: 'white !important',
      fontWeight: 'bold!important',
      boxShadow: 'none !important',
      outline: 'none !important',
      height:'56px !important',
      width:'20%!important',
      borderRadius: '17px!important',
      '&:hover':{
        backgroundColor: '#818cf6 !important',
        color: 'white!important',
        fontWeight: 'bold',
        borderRadius: '17px!important',
      },
      '&:active':{
        borderRadius: '17px!important;'
      }          
    },

    maxButton: {
        backgroundColor: '#00000000 !important',
        color: '#ffffff !important',
        padding: '50px 50 !important',
        borderRadius: '8px !important',
        textTransform: 'uppercase !important',
        fontWeight: 'bold !important',
        marginTop: '0px !important',
        '&:hover':{
          backgroundColor: '#ffffff !important',
        color: 'black !important',
        }
      },

    inputField: {
      color: '#fff !important',
      backgroundColor: 'rgba(53, 53, 53, 0)',
      border: 'none',
      outline: 'none',
      fontSize: '1px',
      fontWeight: 'bold',
      width: '100%',
      height: '100%',
      /* margin-right: 16px; */
      borderRadius: '17px',
      justifyContent: 'center',
      padding: '20.5px 14px',
    },

    currencySelect:{
      borderRadius: '8px!important',
      fontWeight: '500 !important',
      fontSize:'100%!important',
      textAlign: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0)',
      /* margin-left: auto; */
      /* margin-top: auto; */
      width: '30%!important',
      /* display: flex!important; */
      border: 'none',
      outline: 'none',
      color: 'white',
      /* align-items: center!important; */
      justifyContent: 'center',
      "& .MuiSvgIcon-root": {
        color: "white",
      },
      display: "flex", //enable flex display
      alignItems: "center", // vertically center align the items

      // '&:.MuiMenuItem-root': {
      //   display: flex;
      //   align-items: center;
      // }
      
      // .currency-select .menu-item-container {
      //   display: flex;
      //   align-items: center;
      // }
    },

    menuItem:{
      justifyContent: 'left!important',
      alignItems: 'center!important',
      textAlign:'center!important',
      margin: 'auto!important',
      padding:'10%!important',
      paddingBottom: '0%',
    },
}))

const CustomSliderBox = () => {

    const classes = useStyles();
    const [value, setValue] = React.useState(50);
    const [currency, setCurrency] = React.useState("USDT");
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
      const handleInputChange = (event) => {
        setValue(event.target.value === "" ? "" : Number(event.target.value));
      };
      const handleBlur = () => {
        if (value < 1) {
          setValue(1);
        } else if (value > 99) {
          setValue(99);
        }
      };
      const handleCurrencyChange = (event) => {
        setCurrency(event.target.value);
      };
      const handleConfirm = () => {
        // Handle the confirm button click event
        console.log("Confirmed value:", value);
        console.log("Selected currency:", currency);
      };

    return (
    <div className={classes.contextBox}>
          <div className={classes.sliderContainer}>
            <div className={classes.sliderValue}>{value}</div>
            <Slider
              value={value}
              onChange={handleChange}
              min={1}
              max={99}
              color="secondary"
              className={classes.slider}
            />
          </div>
          <div className={classes.inputContainer}>
            {/* <div className="button-container"> */}
            <Button className={classes.betButton} onClick={handleConfirm} fullHeight>
              BET
            </Button>
            <TextField
              type="text"
              className={classes.inputField}
              variant="outlined"
              // fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <Button className={classes.maxButton}>Max</Button>
                  </InputAdornment>
                ),
              }}
            />

            <Select
              defaultValue="Choose"
              value={currency}
              onChange={handleCurrencyChange}
              variant="outlined"
              className={classes.currencySelect}
            >
              <MenuItem value="usdt" className={classes.menuItem}>
                <img
                  width="24"
                  height="24"
                  src={"/icons/usdt.png"}
                  alt="usdt"
                />
                &nbsp;USDT
              </MenuItem>

              <MenuItem value="eth" className={classes.menuItem}>
                <img width="24" height="24" src={"/icons/eth.png"} alt="eth" />
                &nbsp;ETH
              </MenuItem>
              <MenuItem value="bnb" className={classes.menuItem}>
                <img width="24" height="24" src={"/icons/bnb.png"} alt="bnb" />
                &nbsp;BNB
              </MenuItem>
            </Select>
          </div>
        </div>);
}

export default CustomSliderBox