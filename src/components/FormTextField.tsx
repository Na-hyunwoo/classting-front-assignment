import { FormControl, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'

const FormTextField = () => {

  const handleChange = () => {}

  return (
    <Box mt={3} width="100%">
      <FormControl fullWidth size="small">
        <TextField 
          onChange={handleChange}
          variant="outlined"
          label="Number of Questions"
          type="number"
          size="small"
        />
      </FormControl>
    </Box>
  );
};

export default FormTextField;