import { Box, Button, Container, Grid,Stack,Typography  } from '@mui/material'
import React from 'react';
import './Nike.scss';

function Nike() {
    return (

        <>
    <Container container style={{display:"flex",paddingTop:"162px" , justifyContent:"space-between"}} maxWidth="xl" >
  <Grid item xs={12} md={8}>
    <Box>        <Typography className="headingtext">
        Nike New Launches!
        </Typography></Box>
  </Grid>
  <Grid item xs={12} md={4}>
    <Box> <Button className='viewall' variant='outlined'>View All</Button></Box>
  </Grid>
</Container>

    {/* <Stack direction="row"  >

        <Button className='viewall' variant='outlined'>View All</Button>
</Stack>
    */}
        

        <Container maxWidth='xl'className='nike'>
<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }} alignItems="center">
  <Grid item xs={6} md={6} lg={4} style={{paddingBottom:"20px"}}>
  <Box className='product product0'></Box>
                    <Box className="product-box">
                        <div className='product-details'>
                            <p className='product-name'>Nike Metcon</p>
                            <p className='product-price'>$120</p>
                        </div>
                        <div className='product-desc'>Training Shoes</div>
                        </Box>
  </Grid>
  <Grid item xs={6} md={6} lg={4}>
  <Box className='product product1 '></Box>
                    <Box className="product-box">
                        <div className='product-details'>
                            <p className='product-name'>Nike Metcon</p>
                            <p className='product-price'>$120</p>
                        </div>
                        <div className='product-desc'>Training Shoes</div>
                        </Box>
  </Grid>
  <Grid item xs={6} md={6} lg={4}>
  <Box className='product product2'></Box>
                    <Box className="product-box">
                        <div className='product-details'>
                            <p className='product-name'>Nike Metcon</p>
                            <p className='product-price'>$120</p>
                        </div>
                        <div className='product-desc'>Training Shoes</div>
                        </Box>
  </Grid>
  <Grid item xs={6} md={6} lg={4}>
  <Box className='product product3'></Box>
                    <Box className="product-box">
                        <div className='product-details'>
                            <p className='product-name'>Nike Metcon</p>
                            <p className='product-price'>$120</p>
                        </div>
                        <div className='product-desc'>Training Shoes</div>
                        </Box>
  </Grid>
  <Grid item xs={6} md={6} lg={4}>
  <Box className='product product4'></Box>
                    <Box className="product-box">
                        <div className='product-details'>
                            <p className='product-name'>Nike Metcon</p>
                            <p className='product-price'>$120</p>
                        </div>
                        <div className='product-desc'>Training Shoes</div>
                        </Box>
  </Grid>
  <Grid item xs={6} md={6} lg={4}>
  <Box className='product product5'></Box>
                    <Box className="product-box">
                        <div className='product-details'>
                            <p className='product-name'>Nike Metcon</p>
                            <p className='product-price'>$120</p>
                        </div>
                        <div className='product-desc'>Training Shoes</div>
                        </Box>
  </Grid>
</Grid>


           
        </Container>
        </>
    )
}

export default Nike