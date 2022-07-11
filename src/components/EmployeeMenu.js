import React, {useState}from "react";

export default function EmployeeMenu({menuItem}){

const [modalContent, setModalContent] = useState([])

const [modalToggle, setModalToggle] = useState(false)

   const changeContent = (item) => {
    setModalContent([item]);
    setModalToggle(!modalToggle);
}

const openInNewTab = url => {
  window.open(url, '_blank', 'noopener,noreferrer');
};






  return(
    <div className="content-container" >

      {
        menuItem.map((item) =>{
          return <div className="item-con" key={item.id}>
                    <div className="listing">
                     <div className="listing-container">
                      <img className="profilePhoto" src={item.imageUrl}></img>
                         <div className="listing-mainbox">
                            <h4 className="employeeLabels  fieldAtOrg ">{item.field}</h4>
                            <h3 className="employeeLabels">{item.title} in {item.location}</h3>
                            <h2 className="employeeLabels">{item.firstName} {item.lastName}</h2>
                            <h4 className="employeeLabels">Pay rate: {item.payRate}</h4>
                         </div>
                      <div>
                       <button className="openModalBtn" onClick={()=>changeContent(item)} >See More</button>
                      </div>
                     </div>
                     </div>
                  </div>  
        })
      }

        {modalToggle&& <div className="modalContainer" onClick={changeContent}>
        <div className="modalBody" onClick={(event)=>event.stopPropagation()}>
            <div className="modalHeader">
              <button className="exitModal" onClick={changeContent}>x</button>
            </div>
              {modalContent.map((modal)=>{
                return(
                  <div key={modal.id} className="modalCard">
                    <div className="modal">
                        <div className="modalInfo">
                          <img className="modalImg" src={modal.imageUrl}></img>
                          <h2 className="modalTitle">{modal.firstName}, {modal.title} - {modal.payRate}</h2>
                        </div>
                      <h3 className="modalOrg">{modal.field}</h3>
                      <h4 className="modalShort">If you need an experienced {modal.title} to boost your business in {modal.location}, {modal.firstName} might be the right person for you!</h4>
                       <p className="modalDescription">{modal.description}</p>
                       <div className="messageBtnDiv">
                      <button className="messageBtn" onClick={()=>openInNewTab('https://google.com')}>Message {modal.firstName}</button>
                      </div>
                   </div>
                   

                  </div>
                )
                
                
              })}

          </div>
        
      </div>}
      </div>
  )
}



