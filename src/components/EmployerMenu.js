import React, { useState } from 'react';

export default function EmployerMenu({ menuItem }) {
  const [modalContent, setModalContent] = useState([]);

  const [modalToggle, setModalToggle] = useState(false);

  const changeContent = (item) => {
    setModalContent([item]);
    setModalToggle(!modalToggle);
  };

  return (
    <div className="content-container">
      {menuItem.map((item) => {
        return (
          <div className="item-con" key={item.id}>
            <div className="listing">
              <div className="listing-container">
                <img className="profilePhoto" src={item.imageUrl}></img>
                <div className="listing-mainbox">
                  <h4 className="employeeLabels fieldText">
                    <span className="fieldAtOrg">{item.organization}</span>
                  </h4>
                  <h3 className="employeeLabels">
                    {item.title} in {item.location}
                  </h3>
                  <h4 className="employeeLabels">Pay rate: {item.payRate}</h4>
                </div>
                <div>
                  <button
                    className="openModalBtn"
                    onClick={() => changeContent(item)}
                  >
                    See More
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {modalToggle && (
        <div className="modalContainer" onClick={changeContent}>
          <div
            className="modalBody"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="modalExit">
              <button className="exitModal" onClick={changeContent}>
                x
              </button>
            </div>
            {modalContent.map((modal) => {
              return (
                <div key={modal.id} className="modalCard">
                  <div className="modalHead">
                    <img className="modalImg" src={modal.imageUrl}></img>
                    <h2 className="modalTitle">
                      {modal.title} at {modal.organization}
                    </h2>
                    <h3 className="modalPay">{modal.payRate}</h3>
                  </div>
                  <div className="modalInfo">
                    <h4 className="modalShort">
                      If you are an experienced {modal.title} who wants to grow
                      in a high performing business in {modal.field}, we are
                      perfect for you.{' '}
                    </h4>
                    <p className="modalDescription">{modal.description}</p>
                  </div>
                  <div className="messageBtnDiv">
                    <button className="messageBtn">
                      Message {modal.organization}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

// <div key={modal.id} className="modalCard">
//   <div className="modal">
//     <h1>Hello</h1>
//     <div className="modalInfo">
//       <img className="modalImg" src={modal.imageUrl}></img>
//       <h2 className="modalTitle">{modal.title} - {modal.payRate}</h2>
//     </div>
//       <h3 className="modalOrg">{modal.organization}</h3>
//      <h4 className="modalShort">If you are an experienced {modal.title} who wants to grow in a high performing business in {modal.field}, we are perfect for you. </h4>
//      <p className="modalDescription">{modal.description}</p>
//      <div className="messageBtnDiv">
//       <button className="messageBtn">Message {modal.organization}</button>
//     </div>
//  </div>

// </div>
