'use client';
import React, { useEffect, useState } from 'react'
import { AppBar,Toolbar,Stack, Typography,Button } from '@mui/material'
import Link from 'next/link';
export default function Navbar() {
 
  

  

    return (
      <AppBar  position="fixed" margin={0}>
      <Toolbar>
       <Typography variant='h6'  sx={{flexGrow:1}} >
       <Link href=''>Exercises</Link>
       </Typography>
       
      
       <Stack direction='row' spacing={2}>
       <Button color='inherit'><Link href='register'>Register</Link></Button>
       <Button color='inherit'><Link href='login'>Login</Link></Button>
       </Stack>
      </Toolbar>
      </AppBar>
     )
  }
 
 
 

