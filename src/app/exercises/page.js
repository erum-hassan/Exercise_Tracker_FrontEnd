"use client"
import React,{useState,useEffect} from 'react'
import Activity from './acitvity'
import UserNavbar from '../UI/UserNavbar'
import { useRouter } from 'next/navigation';

export default function Exercises() {
  const router = useRouter();
  const [initialRender, setInitialRender] = useState(false)
  useEffect(() => {
    if(!localStorage.getItem('token')){
      router.push("/login")
    }
    else{
      setInitialRender(true)
    }
    
    
  }, []);

  if(!initialRender){
    return null
  }

  return (
    <div>
    <UserNavbar/>
     <Activity/>
    </div>
  )
}
