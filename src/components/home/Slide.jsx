import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Link, useHistory   } from 'react-router-dom';

import {prod}  from '../card/Product.jsx'

import { makeStyles, Box, Typography, Button } from "@material-ui/core";

import Countdown from "react-countdown";
import { fontWeight } from "@material-ui/system";
import { Divider } from "@material-ui/core";
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

// const userStyle = makeStyles({
//     image: {
//         height: 150,
//         '&:hover':{
//             cursor:'pointer',
//             transform: 'scale(1.05)',
//             transition: '.2s ease-in-out'

//         },
//     },
//     component: {
//         marginTop: 12,
//         Background: '#ffffff',
//         border:'2px solid red',
//         '@media(max-width: 600px)' : {

//         }
//     },
//     dealtetx: {
//         fontSize: 22,
//         fontWeight: 600,
//         lineHeight: "32px",
//         marginRight: 25,

//     },
//     timer: {
//         color: '#7f7f7f',
//         marginLeft: 10,
//         display: 'flex',
//         // border:'2px solid red',
//         alignItems: 'center',
//         '@media(max-width: 600px)' : {
//             marginLeft: 0,
//             marginRight:30,
//             display: 'flex',
//             width:'180px',
//             height:'50px',
            
            
//         }

//     },
//     time:{
//         width:"200px",
//         // border:'2px solid red'
//     },
//     deal: {
//         padding: '15px 20px',
//         display: 'flex',
//         // border:'2px solid red',
//     },
//     button: {
//         marginLeft: 'auto',
//         background: '#2874f0',
//         borderRadius: 2,
//         fontSize: 13,
//         '@media(max-width: 600px)' : {
//             fontSize:'12px',
//             width:'120px',
//             height:"45px",
//             padding:0,

                
                
//             }

//     },
//     text: {
//         fontSize: 16,
//         marginTop: 5,
        
//     },
    
//     wrapper: {
//         padding:"36px 15px",
//         cursor:"pointer",
//         // border:'2px solid red',
//         // background:"#ffff",
        

//     },
//     dealtetx:{
//         '@media(max-width: 600px)' : {
//             fontSize:'20px'
//         }
//     },
    




// })


// const Slide = ({timer, title, products}) => {
//     const classes = userStyle();

   
//     let history = useHistory();
    
//     const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

    
//     // console.log(getProducts ,".............................")

//     const renderer = ({ hours, minutes, seconds }) => {
//         return <span className={classes.timer}>{hours} : {minutes} : {seconds} left</span>;
//     }

//     return (
//         <Box className={classes.component}>
//             <Box className={classes.deal}>
//                 <Typography className={classes.dealtetx}>{title}</Typography>
//                {
                
//                timer &&
//                <>
//                 <img src={timerURL} style={{ width: 24 }} />
//                 <Countdown  className={classes.time} date={Date.now() + 5.04e+7} renderer={renderer} />
//                 <Button variant="contained" color="primary" className={classes.button}>View All</Button>
//                 </>
//                }
//             </Box>
//             <Divider/>
//             <Carousel responsive={responsive}
//                 infinite={true}
//                 draggable={false}
//                 swipeable={false}
//                 centerMode={true}
//                 autoPlay={true}
//                 keyBoardControl={true}
//                 showDots={false}
//                 removeArrowOnDeviceType={["tablet", "mobil"]}
//                 dotListClass="custom-dot-list-style"
//                 itemClass="carousel-item-padding-40-px"
//                 containerClass="carousel-container"
//             >
//                 {
//                     products.map(product => (
//                         <Box textAlign="center"  className={classes.wrapper} onClick={()=> history.push({pathname:`/Card:${product.id}`, state:product}) } >
//                            <img src={product.url} className={classes.image} />
//                             <Typography className={classes.text} style={{ fontWeight: 600, color: '#212121' }} >{product.title.shortTitle}</Typography>
//                             <Typography className={classes.text} style={{ color: 'green' }} >{product.discount}</Typography>
//                             <Typography className={classes.text} style={{color: '#212121', opacity:'.6' }}>{product.tagline}</Typography>
//                         </Box>
//                     ))
//                 }
//             </Carousel>
//         </Box>
//     )
    
// }

// export default Slide;








// 

const userStyle = makeStyles({
    image: {
        height: 150,
        '&:hover': {
            cursor: 'pointer',
            transform: 'scale(1.05)',
            transition: 'transform 0.2s ease-in-out'
        },
    },
    component: {
        marginTop: 12,
        backgroundColor: '#ffffff', // Corrected 'Background' to 'backgroundColor'
        border: '2px solid red',
        '@media(max-width: 600px)': {
            marginTop: 8,
            padding: '10px 5px',
            border: '1px solid red',
        }
    },
    dealtetx: {
        fontSize: 22,
        fontWeight: 600,
        lineHeight: "32px",
        marginRight: 25,
        '@media(max-width: 600px)': {
            fontSize: 15,
            marginRight: 15,
        },
    },
    timer: {
        color: '#7f7f7f',
        marginLeft: 10,
        display: 'flex',
        alignItems: 'center',
        '@media(max-width: 600px)': {
            marginLeft: 0,
            marginRight: 10,
            width: '180px',
            height: '50px',
        }
    },
    deal: {
        padding: '15px 20px',
        display: 'flex',
    },
    button: {
        marginLeft: 'auto',
        background: '#2874f0',
        borderRadius: 2,
        fontSize: 13,
        '@media(max-width: 600px)': {
            fontSize: '12px',
            width: '100px',
            height: "40px",
            padding: '0 5px',
        }
    },
    text: {
        fontSize: 16,
        marginTop: 5,
    },
    wrapper: {
        padding: "36px 15px",
        cursor: "pointer",
    },
})



const Slide = ({ timer, title, products }) => {
    const classes = userStyle();
    let history = useHistory();
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

    const renderer = ({ hours, minutes, seconds }) => {
        return <span className={classes.timer}>{hours} : {minutes} : {seconds} left</span>;
    };

    return (
        <Box className={classes.component}>
            <Box className={classes.deal}>
                <Typography className={classes.dealtetx}>{title}</Typography>
                {timer &&
                    <>
                        <img src={timerURL} style={{ width: 24, marginRight: 10 }} />
                        <Countdown className={classes.time} date={Date.now() + 5.04e+7} renderer={renderer} />
                        <Button variant="contained" color="primary" className={classes.button}>View All</Button>
                    </>
                }
            </Box>
            <Divider />
            <Carousel
                responsive={responsive}
                infinite={true}
                draggable={false}
                swipeable={false}
                centerMode={true}
                autoPlay={true}
                keyBoardControl={true}
                showDots={false}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container"
            >
                {products.map(product => (
                    <Box key={product.id} textAlign="center" className={classes.wrapper} onClick={() => history.push({ pathname: `/Card:${product.id}`, state: product })}>
                        <img src={product.url} alt={product.title.shortTitle} className={classes.image} />
                        <Typography className={classes.text} style={{ fontWeight: 600, color: '#212121' }}>{product.title.shortTitle}</Typography>
                        <Typography className={classes.text} style={{ color: 'green' }}>{product.discount}</Typography>
                        <Typography className={classes.text} style={{ color: '#212121', opacity: '.6' }}>{product.tagline}</Typography>
                    </Box>
                ))}
            </Carousel>
        </Box>
    );
};

export default Slide;