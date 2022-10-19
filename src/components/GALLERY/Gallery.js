import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

import './Gallery.scss'

function Gallery() {
    return (
        <Container maxWidth='xl' className='galleryParent'>

            <Grid container spacing={6}>
                <Grid item xs={12} sm={6}>
                    <Box className='gallery1'>
                        <Stack className = 'textgallery1'>
                            <Box className='gallerybox1'>
                                <Typography className='gallerytext1'>WorkOut Classes</Typography>
                            </Box>
                            <Button variant='outlined' className='browsebtn'> Browse</Button>
                        </Stack>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>

                    <Box className='gallery2'>
                    <Stack className = 'textgallery1'>
                            <Box className='gallerybox1'>
                                <Typography className='gallerytext1'>Browse Equipments</Typography>
                            </Box>
                            <Button variant='outlined' className='browsebtn'> Browse</Button>
                        </Stack>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>

                    <Box className='gallery3'>
                    <Stack className = 'textgallery1'>
                            <Box className='gallerybox1'>
                                <Typography className='gallerytext1'>Yoga Classes</Typography>
                            </Box>
                            <Button variant='outlined' className='browsebtn'> Browse</Button>
                        </Stack>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>

                    <Box className='gallery4'>
                    <Stack className = 'textgallery1'>
                            <Box className='gallerybox1'>
                                <Typography className='gallerytext1'>Brand Store</Typography>
                            </Box>
                            <Button variant='outlined' className='browsebtn'> Shop now</Button>
                        </Stack>
                    </Box>
                </Grid>
            </Grid>


            {/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className='gallerygrid'>
                <Grid item xs={6} md={6} className='gallery1'>
                     <Box className='gallery1'>
                        
                    </Box>
                </Grid>
                <Grid item xs={6} md={6} className='gallery2'>
                    <Box className='gallery2'>
                       
                    </Box>
                </Grid>
                <Grid item xs={6} md={6}>
                    <Box className='gallery2'>
                       
                    </Box>
                </Grid>
                <Grid item xs={6} md={6}>
                    <Box className='gallery2'>
                       
                    </Box>
                </Grid>
            </Grid> */}
        </Container>
    )
}

export default Gallery