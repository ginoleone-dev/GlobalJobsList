import "./Pages.css";
import Footer from "../components/Footer";
import { styled } from "@mui/material/styles";

import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Typography,
  Stack,
} from "@mui/material";

import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import StorageIcon from "@mui/icons-material/Storage";
import CodeIcon from "@mui/icons-material/Code";
import LayersIcon from "@mui/icons-material/Layers";
import Header from "../components/Header";
import { faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";
import JavascriptIcon from "@mui/icons-material/Javascript";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import GitHubIcon from "@mui/icons-material/GitHub";

export default function About() {
  return (
    <>
      <Header />
      <Card
        sx={{
          backgroundImage: "linear-gradient(to right, #8e9eab, #eef2f3);",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Container sx={{ display: "flex", justifyContent: "center" }}>
          <Grid
            container
            spacing={3}
            maxWidth={700}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} justifyContent="center">
              <Container sx={{ padding: "15px" }}>
                <Typography
                  sx={{
                    fontSize: { xs: "2rem", sm: "2.5rem" },
                    textAlign: "center",
                    fontFamily: "Inter",
                    mt: "15px",
                  }}
                >
                  About GlobalJobsList <RocketLaunchIcon fontSize="30px" />
                </Typography>
              </Container>
            </Grid>
            <Grid item xs={12}>
              <Container>
                <Typography
                  sx={{
                    fontSize: { xs: "1.1rem", sm: "1.4rem" },
                    textAlign: "center",
                  }}
                >
                  Here are a couple of cool things about this app! Right now the
                  main focus is moving the incoming jobs data from a JSON file
                  to Firebase Realtime Database so that CRUD operations can be
                  performed on the job listings
                </Typography>
              </Container>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
              <Container
                sx={{
                  backgroundColor: "transparent",
                  borderRadius: "15px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography
                  color={"black"}
                  fontWeight={"500"}
                  textAlign={"center"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  fontSize={"30px"}
                >
                  Technologies used to build this App
                </Typography>

                <Stack
                  direction={"column"}
                  spacing={2}
                  mt={"12px"}
                  maxHeight={"600px"}
                  alignItems="center"
                >
                  <Typography
                    bgcolor="#2C3E50"
                    color={"white"}
                    textAlign={"center"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    fontSize={{ xs: "20px", md: "28px" }}
                    p={"10px 70px"}
                    minWidth={"350px"}
                    borderRadius={"20px"}
                  >
                    <JavascriptIcon
                      sx={{ fontSize: { xs: "30px", md: "38px" } }}
                    />
                    JavaScript
                  </Typography>

                  <Typography
                    bgcolor="#2C3E50"
                    color={"white"}
                    textAlign={"center"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    fontSize={{ xs: "20px", md: "28px" }}
                    p={"10px 70px"}
                    minWidth={"350px"}
                    borderRadius={"20px"}
                  >
                    <FontAwesomeIcon
                      icon={faNodeJs}
                      style={{ marginRight: "5px" }}
                    />
                    Node JS
                  </Typography>
                  <Typography
                    bgcolor="#2C3E50"
                    color={"white"}
                    textAlign={"center"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    fontSize={{ xs: "20px", md: "28px" }}
                    p={"10px 70px"}
                    minWidth={"350px"}
                    borderRadius={"20px"}
                  >
                    <FontAwesomeIcon
                      icon={faReact}
                      style={{ marginRight: "5px" }}
                    />
                    React JS
                  </Typography>
                  <Typography
                    bgcolor="#2C3E50"
                    color={"white"}
                    textAlign={"center"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    fontSize={{ xs: "20px", md: "28px" }}
                    p={"10px 70px"}
                    minWidth={"350px"}
                    borderRadius={"20px"}
                  >
                    <GitHubIcon sx={{ marginRight: "5px" }} />
                    Github
                  </Typography>
                  <Typography
                    bgcolor="#2C3E50"
                    color={"white"}
                    textAlign={"center"}
                    display={"flex"}
                    justifyContent={"center"}
                    fontSize={{ xs: "20px", md: "28px" }}
                    p={"10px 70px"}
                    minWidth={"350px"}
                    borderRadius={"20px"}
                  >
                    Material UI
                  </Typography>
                </Stack>
              </Container>
            </Grid>
          </Grid>
        </Container>
        <Container sx={{ mt: "60px" }}>
          <Button
            href="https://leonedevelopment.io/"
            target="_blank"
            variant="primary"
            sx={{
              backgroundColor: "#1976d2",
              color: "white",
              float: "right",
              mr: "50px",
            }}
          >
            Back to portfolio
          </Button>
        </Container>
        <Footer />
      </Card>
    </>
  );
}
