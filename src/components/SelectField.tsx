import { FormControl, InputLabel, MenuItem, NativeSelect, Select } from "@mui/material";
import { Box } from "@mui/system";
import React, { ReactElement, useEffect, useState } from "react";
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
    <Box mt={6} width="100%">
      <FormControl size="small" fullWidth>
        <h3
          style={{position: "absolute", margin: "0px", top: "-30px"}}
        >
          <label 
            htmlFor={label}
          >            
            {label}
          </label>
        </h3>        
        <NativeSelect 
          required 
          value={value} 
          onChange={handleChange} 
          inputProps={{
            name: label,
            id: label,
          }}
          role={label}
          >
          {options.map(({id, name}: OptionType) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </Box>
  );
};

export default SelectField;