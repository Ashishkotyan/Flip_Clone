import { Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useParams, Outlet } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { Margin } from "@mui/icons-material";

import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

import photo from "../../bootom.png";

const userStyle = makeStyles({
  MainCard: {
    height: "auto ",
    display: "flex",
    padding: "70px",
    // border: "2px solid red",
    backgroundColor: "#f1f3f6",

    flexWrap: "wrap",
    '@media(max-width: 600px)' : {
            
          // border:'2px solid red',
          // contain:'content',
          flexDrirection:'column',
          padding: "0px",
            
            
             

        },
  },
  LeftDiv: {
    // border: "2px solid red",
    flex: 2,

    padding: "20px",
    background: "#fff",
    // border:'2px solid red',

    "&>img": {
      // border: "2px solid #fff",
      boxShadow:
        " rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
      display: "block",
      marginTop: "40px",
      marginLeft: "10px",

     
      '@media(max-width: 600px)' : {
            
          
            width: '80%',
            height:250,
            marginLeft: "50px",
            
             

        },
    },

    "&>div": {
      display: "flex",
      background: "#fff",

      // border:"2px solid red",
      justifyContent: "space-between",
      width: "400px",
      marginLeft: "10px",
      marginTop: "10px",
      

      '@media(max-width: 600px)' : {
            
          // border:"2px solid red",
          contain:"content",
          display: "flex",
          flexDirection:"column",
          marginLeft: "0px",
          width: "auto",

    },

    },

    "&>div>Button": {
      padding: "20px",
      width: "190px",
      // marginLeft: "10px",
      height: "55px",

      marginTop: "10px",
      '@media(max-width: 600px)' : {
            
        padding: "0px",
        width: '240px',

        // height:250,
        marginLeft: "50px",
        marginRight:'10px',
        height:'50px',
        marginTop:'20px'


        
         

    },
    },
  },
  Right: {
    // border: "2px solid red",
    background: "#fff",
    // border:"2px solid yellow",
    contain:"content",
    '@media(max-width: 600px)' : {
      width:"100%",

    },
    

    flex: 4,
    "&>div": {
      marginLeft: "40px",
    },
    "&>div>h1": {
      fontWeight: "100",
      fontSize: "20px",
      marginTop: "30px",
      '@media(max-width: 600px)' : {
        fontSize:'19px',

      },
      
    },
  },
  Right_1: {
    "&>p": {
      fontSize: "20px",
      color: "#878787",
      fontWeight: "500",
      width:"100%",
      // border:'2px solid yellow',
      '@media(max-width: 600px)' : {
        fontSize:'14px',
        marginTop:'20px',
            
      },
      // border:'2px solid blue',
    },
  },
  Right_2: {
    lineHeight: "0px",
    display: "flex",
    // border:'2px solid red',
    alignItems: "center",
    contain:'content',
    height:'30px',

    width: "500px",
    "&>p": {
      fontSize: "28px",
      fontWeight: "100",
      marginTop:'20px'

    },
  },
  Right_2_cutPrice: {
    color: "#878787",
    marginLeft: "15px",
  },
  Right_2_Bank: {
    color: "black",
    fontWeight: "100",
    "&>p>span": {
      fontWeight: "700",
    },
  },
});

function Card() {
  let params = useParams();

  let location = useLocation();
  console.log(location.state, "... loc");

  console.log(params, ".................");

  let classes = userStyle();

  return (
    <>
      <div className={classes.MainCard}>
        <div className={classes.LeftDiv}>
          <img width="400px" height={350} src={location.state.url} />
          <div>
            <Button
              variant="contained"
              color="#ff9f00"
              style={{
                background: "#ff9f00",
                fontWeight: "700",
                color: "#fff",
              }}
            >
              ADD TO CART
            </Button>
            <Button
              variant="contained"
              color="primary"
              style={{
                background: "#fb641b",
                fontWeight: "700",
                color: "#fff",
              }}
            >
              BUY NOW
            </Button>
          </div>
        </div>

        <div className={classes.Right}>

          <div className={classes.Right_1}>
            <h1>{location.state.title.longTitle}</h1>
            <p>
             
              <span style={{ color: "green" }}></span>
              {location.state.rating}
              Reviews
              <img
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                width={120}
              />
            </p>
            <p style={{ color: "green", lineHeight: "0px" }}>Special price</p>

            <div className={classes.Right_2}>
              <p>₹ {location.state.price.cost}</p>
              <p
                className={classes.Right_2_cutPrice}
                style={{
                  fontWeight: "100",
                  fontSize: "18px",
                  textDecoration: "line-through",
                }}
              >
                ₹ {location.state.price.mrp}
              </p>
              <p
                style={{ color: "green", marginLeft: "20px", fontSize: "23px" }}
              >
                {location.state.price.discount}% off
              </p>
            </div>

            <span
              style={{ fontSize: "23px", color: "#212121", fontWeight: "600" }}
            >
              Available offers
            </span>
            <div className={classes.Right_2_Bank}>
              <p>
                <span>Bank Offer </span>Get ₹50 instant discount on first
                Flipkart UPI transaction on order of ₹200 and above
              </p>
              <p>
                <span>Bank Offer </span> 5% Cashback on Flipkart Axis Bank Card
              </p>
              <p>
                <span>Bank Offer </span>
                10% off on ICICI Bank Credit Card Transactions, up to ₹1000 on
                orders of ₹5,000 and above
              </p>
              <p>
                <span>Bank Offer </span>
                Get extra 10% off (price inclusive of cashback/coupon)
              </p>
              <p style={{ color: "#2874f0", fontWeight: "700" }}>
                {" "}
                View 21 more offers
              </p>
              <img src={photo} width={800} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
