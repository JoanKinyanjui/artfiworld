
import {
    AppBar,
    Box,
    Button,
    Container,
    IconButton,
    Toolbar,
    Typography,
  } from "@mui/material";


 
import { useState } from "react";
import './apbar.scss'

  import MenuIcon from "@mui/icons-material/Menu";
import Navdrawer from "./Navdrawer";
  const Navbar = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    return (
      <AppBar sx={{background:'#fff',maxWidth:"100vw",width:"100%",margin:"0" }} >
        <Container maxWidth="xl">
          <Toolbar sx={{height:'100px'}}>
            <Box sx={{ width:{md:'40%',xs:'100%'} }}>
            <Typography className = 'fitbitName'>Fitbit<span className='period'>.</span></Typography>
            </Box>
            <Box
              color="#fff"
              sx={{
                display: "flex",
                width: { xs: "5%", md: "60%", lg:'40%' },
                justifyContent: "space-around",
                opacity: { xs: 0, md: 1 },
              }}
            >
                    <Typography color="#000" sx={{cursor:'pointer'}}>Browse Classes</Typography>
                    <Typography color="#000" sx={{cursor:'pointer'}}> Shop</Typography>
                 <Typography color="#000" sx={{cursor:'pointer'}}> Pricing</Typography>
                    <Typography color="#000" sx={{cursor:'pointer'}}>Blog</Typography>
                     <Typography color="#000" sx={{cursor:'pointer'}}> About Us</Typography>
                    <Typography color="#000" sx={{cursor:'pointer'}}>Contact Us</Typography>
            </Box>
            <Box sx={{width:'30%', display:'flex', justifyContent:'flex-end',display: { xs: "none", md: "flex" }  }}>
            <Button variant='outlined' className='btnLogin'>Login</Button>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton onClick={handleOpen}>
                <MenuIcon sx={{ color: "#000" }} />
              </IconButton>
            </Box>
            <Navdrawer handleOpen={handleOpen} open={open} setOpen={setOpen} />
          </Toolbar>
        </Container>
      </AppBar>
    );
  };
  export default Navbar;