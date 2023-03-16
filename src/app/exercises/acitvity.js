"use client";
import "../globals.css";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { getAll } from "../api/auth";
import { deleteExercise } from "../api/auth";
import { updateExercise } from "../api/auth";


import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import moment from "moment";
import { useRef } from "react";
import {
  Alert,
  Box,
  MenuItem,
  Container,
  Typography,
  Paper,
  Button,
  Grid,
  shadows,
  Modal,
  InputLabel,
  TextField,
  Select,
  Snackbar
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 10,
  p: 4,
};

export default function Activity() {
 
  
  //Toaster

  const [snackOpen, setSnackOpen] = useState(false);
  const [snackDelete, setSnackDelete] = useState(false);
  
  
  //Modal
  const [update, setUpdate] = useState({});
  const [open, setOpen] = React.useState(false);
 

  
 useEffect(()=>{
  myfunction()
 },[])

 
  const handleOpen = (e) => {
    console.log()
    setOpen(true);
    setUpdate(e);
    
    
    
  };
  const handleClose = () => setOpen(false);

  //Api

 
  const name = useRef();
  const description = useRef();
  const [select, setSelect] = useState("");
  const date = useRef();
  const duration = useRef()
  const activity = useRef()

  const [list, setList] = useState([]);
  
 

  async function myfunction() {
    const d = localStorage.getItem("token");
    const result = await getAll(d);
   
    if (result) {
      setList(result);

    }

    
    
  }

  async function updateItem() {
    setSnackOpen(true);
  

    // console.log(minutes)

    const data = {
      name: name.current.value,
      description: description.current.value,
      activity:select,
      duration:duration.current.value,
      date:date.current.value,
    };
   
    const token = localStorage.getItem("token");
    const result = await updateExercise(update._id, data, token);

    myfunction();
    handleClose();
  }
  async function deleteItem(id) {
    setSnackDelete(true)
    const token = localStorage.getItem("token");
    const result = await deleteExercise(id, token);
    myfunction();
  }
   
 
   
    

  
  
  return (
    <div>
      
      <Container style={{marginBottom:'50px'}}>
        {list.map((item) => (
          <Grid
            container
            key={item._id}
            marginTop={15}
            sx={{ justifyContent: "center" }}
          >
            <Paper justifycontent={"center"} sx={{ boxShadow: 3 }}>
              <Box
                width={850}
                height={250}
                display={"flex"}
                justifyContent={"space-between"}
              >
                <div>
                  <Box
                    sx={{
                      bgcolor: "warning.main",
                      width: 200,
                      height: 30,
                      m: 3,
                      borderRadius: "25px",
                    }}
                    style={{
                      color: "white",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {moment(item.date).format("DD MM YYYY")}
                  </Box>
                  <Box>
                    <Box
                      display={"flex"}
                      justifyContent={"space-between"}
                      style={{ height: "120px" }}
                    >
                      <h1
                        style={{
                          marginLeft: "40px",
                          textTransform: "uppercase",
                          color: "rgb(33,150,243)",
                          height: "40px",
                          fontFamily: "monospace",
                          fontSize: "50px",
                        }}
                      >
                        {item.name.slice(0, 8)}
                      </h1>
                      <h1
                        style={{
                          fontSize: "110px",
                          marginLeft: "130px",
                          textTransform: "uppercase",
                          color: "rgb(33,150,243)",
                          height: "120px",
                          transform: "translate(-50px,-120px)",
                          color: "green",
                        }}
                      >
                        {Math.abs(item.duration)}
                        <sub style={{ fontSize: "15px" }}>Minutes</sub>
                      </h1>
                    </Box>

                    <Box
                      style={{
                        width: "600px",
                        height: "50px",
                        paddingLeft: "20px",
                        border: "1px dashed",
                        borderColor: "rgb(33,150,243)",
                        display: "flex",
                      }}
                    >
                      <span
                        class="fa fa-star checked  "
                        style={{
                          color: "orange",
                          paddingTop: "20px",
                          display: "table",
                          margin: "0 ",
                          marginLeft: "20px",
                        }}
                      ></span>
                      <sub style={{ padding: "20px" }}>{item.description}</sub>
                    </Box>
                  </Box>
                </div>

                <Box sx={{ bgcolor: "info.main" }} width={250}>
                  <Box
                    sx={{ borderRadius: "50%" }}
                    bgcolor={"white"}
                    height={100}
                    width={100}
                    margin={"auto"}
                    marginTop={8}
                  >
                 
                    <Image
                      src={ item.activity === 'Swimming' ? '/swimmer.jpg' : // if 
                      item.activity === 'Running' ? '/running.jpg' : // else if 
                      item.activity === 'Bicycle' ? '/bicycle.jpg' : // else if
                      item.activity === 'Hike' ? '/hike.jpg' :
                      null  }
                      
                    
                      alt="swimmer"
                      height={100}
                      width={100}
                      style={{ objectFit: "cover", borderRadius: "50%" }}
                    />
                  </Box>
                </Box>
              </Box>

              <Button
                style={{ width: 425 }}
                variant="contained"
                onClick={() => handleOpen(item)}
              >
                Update
              </Button>
              <Button
                style={{ width: 425 }}
                variant="contained"
                color="error"
                onClick={() => deleteItem(item._id)}
              >
                Delete
              </Button>
            </Paper>
          </Grid>
        ))}
      </Container>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            variant="h3"
            padding={3}
            textAlign={"center"}
            color={"#1976d2"}
          >
            Update Form
          </Typography>
          <InputLabel>Name</InputLabel>
          <TextField
            inputRef={name}
            fullWidth
            variant="outlined"
            defaultValue={update.name}
            type={"text"}
            margin={"normal"}
            size="small"
            
            
          />
          <InputLabel>Description</InputLabel>
          <TextField
            inputRef={description}
            defaultValue={update.description}
            fullWidth
            multiline
            rows={1}
            maxRows={4}
            variant="outlined"
            type={"text"}
            margin={"normal"}
            size={"small"}
          />

          <InputLabel>Activity Type</InputLabel>

          <Select
            onChange={(r) => setSelect(r.target.value)}
            size="small"
            fullWidth
            value={update.activity}
            defaultValue={()=> setSelect(update.activity)}
            
            variant="outlined"
            margin={"normal"}
            style={{marginTop:"12px"}}
            
          >
         
            <MenuItem value="Swimming" >Swimming</MenuItem>
            <MenuItem value="Running" >Running</MenuItem>
            <MenuItem value="Bicycle" >Bicycle Ride</MenuItem>
            <MenuItem value="Hike" >Hike</MenuItem>
          </Select>

          <InputLabel  style={{marginTop:"8px"}}>Duration</InputLabel>

          <TextField
          inputRef={duration}
          defaultValue={Math.abs(update.duration).toString()}
          fullWidth
          variant="outlined"
          type={"number"}
          margin={"normal"}
          size="small"
          />
                

                
             
          <InputLabel>Date</InputLabel>
          
          <TextField
          inputRef={date}
          defaultValue={moment(new Date(update.date)).format("YYYY-MM-DD")}
            fullWidth
            variant="outlined"
            type={"date"}
            margin={"normal"}
            size="small"
          />
        
          <Box display={"flex"} justifyContent={"space-around"} marginTop={3}>
            <Button variant="contained" color="success" onClick={updateItem}>
              Update
            </Button>
            <Button variant="contained" color="error" onClick={handleClose}>
              Close
            </Button>
          </Box>
        </Box>
      </Modal>

      <Snackbar
        open={snackOpen}
        autoHideDuration={3000}
        onClose={() => setSnackOpen(false)}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Update Successful !
        </Alert>
      </Snackbar>
      <Snackbar
        open={snackDelete}
        autoHideDuration={3000}
        onClose={() => setSnackDelete(false)}
      >
        <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
          Deleted !
        </Alert>
      </Snackbar>
    </div>
  );
}
