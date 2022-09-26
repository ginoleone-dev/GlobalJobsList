import React, { useState } from "react";
import { Typography, Container, Button, TextField, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";
import photo from "../images/best-remote-jobs-hero.jpg";

import Header from "../components/Header";
export default function UserLogin() {
  const { logIn } = UserAuth();

  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (e) {
      setError.apply(e.message);
    }
  };

  return (
    <>
      <Container
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "end",
            width: "500px",
            height: "380px",
            backgroundImage: `url(${photo})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            mb: "24px",
          }}
        >
          <Typography
            color={"black"}
            fontSize={"30px"}
            backgroundColor={"rgba(255, 255, 255, 0.8);"}
            width={"100%"}
            textAlign={"center"}
          >
            Connect, Discover, Grow.
          </Typography>
        </Box>
        <Container
          sx={{
            display: "flex",

            flexDirection: "column",
            maxWidth: {
              xs: "400px",
              md: "500px",

              gap: "10px",
            },
          }}
        >
          <Typography
            variant={"h5"}
            sx={{ padding: "10px 20px", textAlign: "center" }}
          >
            Welcome to GlobalJobsList, you can continue as a guest, if you want
            to create a job post, please log in or register your new account.
          </Typography>
          <TextField
            type="email"
            placeholder="Email"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
          ></TextField>
          <TextField
            type="password"
            placeholder="Password"
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
          ></TextField>
          <Button
            variant={"contained"}
            sx={{ marginTop: "10px", backgroundColor: "#1976d2" }}
            onClick={handleLogin}
          >
            Login
          </Button>
          {error && (
            <Typography textAlign={"center"} color={"red"}>
              Wrong email or password
            </Typography>
          )}
          <Container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 3,
            }}
          >
            <Typography>Don't have an account?</Typography>
            <Button
              sx={{
                marginTop: "6px",
                color: "#2c3e50",
                "&:hover": {
                  backgroundColor: "white",
                },
              }}
              onClick={() => navigate("/signin")}
            >
              Register
            </Button>
          </Container>
          <Container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 3,
            }}
          >
            <Typography>Continue as a guest</Typography>
            <Button
              sx={{
                marginTop: "6px",
                color: "#2c3e50",
                "&:hover": {
                  backgroundColor: "white",
                },
              }}
              onClick={() => navigate("/")}
            >
              Continue
            </Button>
          </Container>
        </Container>
      </Container>
    </>
  );
}
