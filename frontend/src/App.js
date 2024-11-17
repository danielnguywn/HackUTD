import React from "react";
import { Button, Typography, Container } from "@mui/material";

function App() {
  return (
    <Container className="bg-gray-100 p-8 rounded shadow-lg">
      <Typography
        variant="h4"
        className="text-center text-gray-800 font-bold mb-4"
      >
        Welcome to Material-UI + Tailwind CSS
      </Typography>
      <Button variant="contained" color="primary" className="w-full">
        Material-UI Button
      </Button>
      <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
        Tailwind CSS Button
      </button>
    </Container>
  );
}

export default App;
