import * as React from "react";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  Modal,
  Box,
  Container,
} from "@mui/material";
import "./Pages.css";
import { db } from "../firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";
import Header from "../components/Header";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "400", sm: "500" },
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
};

const textAreaStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  // marginTop: -50,
  boxShadow: 24,
  p: 4,
};

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const contactsCollectionRef = collection(db, "contacts");

  // Connecting to the db on page load
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(contactsCollectionRef);
    };
    getUsers();
  }, []);

  // Set fields blank
  const blankFields = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
  };

  // Modal

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  // Create a contact and clear the fields after (maybe should be separate)
  const createContact = async () => {
    blankFields();
    await addDoc(contactsCollectionRef, {
      firstName: firstName,
      lastName: lastName,
      email: email,
      message: message,
    });
  };

  return (
    <>
      <Header />
      {open && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Success!
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2, mb: 3 }}>
              Thank you for contacting us, we appreciate your feedback. This
              information will arrive at our Firebase Database
            </Typography>
            <Button
              variant="contained"
              align="center"
              color="primary"
              style={{
                color: "#ffffff",
                borderRadius: "5px",
                margin: "10px auto",
                display: "flex",
                height: 50,
                width: 160,
              }}
              onClick={() => {
                handleClose();
              }}
              fullWidth
            >
              Close
            </Button>
          </Box>
        </Modal>
      )}
      {/* Outer Card */}
      <Container
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Card
          style={{
            maxWidth: { xs: "350px", sm: "600px" },
            margin: "0 auto",
            padding: "5rem 0px",
            backgroundColor: "transparent",
            boxShadow: "none",
            height: "100vh",
          }}
        >
          <CardContent
            style={{
              maxWidth: 600,
              backgroundColor: "#2C3E50",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              gutterBottom
              variant="h5"
              style={{
                fontFamily: "inter",
                color: "#ffffff",
                margin: "10px 5px",
                fontSize: "2rem",
                textAlign: "center",
                height: "50px",
              }}
            >
              Contact Us
            </Typography>
            <Typography
              variant="body2"
              component="p"
              style={{
                fontFamily: "inter",
                color: "#ffffff",
                margin: "10px 5px",
              }}
            >
              I would like to know any possible improvement that you can think
              of! - Made with MaterialUI
            </Typography>

            {/* Outer Grid */}
            <Grid container spacing={2}>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="First Name"
                  placeholder="Enter first name"
                  variant="filled"
                  value={firstName}
                  onChange={(event) => {
                    setFirstName(event.target.value);
                  }}
                  style={{
                    backgroundColor: "#edede9",
                    borderRadius: 12,
                  }}
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Last Name"
                  placeholder="Enter last name"
                  variant="filled"
                  name="lastName"
                  value={lastName}
                  onChange={(event) => {
                    setLastName(event.target.value);
                  }}
                  style={{
                    backgroundColor: "#edede9",
                    borderRadius: 12,
                  }}
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  type="email"
                  label="Email"
                  placeholder="Enter email name"
                  variant="filled"
                  name="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  style={{
                    backgroundColor: "#edede9",
                    borderRadius: 12,
                  }}
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  type="message"
                  multiline
                  rows={4}
                  label="Message"
                  placeholder="Type your message"
                  name="message"
                  value={message}
                  onChange={(event) => {
                    setMessage(event.target.value);
                  }}
                  style={{
                    backgroundColor: "#edede9",
                    borderRadius: 12,
                  }}
                  variant="filled"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <Button
                  variant="contained"
                  align="center"
                  style={{
                    backgroundColor: "#edede9",
                    color: "#000000",
                    borderRadius: "5px",
                    margin: "0 auto",
                    display: "flex",
                    height: 50,
                    width: 200,
                  }}
                  onClick={() => {
                    createContact();
                    handleOpen();
                  }}
                  fullWidth
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>

      <Footer />
    </>
  );
}
