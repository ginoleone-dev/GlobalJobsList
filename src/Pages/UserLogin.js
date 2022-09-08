import React, { useContext, useState } from "react";
import { Typography, Container, Button, TextField, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";

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
      console.log(e.message);
    }
  };

  return (
    <>
      <Box sx={{ height: "100vh", display: "flex", alignItems: "center" }}>
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
            Welcome to GlobalJobsList, to log in, please input your account
            credentials
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
            sx={{ marginTop: "10px" }}
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
              sx={{ marginTop: "6px" }}
              onClick={() => navigate("/signin")}
            >
              Sign In
            </Button>
          </Container>
        </Container>
      </Box>
    </>
  );
}
