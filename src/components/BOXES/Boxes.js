import { Box, Container, Grid, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import './Boxes.scss';

function BoxesDiv() {
  return (
    <Container maxWidth="xl" style={{paddingTop:"172px"}} >
<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
  <Grid item xs={6} sm={3} >
    <Stack className="BoxesStack" >
        <Typography className='Numbers'>50+</Typography>
        <Typography className="Sentence" >Outlets</Typography>
    </Stack>
  </Grid>
  <Grid item xs={6} sm={3} >
  <Stack className="BoxesStack" >
        <Typography className='Numbers1'>100k+</Typography>
        <Typography className="Sentence">Students</Typography>
    </Stack>
  </Grid>
  <Grid item xs={6} sm={3} >
  <Stack className="BoxesStack" >
        <Typography className='Numbers'>200+</Typography>
        <Typography className="Sentence">Trainers</Typography>
    </Stack>
  </Grid>
  <Grid item xs={6} sm={3} >
  <Stack className="BoxesStack" >
        <Typography className='Numbers'>50k+</Typography>
        <Typography className="Sentence">Members</Typography>
    </Stack>
  </Grid>
</Grid>
    </Container>
  )
}

export default BoxesDiv;