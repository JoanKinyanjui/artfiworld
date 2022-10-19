import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import './aboutus.scss'
function Aboutus() {
    return (
        <Container maxWidth='xl' className='aboutusparent'>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12} md={6} >

                    <Stack className = 'aboutustext'>
                        <Box>
                            <Typography className='heading'>About Us</Typography>
                        </Box>
                        <Box className= 'underline'></Box>
                        <Box className='boxdesc'>
                            <Typography className='description'>Fitbit was founded in 2020 as a family owned and operated business specialising in supplying high-quality gym equipment at great prices.</Typography>
                        </Box>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>

                    <Box className='aboutimage'></Box>
                </Grid>

            </Grid>
        </Container>
    )
}

export default Aboutus