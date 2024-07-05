import React from "react";
import "../../App.css";

// import {XIcon,TwitterIcon ,YouTubeIcon } from '@material-ui/icons';
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import { makeStyles } from "@material-ui/core";

const userStyle = makeStyles({
  Footer: {
    display: "flex",
    background: "#212121",
    color: "#FFFFFF",
    alignItems: "center",

    '@media(max-width: 600px)' : {
      
              // border:'2px solid red',
              // display:"none"
              // contain:'content',
              // display: "flex",
              // flexDirection:'row',
              display:'block',
              
          
     }
  },
  main: {
    display: "flex",
    // border: "2px solid red",
    justifyContent: "space-around",
    height: "50vh",
    fontSize: "12px",
    flex: 5,
    // border:'2px solid blue',
    '@media(max-width: 600px)' : {
      // width:100
      display:'flex',
      flexDirection:'row',
      height:'60%',

      
  },


    "&>div": {
      height: "max-content",
      marginTop: "15px",
      // border:'2px solid blue',
      width:'80px',
      fontSize:"12px",
      // marginLeft:'10px'
    },
  },
 
  Main_Right: {
    flex: 3,
    display: "flex",
    fontSize: "12px",
    borderLeft: "1px solid #454d5e",
    marginBottom: "40px",
    // border:'2px solid red',
    '@media(max-width: 600px)' : {
      // width:100
      // display:'flex',
      // flexDirection:'row',
      height:'60%',
      // border:'2px solid red',
      marginTop:'40px',



      
  },

    "&>div": {
      marginLeft: "40px",
      '@media(max-width: 600px)' : {
      // border:'2px solid red',
      width:'200px',
      marginLeft:'0',
      height:'50vh',
      marginTop:'90px'
  
        
    },
    },
    "&>div>p": {
      padding: "0px",
      lineHeight: "10px",
    },
  },
});

export default function Footer() {
  const classes = userStyle();

  return (
    <>
      <div className={classes.Footer}>
        <main className={classes.main}>
          <div className="About LiEffect">
            <p className="FotterHeading">ABOUT</p>
            <li>Contact Us</li>
            <li>About us</li>
            <li>Careers</li>
            <li>Flipkart Stories</li>
          </div>

          <div className="Group LiEffect">
            <p className="FotterHeading">GROUP COMPANIES</p>
            <li>Myntra</li>
            <li>Cleartrip</li>
            <li>Shopsy</li>
          </div>

          <div className="Help LiEffect">
            <p className="FotterHeading">HELP</p>
            <li>Payments</li>
            <li>Shiping</li>
            <li>FAQ</li>
            <li>Report infringment</li>
          </div>

          <div className="Help LiEffect">
            <p className="FotterHeading">CONSUMER POLICY</p>
            <li>Cancellation & Returns</li>
            <li>Terms Of Use</li>
            <li>Security</li>
            <li>Privacy</li>
            <li>Sitemap</li>
            <li>Grievance</li>
            <li>EPR Compliance</li>
          </div>
        </main>

        <div className={classes.Main_Right}>
          <div className="Main_Right_1 LiEffect">
            <p className="FotterHeading">Mail Us:</p>
            <p>Flipkart Internet Private Limited, </p>
            <p> Buildings Alyssa, Begonia & </p>
            <p> Clove Embassy Tech Village, </p>
            <p> Bengaluru, 560103, </p>
            <p> Karnataka, India</p>
            <p className="FotterHeading">Social: </p>
            <div  >

            <YouTubeIcon  style={{ cursor:'pointer'}} />
            <XIcon style={{marginLeft:'10px', cursor:'pointer'}} />
            <FacebookIcon style={{marginLeft:'10px', cursor:'pointer' }} />
            </div>
          </div>

          <div className="Main_Right_2 LiEffect">
            <p className="FotterHeading">Registered Office Address: </p>
            <p>Flipkart Internet Private Limited, </p>
            <p> Buildings Alyssa, Begonia & </p>
            <p> Clove Embassy Tech Village, </p>
            <p> Bengaluru, 560103, </p>
            <p> CIN : <span style={{color:"blue"}}>U51109KA2012PTC066107 </span> </p>
            
          </div>
          
        </div>
      </div>
    </>
  );
}
