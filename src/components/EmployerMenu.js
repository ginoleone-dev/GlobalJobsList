import React, { useState } from "react";
import {
  Container,
  Modal,
  Box,
  Avatar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

export default function EmployerMenu({ menuItem }) {
  const [modalContent, setModalContent] = useState([]);

  const [modalToggle, setModalToggle] = useState(false);
  const handleClose = () => setModalToggle(false);

  const changeContent = (item) => {
    setModalContent([item]);
    setModalToggle(!modalToggle);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "290px", md: "500px" },
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    borderRadius: 3,
    p: 4,
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {menuItem.map((item) => {
        return (
          <Box
            key={item.postId}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
              mt: "12px",
              minWidth: { xs: "350px", lg: "700px" },
              minHeight: { xs: "150px" },
              borderRadius: "12px",
            }}
            onClick={() => changeContent(item)}
          >
            <Container
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img className="profilePhoto" src={item.fileURL}></img>
              <Container
                sx={{
                  minWidth: { xs: "140px", lg: "450px" },
                  minHeight: "120px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: { xs: "1rem", md: "1.2rem" },
                  }}
                >
                  {item.field}
                </Typography>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: { xs: "0.8rem", md: "1rem" },
                  }}
                >
                  Looking for {item.jobTitle} in {item.location}
                </Typography>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: { xs: "0.8rem", md: "1rem" },
                    mt: "2px",
                  }}
                >
                  {item.firstName} {item.lastName}
                </Typography>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: { xs: "0.9rem", md: "1rem" },
                    mt: "2px",
                  }}
                >
                  Pay rate: ${item.payRate}/h
                </Typography>
              </Container>

              <Button
                sx={{
                  minWidth: { xs: "60px", md: "150px" },
                  backgroundColor: "#1976d2",
                  color: "white",
                  mb: "8px",
                  fontSize: {
                    xs: "0.5rem",
                    sm: "0.8rem",
                    md: "0.8rem",
                  },
                }}
                onClick={() => changeContent(item)}
              >
                See More
              </Button>
            </Container>
          </Box>
        );
      })}

      {modalToggle && (
        <Container>
          {modalContent.map((modal) => {
            return (
              <Modal
                key={modal.postId}
                open={modalToggle}
                onClose={handleClose}
              >
                <Box sx={style}>
                  <Container
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Avatar alt="Remy Sharp" src={modal.fileURL} />
                    <Container>
                      <Typography
                        fontSize={"20px"}
                      >{`${modal.firstName} ${modal.lastName}`}</Typography>
                      <Typography>{`${modal.jobTitle} at ${modal.location}`}</Typography>
                    </Container>
                  </Container>
                  <Container sx={{ mt: "24px" }}>
                    <Typography paragraph>{modal.description}</Typography>
                  </Container>
                  <Container sx={{ mt: "24px" }}>
                    <Typography>Contact {modal.firstName} at:</Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        margin: "0px",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <EmailIcon /> {modal.email}
                    </Typography>
                  </Container>
                </Box>
              </Modal>
            );
          })}
        </Container>
      )}
    </Container>
  );
}

{
  /* {modalToggle && (
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
} */
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
