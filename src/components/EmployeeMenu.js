import React, { useState } from "react";
import "../index.css";
import "../components/modals.css";
import {
  Avatar,
  Box,
  Container,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

export default function EmployeeMenu({ menuItem }) {
  const [modalContent, setModalContent] = useState([]);

  const [modalToggle, setModalToggle] = useState(false);
  const handleClose = () => setModalToggle(false);

  const changeContent = (item) => {
    setModalContent([item]);
    setModalToggle(!modalToggle);
  };

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 450,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    borderRadius: 3,
    p: 4,
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
                  <h4 className="employeeLabels  fieldAtOrg ">{item.field}</h4>
                  <h3 className="employeeLabels">
                    {item.title} in {item.location}
                  </h3>
                  <h2 className="employeeLabels">
                    {item.firstName} {item.lastName}
                  </h2>
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
        <Container>
          {modalContent.map((modal) => {
            return (
              <Modal key={modal.id} open={modalToggle} onClose={handleClose}>
                <Box sx={style}>
                  <Container
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Avatar alt="Remy Sharp" src={modal.imageUrl} />
                    <Container>
                      <Typography
                        fontSize={"20px"}
                      >{`${modal.firstName} ${modal.lastName}`}</Typography>
                      <Typography>{`${modal.title} at ${modal.location}`}</Typography>
                    </Container>
                  </Container>
                  <Container sx={{ mt: "24px" }}>
                    <Typography paragraph>{modal.description}</Typography>
                  </Container>
                  <Container sx={{ mt: "24px" }}>
                    <Typography>Contact {modal.firstName} at:</Typography>
                    <IconButton aria-label="share">
                      <EmailIcon />
                      <Typography variant="body2">Email</Typography>
                    </IconButton>
                  </Container>
                </Box>
              </Modal>
            );
          })}
        </Container>
      )}
    </div>
  );
}

// <div key={modal.id} className="modalCard">
//   <div className="modalHead">
//     <img className="modalImg" src={modal.imageUrl}></img>
//     <h2 className="modalTitle">{modal.title} from {modal.location}</h2>
//     <h3 className="modalPay">{modal.payRate}</h3>
//   </div>
//   <div className="modalInfo">
//     <h4 className="modalShort">If you are an experienced {modal.title} who wants to grow in a high performing business in {modal.field}, we are perfect for you. </h4>
//     <p className="modalDescription">{modal.description}</p>
//   </div>
//   <div className="messageBtnDiv">
//    <button className="messageBtn">Message {modal.firstName}</button>
// </div>
// </div>
