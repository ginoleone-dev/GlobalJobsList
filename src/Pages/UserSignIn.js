import React, { useContext, useState } from "react";
import { Typography, Container, Button, TextField, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";

export default function UserSignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { createUser } = UserAuth();

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      await createUser(email, password);
      navigate("/");
    } catch (e) {
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
            You are creating an account, please type your username and password
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
          <Typography
            sx={{ fontSize: { xs: "0.8rem", sm: "1rem" }, ml: "8px" }}
          >
            Password must be 6 characters or longer
          </Typography>
          <Button
            variant={"contained"}
            sx={{ marginTop: "10px" }}
            onClick={handleSignIn}
          >
            Sign In
          </Button>
          <Container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 3,
            }}
          >
            <Button onClick={() => navigate("/login")}>Back to Login</Button>
          </Container>
        </Container>
      </Box>
    </>
  );
}
