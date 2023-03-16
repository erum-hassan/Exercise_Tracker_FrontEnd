'use client'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Typography,Button } from '@mui/material'
import styles from './page.module.css'
import Link from 'next/link'
import Navbar from './UI/Navbar'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    
   <main className={styles.alignment} >
   <Navbar/>
   <Image src='/background.jpg'alt='HomepageImage' width={500} height={500}/>
    <Typography className={styles.heading} variant='h1' component='h1'>Organise Your Exercise </Typography>
    <Button variant="contained"  ><Link href="login">Start Here</Link></Button>
   
   </main>
  )
}
