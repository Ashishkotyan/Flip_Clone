import React from "react";




import IconButton from "@mui/material/IconButton";


import TextField from "@mui/material/TextField";

import { colors, makeStyles } from "@material-ui/core";
import bootom from "../../bootom.png";
import visa from '../card/visa.png'
import DeleteIcon from "@mui/icons-material/Delete";
let url =
  "https://rukminim1.flixcart.com/image/150/150/kcgk1ow0/headphone/n/u/a/235v2-fast-charging-boat-original-imaftk6us4af7bca.jpeg?q=70";

let userStyle = makeStyles({
  MainCart: {
    display: "flex",
    padding: "50px",
    background: "#eeeeee",
  },
  Cart: {
    height: "80vh",
    border: "2px solid red",
    flex: 2,
    background: "white",
  },
  PaymetCart: {
    height: "80vh",
    border: "2px solid blue",
    flex: 1,
    background: "white",
  },
  cartHeader: {},
  cartIteam: {
    borderRadius: "20px",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",

    maxWidth: "90%",

    // padding: "5px",
    // border: "2px solid yellow",
    display: "flex",
    justifyContent: "space-around",
    marginTop: "40px",
    marginLeft: "5%",
    "&>div": {
      // border: "2px solid blue",
    },

    "&>div>h1": {
      fontSize: "20px",
      fontWeight: 600,
    },
  },
  cartdiv1: {
    // objectFit:' contain',
    width: "auto",

    height: "auto",
    marginRight: "30%",
    padding: "10px",
    borderRadius: "20px",
    // overflow:'hidden',
    display: "flex",
    // border: "2px solid blue",

    "&>img": {
      objectFit: "contain",
      width: "90px",
      height: "90px",
      // border:'2px solid red',
      borderRadius: "20px",
    },
    "&>div": {
      marginLeft: "25px",
    },
    "&>div>p": {
      marginTop: "16px",
      // marginLeft:'10px',
      fontSize: "1rem",
    },
    "&>div>h1": {
      marginTop: "5px",
      // marginLeft:'10px',
      fontSize: "1.3rem",
      color: "#4f4f4f",
    },
  },
  cartdiv2: {
    marginLeft: "20px",
  },
  PriceBox: {
    display: "flex",

    alignItems: "center",
    justifyContent: "space-evenly",

    width: "20%",
    border: "2px solid red",
  },
  // RIGHT PANEL
  PaymetCart:{
color:'white',
background:'#3b71ca'
  },
  PaymetCart_div1: {
    display:'flex',
    border:'2px solid red',
    justifyContent:'space-between',
   fontSize:'20px',
   padding:"10px"
  },
  PaymetCart_div2:{
    marginTop:'20px',
    border:'2px solid yellow',
    padding:'10px',
    "&>img":{
      marginLeft:"10px"

    }
  }

  
  
});

function Cart() {
  let classes = userStyle();

  return (
    <>
      <div className={classes.MainCart}>
        <div className={classes.Cart}>
          {/* Header */}
          <div className={classes.cartHeader}>
            Continue Shopping
            <hr></hr>
            Shopping Cart You Have 4 Iteam in your cart
          </div>

          {/* HeaderEND */}

          {/* cartiteam */}

          <div className={classes.cartIteam}>
            <div className={classes.cartdiv1}>
              <img src={url} />

              <div>
                <h1> Iphone 11 Pro</h1>
                <p>256GB, Navy Blue</p>
              </div>
            </div>

            <div className={classes.PriceBox}>
              <h1 style={{ fontSize: "20px", color: "#4f4f4f" }}> $ 900</h1>

              <IconButton aria-label="delete" size="large">
                <DeleteIcon fontSize="inherit" />
              </IconButton>
            </div>
          </div>

          {/* cartiteamEND */}
        </div>

        <div className={classes.PaymetCart}>
          <div className={classes.PaymetCart_div1}>
            <h1 style={{fontSize:'20px'}}>Card detail</h1>
            <img src={bootom} width={70} height={70} alt="" />
          </div>
          <div className={classes.PaymetCart_div2}>
            
            <img src={visa} width={20} height={20} alt="" />
                    </div>
          <div>
            <input type="text" placeholder="Enter Your name" />
            <br />
            <TextField
              id="standard-number"
              label="Number"
              type="number"
              width="80%"
              InputLabelProps={{
                shrink: true,
              }}
              variant="standard"
            />

            <br />

            <TextField
              marginTop="10px"
              id="outlined-uncontrolled"
              label="Expiration"
              defaultValue="foo"
            />
            <TextField
              id="outlined-uncontrolled"
              label="CVV"
              defaultValue="foo"
              type="number"
            />
          </div>
          PAYMENT PANEL
        </div>
      </div>
    </>
  );
}

export default Cart;
