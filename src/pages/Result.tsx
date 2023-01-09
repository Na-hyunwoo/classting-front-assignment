import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { settingState } from "../store";
import { SettingType } from "../types";

const Result = (): ReactElement => {

  const score = window.localStorage.getItem("score");

  const setSettings = useSetRecoilState<SettingType>(settingState);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <Box mt={30}>
      <Typography 
        variant="h3" 
        fontWeight="bold" 
        mb={3}
      >Result: {score}</Typography>
      <Button onClick={handleClick} variant="outlined">Back To Home</Button>
    </Box>
  );
};

export default Result;