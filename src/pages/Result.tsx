import React, { ReactElement } from "react";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

const Result = (): ReactElement => {

  const score = window.localStorage.getItem("score");
  const navigate = useNavigate();

  return (
    <Box mt={30}>
      <Typography 
        variant="h3" 
        fontWeight="bold" 
        mb={3}
      >Result: {score}</Typography>
      <Button 
        onClick={() => {navigate("/")}} 
        variant="outlined"
      >Back To Home</Button>
    </Box>
  );
};

export default Result;