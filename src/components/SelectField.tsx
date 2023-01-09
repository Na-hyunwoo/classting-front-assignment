import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";
import React, { ReactElement, useState } from "react";

interface OptionType {
  id: number | string, 
  name: string,
}

interface Props {
  label: string;
  options: OptionType[];
};

const SelectField = ({ label, options } : Props): ReactElement => {

  const [value, setValue] = useState<string>("");

  // TODO: type 재정의하기 
  const handleChange = (e: any) => {
    console.log(e);
    setValue(e.target.value);
  };

  return (
    <Box mt={3} width="100%">
      <FormControl size="small" fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select value={value} label={label} onChange={handleChange}>
          {options.map(({id, name}: OptionType) => (
            <MenuItem key={id} value={id}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectField;