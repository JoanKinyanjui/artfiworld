import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import './sub.scss'

function Subscribe() {
  return (
 <div className='Subscribe'>
    <Grid maxWidth="xl" className='subparent'>
   <Box className='subbox'>
    <Typography className='subscribetext'> Subscribe to our newsletter.</Typography>
    <Button className='btnSubscribe'>Subscribe</Button>
   </Box>
   </Grid>
 </div>
  )
}

export default Subscribe