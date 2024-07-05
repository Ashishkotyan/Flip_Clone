import { makeStyles, fade, InputBase } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import './responsive.css'


const userStyle = makeStyles((theme) => ({
  search: {

    borderRadius: 2,
    backgroundColor: '#fff',

    marginLeft: 10,
    width: '38%',
    display: 'flex',
    color: 'black',
    '@media(max-width: 600px)' : {
            
      marginTop:"20px",
      marginLeft:'20px',
      width:'70%'
      
      
      
       

  },


  },
  searchIcon: {
    padding: 5,
    height: '100%',

    display: 'flex',

    color: 'blue'
  },
  inputRoot: {
    fontSize: 'unset',
    width: '100%'
  },
  inputInput: {
    paddingLeft: 20,

  },
}))

const Searchbar = () => {
  const classes = userStyle();

  return (<div className={`${classes.search} searchbar`}>
    <InputBase
    className='inputbar'
      placeholder="Search for products, brands and more"
      classes={{root: classes.inputRoot,input: classes.inputInput,
      }}
      inputProps={{ 'aria-label': 'search' }}
    />
    <div className={classes.searchIcon}>
      <Search />
    </div>

  </div>
  )
}

export default Searchbar;