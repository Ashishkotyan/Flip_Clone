import { Link } from 'react-router-dom';
import { AppBar, Toolbar, makeStyles, withStyles, Typography, Box } from '@material-ui/core';
// import './responsive.css'

//components 
import Searchbar from './Searchbar';
import HeaderButtons from './HeaderButton';

const userStyle = makeStyles({
    header: {
        background: '#2874f0',
        height: 55,
        '@media(max-width: 600px)' : {
            width: '100%',
            
            display:'flex',
            flexDirection:"column",
            height:'15vh',

           
            
              
        }
    },
    toolbar:{
        '@media(max-width: 600px)' : {
            width: '100%',
            // border:'2px solid red',
            display:'flex',
            flexDirection:"column",
            padding:'2px',
            
        

           
            
              
        }
    },
    logo: {
        width: 75,
        '@media(max-width: 600px)' : {
            
            
            position:'relative',

            
            
             

        },
    },
    subURL: {
        width: 10,
        height: 10,
        marginLeft: 4
    },
    box:
    {
        display: 'flex',
        '@media(max-width: 600px)' : {
            
            

            
            
             

        },

    },
    components: {
        marginLeft: '12%',
        lineHeight: 0,
        textDecoration:'none',
        color:'#fff'
    },
    subheading: {
        fontSize: 10,
        fontStyle: 'italic'
    }
})

const ToolBar = withStyles({

    root: {
        minHeight: 55
    }

})(Toolbar);


const Header = () => {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    const classes = userStyle();
    return (

        <AppBar className={`${classes.header} additional-class`} style={{position:"relative"}} >
            <ToolBar className={classes.toolbar}>
                <Link to='/Flip_Clone' className={classes.components}>
                    <img src={logoURL} className={classes.logo} />
                    <Box className={classes.box}>
                        <Typography className={classes.subheading}>Explore <Box component="span" style={{ color: '#FFE500' }}>plus</Box></Typography>

                        <img src={subURL} className={classes.subURL} />
                    </Box>
                </Link>
                
                <Searchbar  />
                
                <HeaderButtons />
            </ToolBar>
        </AppBar>



    )

}

export default Header;