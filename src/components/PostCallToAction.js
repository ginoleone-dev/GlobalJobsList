import { Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function PostCallToAction() {
  const navigatePost = useNavigate();

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2c3e50",
        mt: "20px",
        height: "180px",
        gap: "15px",
      }}
    >
      <Typography
        textAlign={"center"}
        color={"white"}
        maxWidth={{ xs: "500px", md: "800px" }}
        fontSize={{ xs: "1.2rem", md: "1.5rem" }}
      >
        Welcome to GlobalJobsList, discover new opportunities by posting your
        job!
      </Typography>
      <Button
        variant="contained"
        sx={{ backgroundColor: "#f9fcfd", color: "black" }}
        onClick={() => navigatePost("/post")}
      >
        Post my job
      </Button>
    </Container>
  );
}
