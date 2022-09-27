import { Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function PostCallToAction() {
  const navigatePost = useNavigate();

  return (
    <>
      <Button
        variant="contained"
        sx={{ backgroundColor: "#1976d2", color: "white" }}
        onClick={() => navigatePost("/post")}
      >
        Post my job
      </Button>
    </>
  );
}
