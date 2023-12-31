import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function Renderingcomponents() {
  const mealFood = async (query) => {
    try {
      const foodApi =
        "https://www.themealdb.com/api/json/v1/1/search.php?s={query}";
      const foodApiConvrt = await fetch(foodApi);
      const response = foodApiConvrt.json();
      //   console.log(response);
    } catch {
      throw new Error("!oops ");
    }
    // last stopsed of the functions
  };

  mealFood();
  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="md">
          <Box sx={{ bgcolor: "#000000", height: "50vh" }} />
    
        </Container>

      </React.Fragment>
    </>
  );
}
