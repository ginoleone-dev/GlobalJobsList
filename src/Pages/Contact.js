import React from "react";
import Footer from "../components/Footer";

export default function Contact() {
  return (
      <>
      <div className="completeContact">
      <div className="contactContent">
        <h1 className='insideContactContent contactTitle'>GlobalJobsList</h1>
        <h4 className='insideContactContent contactTitle2'>We believe in connecting you with your goals</h4>
        <h5 className='insideContactContent contactTitle3'>If you think we can improve something, please let us know!</h5>
        <div className="aboutInputDiv">
          <input className="insideContent contactInputField" placeholder="We want to know what you think!">
          </input>
        </div>
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