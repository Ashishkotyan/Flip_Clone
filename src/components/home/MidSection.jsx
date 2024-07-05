import { classExpression } from "@babel/types";
import { Box, makeStyles } from "@material-ui/core";
import { imageURL } from "../../constant/data";

const userStyle = makeStyles({

    wrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        border:'2px solid red',
        contain:'content',
        
        '&>img':{
            width: "33%",
        },
        
        '@media(max-width: 600px)' : {
            '&>img':{
               
                maxWidth:'100%',
                height:'200px',

                    height:'100%',
                    marginTop:'10px'
                   
                    

                
           },
           bottomImg:{
            height:'200px',
            


           }
        },
        

    },
    bottomImg:{
        border:'2px solid red',
        width: '100%',
        '@media(max-width: 600px)' : {
                height:'150px',
                marginTop:"20px"
        }

    }
})


const MidSection = () => {
    const classes = userStyle();
    const coronaURL = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    return (
        <>

            <Box className={classes.wrapper}>
                {
                    imageURL.map(image => (
                        <img src={image}  />

                    ))
                }
            </Box>
            <img src={coronaURL} className={classes.bottomImg}  />

        </>

    )
}

export default MidSection;