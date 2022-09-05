import React, { useContext, useState } from "react";
import { Typography, Container, Button, TextField, Box } from "@mui/material";
import { auth } from "../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import Header from "../components/Header";
export default function UserLogin() {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        dispatch({ type: "LOGIN", payload: user });

        navigate("/");
      })
      .catch((error) => {
        setError(true);
      });
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
