'use client'
import React from 'react'
import { Box,TextField,Typography,Button,Alert } from '@mui/material'
import {  useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import {useRef} from 'react'
import styles from '../page.module.css'
import Link from 'next/link'
import { login } from '../api/auth'
import { useRouter } from 'next/navigation';

export default function Form() {

  const [snackOpen, setSnackOpen] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClose = () => setOpen(false);
  const router = useRouter();
  const email = useRef()
  const password = useRef()
  const getData = async  () =>{
    
    setSnackOpen(true);  

    if(email.current.value == "" || password.current.value==""){
      alert('Please fill form')
    }
    
    const data = {

      email: email.current.value,
      password:password.current.value
    }
    const result = await login(data)

    if(result){
      console.log(result)
      
      router.push('/exercises')
    }
    
  }
  return (
    <div>
      <form>
      <Box display={'flex'} justifyContent={'center'} flexDirection={'column'} width={300} height={300} margin={'auto'} padding={5} borderRadius={5} boxShadow={'0px 7px 29px 0px #ccc'}  marginTop={20}>
      <Typography variant='h3' padding={3} textAlign={'center'} color={'#1976d2'}>
       Login Form
      </Typography>
      <TextField  inputRef={email}   variant='outlined' placeholder='Email' type={'email'} margin={'normal'}/>
      <TextField inputRef={password}       variant='outlined' placeholder='Password' type={'password'}  margin={'normal'}/>
     <Button  onClick={getData}   variant='contained'sx={{marginTop:3,borderRadius:2}} >Login</Button>
     <Typography padding={1} textAlign={'center'} color={'#1976d2'}>
      Not having Account <Button ><Link className={styles.signuplink}   href={'register'}>Signup</Link></Button>
      </Typography>
      </Box>
      </form>

      <Snackbar
      open={snackOpen}
      autoHideDuration={3000}
      onClose={() => setSnackOpen(false)}
    >
      <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
       Login Complete !
      </Alert>
    </Snackbar>
    </div>
  )
}
