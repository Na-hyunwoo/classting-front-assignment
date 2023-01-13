import React from "react";
import { Box, Container } from "@mui/system";
import { Outlet } from "react-router-dom";

const Framework = () => {
  return (
    <Container maxWidth="sm">
      <Box textAlign="center">
        <Outlet />
      </Box>
    </Container>
  );
};

export default Framework;