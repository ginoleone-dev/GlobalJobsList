import React, { useState } from "react";
import Footer from "../components/Footer";

export default function Contact() {

  const [formData, setFormData] = useState({
    firstname:"",
    lastName: "", 
    email:"", 
    comments:"",
    isFriendly: true,
  })

console.log(formData)

  function handleChange(event){
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name] : type === "checkbox" ? checked : value
      }
    })
  }



  return (
      <>
      <div className="completeContact">
      <div className="contactContent">
        <h1 className='insideContactContent contactTitle'>GlobalJobsList</h1>
        <h4 className='insideContactContent contactTitle2'>We believe in connecting you with your goals</h4>
        <h5 className='insideContactContent contactTitle3'>If you think we can improve something, please let us know!</h5>
        <form className="aboutInputDiv">
          <input 
            className="insideContent contactInputField" 
            placeholder="First Name"
            type="text"     
            onChange={handleChange}  
            name="firstname" 
            value={formData.firstname}
          />
          <input 
            className="insideContent contactInputField" 
            placeholder="Last Name"
            type="text"     
            onChange={handleChange}
            name="lastName"   
            value={formData.lastName}
          />
          <input 
            // className="insideContent contactInputField" 
            placeholder="email"
            type="text"     
            onChange={handleChange}
            name="email"  
            value={formData.email}
          />
          <textarea 
            placeholder="Your comments here"
            onChange={handleChange}
            name="comments"
            value={formData.comments}
          />
          <input 
            type="checkbox" 
            id="isFriendly"
            checked={formData.isFriendly}
          />
          <label htmlFor="isFriendly">Would you like to join our email list?</label>
        </form>
        <div className='btnContactDiv'>
          <button className='insideContent contactButton'>Send Feedback</button>
        </div>
      </div>
      </div>
      <div>
        <Footer/>
      </div>
      </>
  )
}