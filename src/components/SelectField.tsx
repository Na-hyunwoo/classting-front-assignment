import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";
import React, { ReactElement, useState } from "react";
import { useRecoilState } from "recoil";
import { settingState } from "../store";

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
  const [settings, setSettings] = useRecoilState(settingState);

  // TODO: type 재정의하기 
  const handleChange = (e: any) => {
    setValue(e.target.value);
    switch(label) {
      case "Category":
        setSettings({
          ...settings, 
          category: e.target.value
        });
        break; 
      case "Difficulty":
        setSettings({
          ...settings, 
          difficulty: e.target.value
        });
        break; 
      case "Type":
        setSettings({
          ...settings, 
          question_type: e.target.value
        });
        break; 
      default: 
        return;
    }
  };

  return (
    <Box mt={3} width="100%">
      <FormControl size="small" fullWidth role={label}>
        <InputLabel>{label}</InputLabel>
        <Select required value={value} label={label} onChange={handleChange}>
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