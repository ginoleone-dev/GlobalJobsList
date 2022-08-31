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
    width: { xs: "400px", md: "500px" },
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    borderRadius: 3,
    p: 4,
  };

  return (
    <Container sx={{maxWidth: { xs: "350px",sm:'550px', md: "650px", lg: "800px" }, display:'flex', flexDirection:'column', justifyContent:'center'}}>
      {menuItem.map((item) => {
        return (
          // <Container
          //   key={item.uuid}
          //   sx={{
          //     backgroundColor: "white",
          //     mt: "12px",
          //     maxWidth: { xs: "450px", sm:'620px',md: "700px", lg: "800px" },
          //     borderRadius:'12px'

          //   }}
          // >
            <Container key={item.uuid}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent:'center',
                backgroundColor:'white',
                mt:'12px',
                borderRadius:'12px'
                
              }}
            >
              <img className="profilePhoto" src={item.fileURL}></img>
              <Container sx={{minWidth:{xs:'140px'}, minHeight:'120px', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
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
                  {item.jobTitle} in {item.location}
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
                  Pay rate: {item.payRate}
                </Typography>
              </Container>

                <Button sx={{minWidth:{xs:'60px', md:'150px'}, backgroundColor: "#1976d2",
                color: "white",
                mb: "8px",
                fontSize: {
                  xs: "0.5rem",
                  sm: "0.8rem",
                  md: "0.8rem",
                }}}  onClick={() => changeContent(item)}>See More</Button>

            </Container>
          // </Container>
        );
      })}

      {modalToggle && (
        <Container>
          {modalContent.map((modal) => {
            return (
              <Modal key={modal.uuid} open={modalToggle} onClose={handleClose}>
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
