import * as React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Footer from "../components/Footer";
import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material';
import './Pages.css'

const textAreaStyle = {
    position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  marginTop: -50 ,
  boxShadow: 24,
  p: 4,
}



export default function Contact() {

  // const [formData, setFormData] = useState({
  //   firstname:"",
  //   lastName: "", 
  //   email:"", 
  //   comments:"",
  //   isFriendly: true,
  // })


  // function handleChange(event){
  //   const {name, value, type, checked} = event.target
  //   setFormData(prevFormData => {
  //     return {
  //       ...prevFormData,
  //       [name] : type === "checkbox" ? checked : value
  //     }
  //   })
  // }
const fieldStyles = {}

  return (
      <>
      {/* Outer Card */}
<Card style={{maxWidth:550, margin:"0 auto", padding:"5rem 0px", backgroundColor: "transparent", boxShadow:"none"}}>
  <CardContent style={{ maxWidth:550 ,backgroundColor:"#0d6efd", borderRadius:"20px"}} >

    <Typography gutterBottom variant='h5' style={{fontFamily: "inter", color:"#ffffff", margin:"10px 5px", fontSize:"2rem", textAlign:"center", height:"50px"}}>Contact Us</Typography>
    <Typography variant="body2" component="p" style={{fontFamily: "inter", color:"#ffffff", margin:"10px 5px"}}>I would like to know any possible improvement that you can think of!</Typography>

      {/* Outer Grid */}
  <Grid container spacing={1}>

      <Grid xs={12} sm={6} item>
        <TextField 
         label="First Name" 
         placeholder='Enter first name' 
         variant='filled' 
         style={{ backgroundColor:"#edede9", borderRadius:12, marginBottom:15}} 
         fullWidth required
         />
      </Grid>
       <Grid xs={12} sm={6} item>
        <TextField 
        label="Last Name" 
        placeholder='Enter last name' 
         variant='filled'
        style={{ backgroundColor:"#edede9", borderRadius:12, marginBottom:15}} 
        fullWidth required
        />
       </Grid>
       <Grid xs={12} item>
        <TextField 
        type='email' 
        label="Email" 
        placeholder='Enter email name' 
         variant='filled'
        style={{ backgroundColor:"#edede9", borderRadius:12, marginBottom:15}} 
        fullWidth required
        />        
       </Grid>
      <Grid xs={12} item>
        <TextField 
        type='message' 
        multiline rows={4} 
        label="Message" 
        placeholder='Type your message' 
        style={{ backgroundColor:"#edede9", borderRadius:12, marginBottom:15}} 
         variant='filled'
        fullWidth required/>        
      </Grid>
      <Grid xs={12} item>
        <Button
         variant='contained' 
         align='center'
         style={{backgroundColor:"#4c5c68", borderRadius: "5px", margin: '0 auto', display:"flex",height: 50, width:200, }} 
         fullWidth
         >
          Submit
         </Button>
      </Grid>
    </Grid>
  </CardContent>
</Card>

<Footer/>
      </>
  )
}