import React from 'react';
import "./Blogs.scss";
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'

function Blogs() {
    return (
        <Container maxWidth='xl' sx={{p:10}}>
            <Box className='newlaunch'>
                <Typography className='headingtext'>Our Blogs</Typography>
            </Box>
            <Box className='underline2'>
            </Box>

            <Grid container spacing={3} className='blogparent'>
                <Grid item xs={12} sm={6}>
                    <Box className='Blog1'>
                        <Stack className='textgallery1'>
                            <Box className='gallerybox1'>
                                <Typography className='gallerytext1'>WorkOut Classes</Typography>
                            </Box>
                            <Button variant='outlined' className='browsebtn'> Browse</Button>
                        </Stack>
                    </Box>
                </Grid>

                <Grid item xs={6} className='grid2' sx={{gap:'20px'}}>
                    <Stack sx={{gap:'40px'}}>
                    <Box className='Blog2'>
                        <Stack className='textgallery1'>
                            <Box className='gallerybox1'>
                                <Typography className='gallerytext1'>WorkOut Classes</Typography>
                            </Box>
                            <Button variant='outlined' className='browsebtn'> Browse</Button>
                        </Stack>
                    </Box>
                    <Box className='Blog3'>
                        <Stack className='textgallery1'>
                            <Box className='gallerybox1'>
                                <Typography className='gallerytext1'>WorkOut Classes</Typography>
                            </Box>
                            <Button variant='outlined' className='browsebtn'> Browse</Button>
                        </Stack>
                    </Box>
                    </Stack>
                    
                </Grid>
            </Grid>
        </Container>
    )
}

export default Blogs