import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <AppBar position='absolute' sx={{backgroundColor:'#333333',
                  color:'white'
                  
                }}>
        <Toolbar>
             <Typography variant="h5"   sx={{ml:2}}>CONTACT BOOK </Typography>
             <Box sx={{marginLeft:'auto'}}>
            <Link to="/login">
           <Button variant="contained" color='secondary'>login</Button>
           </Link>&nbsp;
           <Link to="/s">
           <Button variant="contained" color='secondary'>Signup</Button>
           </Link>&nbsp;
            <Link to="/a">
           <Button variant="contained" color='secondary'>Add</Button>
           </Link>&nbsp;
            <Link to="/v">
           <Button variant="contained" color='secondary'>View</Button>
           </Link>&nbsp;
            <Link to="/Ab">
                <Button variant="contained" color='inherit'>Aboutus</Button>
                </Link>
            <Link to="/Birthdays">
                <Button variant="contained" sx={{ backgroundColor: 'white', color: 'grey' }}>Birthdays</Button>
                </Link>
           </Box>
        </Toolbar>
      </AppBar>
      <br /><br /><br />
    </div>
  )
}

export default Navbar
