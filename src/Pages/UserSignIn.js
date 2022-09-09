import React, { useContext, useState } from "react";
import { Typography, Container, Button, TextField, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";
import photo from "../images/best-remote-jobs-hero.jpg";

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
            sx={{ marginTop: "10px", backgroundColor: "#2c3e50" }}
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
      </Container>
    </>
  );
}
