import React, { ReactElement } from "react";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { settingState } from "../store";
import { Pie, PieChart } from "recharts";

const Result = (): ReactElement => {

  const score = Number(window.localStorage.getItem("score"));
  const navigate = useNavigate();
  const setting = useRecoilValue(settingState);
  const wrong = Number(setting.number_of_question) - score;

  const startTime = JSON.parse(window.localStorage.getItem("startTime") ?? "");
  const endTime = JSON.parse(window.localStorage.getItem("endTime") ?? "");
  const timeTaken = ~~((endTime - startTime) / 1000);
  const viewOfTime = timeTaken > 60 
    ? `${~~(timeTaken / 60)}분 ${timeTaken - (timeTaken / 60) * 60 }초`
    : `${timeTaken}초`;
  
  const data = [
    {
      "name": "Answer",
      "value": score
    },
    {
      "name": "Wrong",
      "value": wrong,
    }
  ];

  return (
    <Box mt={20}>

      <Typography 
        variant="h5" 
        fontWeight="bold" 
        mb={3}
      >맞힌 문제 개수: {score}</Typography>
      <Typography 
        variant="h5" 
        fontWeight="bold" 
        mb={3}
      >틀린 문제 개수: {Number(setting.number_of_question) - Number(score)}</Typography>
      <Typography 
        variant="h5" 
        fontWeight="bold" 
        mb={3}
      >총 걸린 시간: {viewOfTime}</Typography>
      <Button 
        onClick={() => {navigate("/")}} 
        variant="outlined"
      >Back To Home</Button>
    </Box>
  );
};

export default Result;