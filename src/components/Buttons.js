import React from "react";

export default function Buttons({button, filter}){
  return(
  <div className="buttons">
    {
      button.map((field, index)=>{
          return <button key={index} className="newButt" type="button" onClick={()=> filter(field)}>{field}</button>
      })
    }
  </div>
  )
}