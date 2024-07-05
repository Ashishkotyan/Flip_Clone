
import { navData, } from '../../constant/data';
import { Box, Typography, makeStyles } from '@material-ui/core';

const userStyle = makeStyles({
    component: {
        display: 'flex',
        margin: '55px 130px 0 130px',
        justifyContent: 'space-between',
        '@media(max-width: 600px)' : {
            
          display:'flex',
          flexDirection:"row",
        //   border:'2px solid red',
                flexWrap:'wrap',
                // contain:'content',
                width:'100%',
                marginLeft:'0px',


            
             

        },
   


    },
    container: {
        textAlign: 'center',
        padding: '12px 8px',
        // border:'2px solid grey',
        '@media(max-width: 600px)' : {
            width:100
        }

    },
    image: {
        width: 70,
        '@media(max-width: 600px)' : {
            width:70
        }
    },
    text: {
        fontSize: 14,
        fontWeight: 600

    }

})

const Navbar = () => {
    const classes = userStyle();
    return (
        <Box className={classes.component}>
            {
                navData.map(data => (
                    <Box className={classes.container}>
                        <img src={data.url} className={classes.image} />
                        <Typography className={classes.text} >{data.text}</Typography>
                    </Box>
                ))
            }

        </Box>
    )

}

export default Navbar;