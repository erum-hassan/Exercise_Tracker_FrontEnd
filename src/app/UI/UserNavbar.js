'use client';
import React, { useEffect, useState } from 'react'
import { AppBar,Toolbar,Stack, Typography,Button } from '@mui/material'
import Link from 'next/link';
export default function UserNavbar() {
 
  const logout =()=> {
    localStorage.clear(); 
  }
  

  

    return (
      <AppBar  position="fixed" margin={0}>
      <Toolbar>
       <Typography variant='h6'  sx={{flexGrow:1}} >
       <Link href=''>Exercises</Link>
       </Typography>
       
      
       <Stack direction='row' spacing={2}>
      
       <Button color='inherit'><Link href='exercises'>Exercise</Link></Button>
       <Button color='inherit'><Link href='add_exercise'>Add Exercise</Link></Button>
       <Button color='inherit' onClick={logout}><Link href='login'>Logout</Link></Button>
       </Stack>
      </Toolbar>
      </AppBar>
     )
  }
 
 
 

