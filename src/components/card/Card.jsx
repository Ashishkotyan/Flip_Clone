import { Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useParams, Outlet } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { Margin } from "@mui/icons-material";

import photo from '../../bootom.png'

const userStyle = makeStyles({
  MainCard: {
    height: "auto ",
    display: "flex",
    padding: "70px",
    // border: "2px solid red",
    backgroundColor:'#f1f3f6',

    flexWrap:'wrap'
  },
  LeftDiv: {
    // border: "2px solid red",
    flex: 2,
    
    padding: "20px",
    background:'#fff',
    

    "&>img": {
      // border: "2px solid #fff",
      boxShadow: ' rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
      display: "block",
            marginTop:'40px',
      marginLeft: "10px",
      
    },

    "&>div":{
      display: "flex",
          background:'#fff',


      // border:"2px solid red",
      justifyContent:'space-between',
      width:'400px',
      marginLeft:'10px',
            marginTop:'10px',

    

    },

    "&>div>Button": {
      padding: "20px",
      width: "190px",
      // marginLeft: "10px",
      height:'55px',

      marginTop:"10px",
    },
  },
  Right: {
    // border: "2px solid red",
    background:'#fff',

    
    flex: 4,
    "&>div": {
      marginLeft: "40px",
    },
    "&>div>h1": {
      fontWeight: "100",
      fontSize:'20px',
      marginTop:'30px'
    },
  },
  Right_1: {
    "&>p": {
      fontSize: "20px",
      color: "#878787",
      fontWeight: "500",
      // border:'2px solid blue',
      
      
    },
  },
  Right_2:{
    lineHeight:'0px',
    display:'flex',
    // border:'2px solid red',
    alignItems:'center',
    
    
    
    
    width:'500px',
        '&>p':{
            fontSize:'28px',
            fontWeight:"100"
        },

  },
  Right_2_cutPrice:{
    
    color:"#878787",
    marginLeft:'15px',
    

  },
  Right_2_Bank:{
    color:'black',
    fontWeight:"100",
    "&>p>span":{
      fontWeight:'700'
    }
  }
});

function Card() {
  let params = useParams();

  console.log(params, ".................");

  let classes = userStyle();

  return (
    <>
      <div className={classes.MainCard}>
        <div className={classes.LeftDiv}>
          <img
            width="400px"
            height={350}
            src="https://th.bing.com/th/id/OIP.uqgMMrDguDQjZktvjWxzcAHaGB?w=205&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          />
          <div>
          <Button variant="contained" color="#ff9f00" style={{background:"#ff9f00", fontWeight:'700',color:"#fff"}}>
            ADD TO CART
          </Button>
          <Button variant="contained" color="primary" style={{background:"#fb641b", fontWeight:'700',color:"#fff"}} >
            BUY NOW
          </Button>
          </div>
        </div>

        <div className={classes.Right}>


          <div className={classes.Right_1}>
            <h1>
              EVOFOX Fireblade LED Backlit Wired USB Gaming Keyboard Black
            </h1>
            <p>
              {" "}
              <span style={{ color: "green" }}>4.1</span>4,746 Ratings & 696
              Reviews  <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" width={120} />  
            </p>
            <p style={{ color: "green", lineHeight:'0px' }}>Special price</p>

            <div className={classes.Right_2}>
              <p>$899</p>
              <p  className={classes.Right_2_cutPrice} style={{fontWeight:'100',fontSize:'18px',textDecoration: 'line-through'}}>₹ 19990</p>
              <p style={{ color: "green", marginLeft:'20px', fontSize:'23px'  }}>30% off</p>
            </div>

            <span style={{fontSize:'23px', color:'#212121', fontWeight:'600'}}>Available offers</span>
           <div className={classes.Right_2_Bank}>
            <p>
              <span>Bank Offer </span>Get ₹50 instant discount on first Flipkart UPI
              transaction on order of ₹200 and above
            </p>
            <p><span>Bank Offer </span> 5% Cashback on Flipkart Axis Bank Card</p>
            <p><span>Bank Offer </span>
              10% off on ICICI Bank Credit Card Transactions, up to
              ₹1000 on orders of ₹5,000 and above
            </p>
            <p><span>Bank Offer </span>
              Get extra 10% off (price inclusive of
              cashback/coupon)
            </p>
            <p style={{color:"#2874f0", fontWeight:"700" }}> View 21 more offers
            </p>
            <img src={photo} width={800}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
