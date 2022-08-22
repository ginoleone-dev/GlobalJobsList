import React from "react";
import { Button, Container } from "@mui/material";

export default function Buttons({ button, filter, loaded }) {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        maxWidth: { xs: "400px", sm: "500px", lg: "600px" },
        maxHeight: "150px",
      }}
    >
      {loaded &&
        button.map((field, index) => {
          return (
            <Button
              key={index}
              sx={{
                minWidth: { xs: "20px", sm: "60px" },
                marginLeft: "2.5px",
                marginRight: "2.5px",
                maxHeight: "60px",
                backgroundColor: "#1976d2",
                color: "white",
                mb: "8px",
                fontSize: {
                  xs: "0.6rem",
                  sm: "0.8rem",
                  md: "0.8rem",
                },
              }}
              // className="newButt"
              type="button"
              variant="Secondary"
              onClick={() => filter(field)}
            >
              {field}
            </Button>
          );
        })}
    </Container>
  );
}
