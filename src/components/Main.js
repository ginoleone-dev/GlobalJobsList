import React, {useState} from "react";
import data from "../data"
import Buttons from "./Buttons";
import EmployeeMenu from "./EmployeeMenu";
import EmployerMenu from "./EmployerMenu";
import Footer from "./Footer";

export default function Main(){
const employeeData = data.employee;
const employerData = data.employers;

  // List of Categories for
  const allEmployeeCategories = ['All', ...new Set(employeeData.map(item => item.field))];
  const allEmployerCategories = ['All', ...new Set(employerData.map(item => item.field))]

  const [menuItemEmployee, setMenuItemEmployee] = useState(employeeData);
  const [buttonsEmployee, setButtonsEmployee] = useState(allEmployeeCategories);

  const [menuItemEmployer, setMenuItemEmployer] = useState(employerData);
  const [buttonsEmployer, setButtonsEmployer] = useState(allEmployerCategories);  

// Filter employee list according to the button clicked
  const filterEmployee = (inputtedField) =>{
    // Checking first if 'All' button was clicked
    if(inputtedField === 'All'){
      setMenuItemEmployee(employeeData);
      console.log(inputtedField);
      return;
    }
    const filteredData = employeeData.filter(dat => dat.field == inputtedField );
    setMenuItemEmployee(filteredData)
    console.log(inputtedField);
  }

  const filterEmployer = (inputtedField) =>{
    // Checking first if 'All' button was clicked
    if(inputtedField === 'All'){
      setMenuItemEmployer(employerData);
      console.log(inputtedField);
      return;
    }
    const filteredData = employerData.filter(dat => dat.field == inputtedField );
    setMenuItemEmployer(filteredData)
    console.log(inputtedField);
  }
  return(
  <>
      <div className="mainContainer">
        <div className="textEmployee">
          <h1 className="titleHire">Looking to hire someone?</h1>
          <p className="parrHire">The best thing money can buy is time. </p>
        </div>
        <div className="textEmployer">
          <h1 className="titleHire">Looking for a job?</h1>
          <p className="parrHire"><span className="discover">Discover</span> your next big opportunity. </p>
        </div> 
        <div className="employee">
          <div className="filterBtnEmployee">
             <Buttons button={buttonsEmployee} filter={filterEmployee}/>
          </div>
          <div className="listingEmployee">
             <EmployeeMenu menuItem={menuItemEmployee}/>
          </div>
        </div>
       <div className="employer">
      <div className="filterBtnEmployer">
        <Buttons button={buttonsEmployer} filter={filterEmployer}/>
      </div>
      <div className="listingEmployer">
          <EmployerMenu menuItem={menuItemEmployer}/>
      </div>
    </div>
      </div>
      <Footer/>
      </>
  )
}