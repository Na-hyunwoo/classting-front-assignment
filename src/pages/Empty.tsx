import React from 'react'
import { Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/system';

const Empty = () => {

  const navigate = useNavigate();

  return (
    <Box>
      <Typography variant="h6" mt={20} mb={20} textAlign={"center"}>
        결과가 없습니다. 처음으로 돌아가주세요 ! 
      </Typography>
      <Button 
        onClick={() => {navigate("/")}} 
        variant="outlined"
      >Back To Home</Button>
    </Box>
  );
};

export default Empty;