import React, { useState } from "react";
import "../index.css";
import "../components/modals.css";
import {
  Avatar,
  Box,
  Button,
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
    width: { xs: "290px", sm: "550px", md: "600px" },
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
              minWidth: { xs: "340px", sm: "500px", md: "600px", lg: "700px" },
              maxWidth: { xs: "340px", sm: "500px", md: "600px", lg: "750px" },
              minHeight: { xs: "150px" },
              borderRadius: "12px",
              cursor: "pointer",
              transition: "all .2s ease-in-out",
              "&:hover": {
                backgroundColor: "white",
                transform: "scale(1.02)",
              },
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
                  minWidth: { xs: "140px", lg: "500px" },
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
                    fontSize: { xs: "1.2rem", md: "1.2rem" },
                  }}
                >
                  {item.field}
                </Typography>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: { xs: "0.8rem", sm: "1rem" },
                  }}
                >
                  {item.jobTitle} in {item.location}
                </Typography>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: { xs: "0.8rem", sm: "1rem" },
                    mt: "2px",
                  }}
                >
                  {item.firstName} {item.lastName}
                </Typography>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: { xs: "0.9rem", sm: "1rem" },
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
                  display: { xs: "none", sm: "none", md: "block" },
                }}
                onClick={() => changeContent(item)}
              >
                See More
              </Button>
            </Container>
          </Box>
          // </Container>
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
                    <Container sx={{ minWidth: "250px" }}>
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
