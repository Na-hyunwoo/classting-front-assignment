import { FormControl, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { useRecoilState } from 'recoil';
import { settingState } from '../store';

const FormTextField = () => {

  const [settings, setSettings] = useRecoilState(settingState);

  // TODO: e type 바꾸기 
  const handleChange = (e: any) => {
    setSettings({
      ...settings, 
      number_of_question: e.target.value
    });
  };

  return (
    <Box mt={3} width="100%">
      <FormControl fullWidth size="small">
        <TextField 
          required
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