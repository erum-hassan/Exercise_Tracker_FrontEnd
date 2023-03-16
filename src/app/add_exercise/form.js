"use client";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import React,{useEffect, useState} from "react";
import { addExercise } from "../api/auth";
import moment from 'moment';
import { useRouter } from 'next/navigation';


import {
  Grid,
  Box,
  TextField,
  Typography,
  Button,
  InputLabel,
  MenuItem,
  Snackbar,
  Alert
} from "@mui/material";



import styles from "../page.module.css";
import Link from "next/link";

import { useRef } from "react";

export default function Form() {

  const [snackOpen, setSnackOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [token,setToken] = useState()
  const router = useRouter();
  useEffect(()=>{
    const result = localStorage.getItem('token')
    setToken(result)
   },[])
  

 const  starttime = useRef(null)
 const endtime= useRef(null)
 const name = useRef()
 const description = useRef()
 const [select,setSelect] = useState("")
 const date = useRef()

 

 const gettime=()=>{
  // Get Token

 
  setSnackOpen(true);  

 

 if(name.current.value == ""||description.current.value == ""||select == ""||starttime.current.value ==""|| endtime.current.value=="" || date.current.value==""){
  alert('Please Enter All Fields')
 }


 const sendData = async()=>{
  
  JSON.stringify(data)
  const value = await  addExercise(data,token)
  router.push('/exercises')
 }
 


  //Time

const  startedtime = moment(starttime.current.value, "hh:mm A")


const  endedtime = moment(endtime.current.value, "hh:mm A")


  let minutes = moment(endedtime).diff(startedtime,"minutes");
 

  // console.log(minutes)


  const data = {
     name : name.current.value,
    description : description.current.value,
    activity:select.target.value,
    duration:minutes,
    date :date.current.value
  
    

  }

  
  
 
  
    console.log(data)
    sendData()

  


 
  
 
 }
 
  return (
    <div>
      <form>
        <Box
          display={"flex"}
          justify={"center"}
          flexDirection={"column"}
          width={500}
          height={700}
          margin={"auto"}
          padding={5}
          borderRadius={5}
          boxShadow={"0px 7px 29px 0px #ccc"}
          marginTop={15}
        >
          <Typography
            variant="h3"
            padding={3}
            textAlign={"center"}
            color={"#1976d2"}
          >
            Add Exercise
          </Typography>
          <InputLabel >Name</InputLabel>
          <TextField
          inputRef={name}
            variant="outlined"
            placeholder="Name"
            type={"text"}
            margin={"normal"}
            size="small"
          />
          <InputLabel >Description</InputLabel>
          <TextField
          inputRef={description}
            multiline
            rows={1}
            maxRows={4}
            variant="outlined"
            placeholder="Description"
            type={"text"}
            margin={"normal"}
            size={"small"}
          />

          <InputLabel>Activity Type</InputLabel>
          <TextField
           onChange={(r)=>setSelect(r)}
            size="small"
            fullWidth
            select
            label="Select Activity"
            margin={"normal"}
          >
            <MenuItem value="Swimming">Swimming</MenuItem>
            <MenuItem value="Running">Running</MenuItem>
            <MenuItem value="Bicycle">Bicycle Ride</MenuItem>
            <MenuItem value="Hike">Hike</MenuItem>
          </TextField>

          <Grid
            container
            display={"flex"}
            sx={{ justifyContent: "space-between" }}
          >
            <Grid item>
              <Box>
                <InputLabel>Start Time</InputLabel>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <MobileTimePicker  inputRef={starttime}      />
                </LocalizationProvider>
              </Box>
            </Grid>
            <Grid item>
              <Box>
                <InputLabel>End Time</InputLabel>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <MobileTimePicker  inputRef={endtime} />
                </LocalizationProvider>
              </Box>
            </Grid>
          </Grid>

          <InputLabel>Date</InputLabel>
          <TextField
          inputRef={date}
            fullWidth
            variant="outlined"
            placeholder="Date"
            type={"date"}
            margin={"normal"}
            size="small"
          />

          <Button onClick={gettime}                   variant="contained" sx={{ marginTop: 3, borderRadius: 2 }} >
            Add Exercise
          </Button>
         
        </Box>
      </form>
      <Snackbar
      open={snackOpen}
      autoHideDuration={3000}
      onClose={() => setSnackOpen(false)}
    >
      <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
       Activity Added
      </Alert>
    </Snackbar>
    </div>
  );
}
