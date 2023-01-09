import React from 'react';
import { Box, Container } from '@mui/system';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Question, Result, Setting } from "./pages";

function App() {
  return (
    <Router>
      <Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
          <Routes>
            <Route path="/" element={<Setting />} />
            <Route path="/question" element={<Question />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </Box>        
      </Container>      
    </Router>
  );
}

export default App;
