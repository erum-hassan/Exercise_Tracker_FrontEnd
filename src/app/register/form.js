'use client'
import React from 'react'
import { Box,TextField,Typography,Button } from '@mui/material'
import styles from '../page.module.css'
import Link from 'next/link';
import {auth} from '../api/auth';
import { useRouter } from 'next/navigation';

import { useRef } from 'react'

export default function Form() {
  const router = useRouter();

  
  const name = useRef()
  const email= useRef()
  const password = useRef()  


 

  const signup= async ()=>{
    if(name.current.value ==""|| email.current.value==""||password.current.value==""){
      alert('Please fill form')
    
      }


      
    const  n = name.current.value
    const  e= email.current.value
    const  p= password.current.value

    const data={
      name:n,
      email:e,
      password:p
    }

     
   const  token = await auth(data)

  
   
   if(token)
  {

    router.push('/exercises')
  }
 
 
  }

  return (
    <div>
    <form>
    <Box display={'flex'} justifyContent={'center'} flexDirection={'column'} width={350} height={400} margin={'auto'} padding={5} borderRadius={5} boxShadow={'0px 7px 29px 0px #ccc'}  marginTop={20}>
    <Typography variant='h4' padding={3} textAlign={'center'} color={'#1976d2'}>
     Registeration Form
    </Typography>
    <TextField inputRef={name}   variant='outlined' placeholder='Name' type={'text'} margin={'normal'}/>
    <TextField inputRef={email}   variant='outlined' placeholder='Email' type={'email'} margin={'normal'}/>
    <TextField inputRef={password} variant='outlined' placeholder='Password' type={'password'}  margin={'normal'}/>
   <Button  onClick={signup}  variant='contained'sx={{marginTop:3,borderRadius:2}} >Signup</Button>
   <Typography   padding={1} textAlign={'center'} color={'#1976d2'}>
    Already have an account!  <Button ><Link className={styles.signuplink}   href={'login'}>Login</Link></Button>
    </Typography>
    </Box>
    </form>
    </div>
  )
}
