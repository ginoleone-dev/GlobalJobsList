import * as React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Footer from "../components/Footer";
import { Button, Card, CardContent, Grid, TextField } from '@mui/material';
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


  return (
      <>

      <Card className='card'>
        <CardContent className='card' >
          <Grid container spacing={1}>

      <Grid className='input' xs={12} sm={6} item>
        <TextField className='input' label="First Name" placeholder='Enter first name' variant='outlined' fullWidth required/>
      </Grid>
      <Grid xs={12} sm={6} item>
        <TextField label="Last Name" placeholder='Enter last name' variant='outlined' fullWidth required/>
      </Grid>
      <Grid xs={12} item>
        <TextField type='email' label="Email" placeholder='Enter email name' variant='outlined' fullWidth required/>        
      </Grid>
      <Grid xs={12} item>
        <TextField type='number' label="Phone" placeholder='Enter phone number' variant='outlined' fullWidth required/>        
      </Grid>
      <Grid xs={12} item>
        <TextField type='message' multiline rows={4} label="Message" placeholder='Type your message' variant='outlined' fullWidth required/>        
      </Grid>
      <Grid xs={12} item>
        <Button variant='contained' color='primary' fullWidth>Submit</Button>
      </Grid>

          </Grid>
        </CardContent>
      </Card>
  
        <Footer/>
      </>
  )
}