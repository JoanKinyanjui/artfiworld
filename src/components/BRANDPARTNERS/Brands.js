import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'

import Nike from '../../assets/Nike.png'
import Puma from '../../assets/puma.png'
import Adidas from '../../assets/Adidas.png'
import UnderAmour from '../../assets/underamour.png'
import './brands.scss'

function Brands() {
    return (
        <Container maxWidth='xl' className = 'brandsparent'>
            <Grid container spacing={2} className="brandGrid">
                <Grid item xs={12} md={6}>
                    <Box>
                        <Typography className='brandpartners'>OUR BRAND PARTNERS</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box className='brandlogos'>
                        <img src = {Nike} alt = 'Nike'/>
                        <img src = {Adidas} alt = 'Adidas'/>
                        <img src = {Puma} alt = 'Puma'/>
                        <img src = {UnderAmour} alt = 'UnderAmour'/>

                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Brands