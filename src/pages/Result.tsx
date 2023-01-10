import React, { ReactElement } from "react";
import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { settingState } from "../store";
import { Cell, Pie, PieChart } from "recharts";
import { CustomizedLabel } from "../components";
import { COLORS } from "../styles";

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
    <Box>
      <PieChart width={400} height={350}>
        <Pie
          data={data}
          cx={275}
          cy={200}
          labelLine={false}
          label={CustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <Typography 
        variant="h5" 
        fontWeight="bold" 
        mb={3}
      >맞힌 문제 개수: {score}</Typography>
      <Typography 
        variant="h5" 
        fontWeight="bold" 
        mb={3}
      >틀린 문제 개수: {wrong}</Typography>
      <Typography 
        variant="h5" 
        fontWeight="bold" 
        mb={3}
      >총 걸린 시간: {viewOfTime}</Typography>
      <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
        <Button 
          variant={"contained"}
          size="large"
          onClick={() => { navigate("/reviewNote") }}
        >오답 노트</Button>   
        <Button 
          onClick={() => { navigate("/") }} 
          variant="outlined"
        >Back To Home</Button>
      </div>      
    </Box>
  );
};

export default Result;