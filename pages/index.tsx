import { Typography, Box } from '@mui/material'
import React from 'react';
import bg from "../public/bg.jpg";

export default function index() {

  return (

    <Box component="main" sx={{
      width: '100%',
      height: '100vh',
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundImage: `url(${bg.src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      
    }}
    >

      <Typography component="h1" variant="h2" sx={{fontFamily: 'poppins'}}>Executando React com Next.JS</Typography>
      <Typography component="h2" variant="h4" sx={{mt: 2,  fontFamily: 'poppins'}}>Site criado em TypeScript publicado na Vercel.</Typography>
      <Typography component="h3" variant="h5" sx={{mt: 4, fontFamily: 'poppins',}}>Grupo 3 | IL2MR</Typography>

    </Box>

  )

}