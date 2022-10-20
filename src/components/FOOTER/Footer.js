import { Avatar, Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import FB from '../../assets/Facebook.png'
import Twitter from '../../assets/twitter.png'
import insta from '../../assets/insta.png'
import usa from '../../assets/usa.png'

import './footer.scss'


function Footer() {
    return (
     
    <Box sx={{
    background:'#F7F7F7',
    paddingTop:"30px",
    marginTop:"100px"

    }}>
        <Container maxWidth='xl' className='parentfooter'>
        <Grid container spacing={2} sx={{mb:'228px'}}>
            <Grid item xs={12} sm={4} className="footer-center" >
                <Stack>
                <Typography className = 'fitbitName2'>Fitbit<span className='period2'>.</span></Typography>
                <Box className='sociallinks'>
                    <img src= {insta} alt ='instagram'/>
                    <img src= {Twitter} alt ='Twitter'/>
                    <img src= {FB} alt ='Facebook'/>
                </Box>
                </Stack>

            </Grid>
            <Grid item xs={12} sm={3} className="footer-center" >
                <Stack spacing={3}>
                <Typography className = 'links'>Browse Classes</Typography>
                <Typography className = 'links'>Shop Now</Typography>
                <Typography className = 'links'>Our Studios</Typography>
                </Stack>

            </Grid>
            <Grid item xs={12} sm={3 } className="footer-center" >
                <Stack spacing={3}>
                <Typography className = 'links'>Services</Typography>
                <Typography className = 'links'>Pricing</Typography>
                <Typography className = 'links'>Our Blogs</Typography>
                </Stack>

            </Grid>
            <Grid item xs={12} sm={2} className="footer-center" >
                <Stack spacing={3}>
                <Typography className = 'links'>About Us</Typography>
                <Typography className = 'links'>Contact Us</Typography>

                </Stack>

            </Grid>
        </Grid>
        <Grid>
            <Grid container  color="#5F5F5F">
                <Grid item xs={12} sm={4} className="footer-center" >
                    <Typography>Copyright 2022 Fitbit. All rights reserved</Typography>
                </Grid>
                <Grid item xs={12} sm={4} className="footer-center" >
                    <Stack flexDirection="row" sx={{display:'flex', justifyContent:'space-between', flexDirection:{xs:'column', sm:'row'}}}>
                        <Typography>Privacy Policy</Typography>
                        <Typography>Cookie policy</Typography>
                        <Typography>Sitemap</Typography>
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={4} sx={{pb:{xs:'2%',sm:'2%', md:"2%"}}} className="footer-center-btn" >
                    <Button variant='outlined' startIcon={<Avatar src={usa} sx={{ width:'20px', height:'20px'}}/>} className='countrybtn' endIcon={<KeyboardArrowDownIcon/>}> United States</Button>
                </Grid>
            </Grid>
        </Grid>
        </Container>
        </Box>
    )
}

export default Footer