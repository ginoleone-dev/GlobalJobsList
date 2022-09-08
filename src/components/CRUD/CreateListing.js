import {
  Container,
  FormControl,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Button,
  Card,
  Grid,
  CardContent,
  Typography,
  MenuItem,
  InputLabel,
  Box,
  Select,
  Modal,
} from "@mui/material";
import { rdb } from "../../firebase-config";
import { ref, set } from "firebase/database";
import { uid } from "uid";
import React, { useState, useEffect, useContext } from "react";
import { storage } from "../../firebase-config";
import { ref as storageRef } from "firebase/storage";
import {
  getStorage,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import Header from "../Header";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../Context/AuthContext";
// import { AuthContext } from "../../Context/AuthContext";

export default function CreateListing() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "400px", md: "500px" },
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 2,
  };

  const navigate = useNavigate();
  // Radio buttons state and logic
  const [roleValue, setRoleValue] = useState("employee");

  const handleRoleChange = (event) => {
    setRoleValue(event.target.value);
  };
  // // //  //  //  //  //  //  //  //  // // // //  //  //

  // Input state and logic

  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    field: "",
    jobTitle: "",
    location: "",
    payRate: "",
    description: "",
  });

  const handleInputChange = (e) => {
    setUserInfo((values) => {
      return { ...values, [e.target.name]: e.target.value };
    });
  };

  // Image
  const [userImage, setUserImage] = useState("");
  const [percentage, setPercentage] = useState(null);

  const pushImage = (e) => {
    if (e?.target.files.length > 0)
      setUserImage((values) => {
        return { ...values, [e.target.name]: e.target.files[0] };
      });
  };

  // Uploading File

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + userImage.file.name;

      const refStorage = storageRef(storage, userImage.file.name);
      const uploadTask = uploadBytesResumable(refStorage, userImage.file);
      const fileType = userImage.file.type.includes("image");
      if (fileType === true) {
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            // console.log("Upload is " + progress + "% done");
            setPercentage(progress);
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                // console.log("Upload is running");
                break;
              default:
                break;
            }
          },
          (error) => {
            console.log(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setUserInfo((values) => {
                return { ...values, fileURL: downloadURL };
              });
            });
          }
        );
      } else {
        setUserImage("");
        alert("The file must be jpg, jpeg or png type");
      }
    };

    userImage && uploadFile();
  }, [userImage]);

  // User context

  const { user } = UserAuth();

  // Deploy to database function
  const deployUserInput = () => {
    const postId = uid();
    const userId = user.uid;

    if (roleValue === "employee") {
      set(ref(rdb, `/0/employee/${postId}`), {
        ...userInfo,
        postId,
        userId,
      });
    } else {
      set(ref(rdb, `/1/employers/${postId}`), {
        ...userInfo,
        postId,
        userId,
      });
    }

    setUserInfo({
      firstName: "",
      lastName: "",
      email: "",
      field: "",
      jobTitle: "",
      location: "",
      payRate: "",
      description: "",
      files: "",
      fileURL: "",
    });
    setUserImage("");
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    navigate("/");
  };

  // // //  //  //  //  //  //  //  //  // // // //  //  //

  return (
    <>
      <Header />
      <Container
        sx={{
          mt: "30px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: { xs: "380px", sm: "500px", md: "800px" },
          gap: "12px",
        }}
      >
        <Typography textAlign={"center"} sx={{ fontSize: "30px" }}>
          Post a Job
        </Typography>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">Role</FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={roleValue}
              onChange={handleRoleChange}
            >
              <FormControlLabel
                value="employee"
                control={<Radio />}
                label="Talent"
              />
              <FormControlLabel
                value="employers"
                control={<Radio />}
                label="Recruiter"
              />
            </RadioGroup>
          </FormControl>
        </Container>
        <Container sx={{}}>
          <Card
            style={{
              backgroundColor: "transparent",
              boxShadow: "none",
            }}
          >
            <CardContent>
              {/* Outer Grid */}
              <Grid container spacing={2}>
                <Grid xs={12} sm={6} item>
                  <TextField
                    label="First Name"
                    placeholder="Enter first name"
                    variant="outlined"
                    name="firstName"
                    value={userInfo.firstName}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    label="Last Name"
                    placeholder="Enter last name"
                    variant="outlined"
                    name="lastName"
                    value={userInfo.lastName}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} sm={12} item>
                  <TextField
                    type="email"
                    label="Email"
                    variant="outlined"
                    name="email"
                    value={userInfo.email}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>

                {/* WORKING HERE */}
                <Grid xs={12} sm={12} item>
                  <Typography mb={0.5}>Upload your profile picture</Typography>
                  <input
                    type="file"
                    accept="image/jpeg, image/png"
                    onChange={pushImage}
                    name="file"
                    style={{
                      fontSize: "15x",
                      textAlign: "center",
                      color: "#050505",
                    }}
                    required
                  ></input>
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    label="Job Title"
                    variant="outlined"
                    name="jobTitle"
                    value={userInfo.jobTitle}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  {/* <TextField
                  label="Field"
                  variant="outlined"
                  name="field"
                  value={userInfo.field}
                  onChange={handleInputChange}
                  fullWidth
                  required
                /> */}

                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Field
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Field"
                        value={userInfo.field}
                        name="field"
                        onChange={handleInputChange}
                      >
                        <MenuItem value={"Accounting"}>Accounting</MenuItem>
                        <MenuItem value={"Architecture"}>Architecture</MenuItem>
                        <MenuItem value={"Design"}>Design</MenuItem>
                        <MenuItem value={"Business"}>Business</MenuItem>
                        <MenuItem value={"Finance"}>Finance</MenuItem>
                        <MenuItem value={"Marketing"}>Marketing</MenuItem>
                        <MenuItem value={"Technology"}>Technology</MenuItem>
                        <MenuItem value={"Sales"}>Sales</MenuItem>
                        <MenuItem value={"Health"}>Health</MenuItem>
                        <MenuItem value={"Law"}>Law</MenuItem>
                        <MenuItem value={"Other"}>Other</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>
                <Grid xs={6} sm={6} item>
                  <TextField
                    label="Country"
                    variant="outlined"
                    name="location"
                    value={userInfo.location}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={6} sm={6} item>
                  <TextField
                    label="Pay Rate ($/h)"
                    variant="outlined"
                    name="payRate"
                    value={userInfo.payRate}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    multiline
                    rows={4}
                    label="Description"
                    name="description"
                    variant="outlined"
                    value={userInfo.description}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} item>
                  <Button
                    disabled={percentage == null && percentage < 100}
                    variant="contained"
                    sx={{ maxWidth: "100px" }}
                    fullWidth
                    onClick={() => {
                      deployUserInput();
                      handleOpen();
                    }}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Container>
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
                Thank you for being part of GlobalJobsList, your listing is now
                on display!
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
      </Container>
    </>
  );
}
