import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import video from '../../assets/production ID_4761426.mp4'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import './hero.scss'

function Hero() {
  return (
    <>
    <Box className='heroParent'>
        <video className = 'bgVideo' autoPlay muted loop >
            <source src={video} type='video/mp4' />
            Your browser is not supported
        </video>
    </Box>
    <Box>
        <Stack className='heroStack'>
            <Box className = 'dareBox' >
                <Typography className = 'dareText'>Dare to be great.</Typography>
            </Box>
            <Box className = 'Buttons'>
                <Button className = 'startbtn'>Get started</Button>
                <Button variant="outlined" startIcon={<PlayCircleIcon sx={{color:'#fff'}} />} className ='demobtn'> Watch Demo</Button>
            </Box>
        </Stack>
    </Box>
    </>
  )
}

export default Hero