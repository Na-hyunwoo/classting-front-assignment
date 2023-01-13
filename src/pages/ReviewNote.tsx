import React from "react";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { COLORS } from "../styles";
import { decode } from "html-entities";

interface ProblemType {
  question: string,
  selected: string,
  answer: string,
}

const ReviewNote = () => {

  const navigate = useNavigate();
  const problems = JSON.parse(window.localStorage.getItem("reviewNotes") || "[]");

  return (
    <Box>
      <Button 
        style={{}}
        sx={{position: "absolute", top: "20px", left: "20px"}}
        variant="contained"
        onClick={() => navigate(-1)}
      >뒤로가기</Button>
      {problems.map((problem: ProblemType, index: number) => (
        <Box key={problem.question} mt={10}>
          <Typography variant="h4">{`Question ${index + 1}`}</Typography>
          <Typography>{`${decode(problem.question)}`}</Typography>
          <Typography sx={{color: COLORS[1]}} variant="h6">{`Your Answer: ${decode(problem.selected)}`}</Typography>
          <Typography sx={{color: COLORS[0]}} variant="h6">{`Correct Answer: ${decode(problem.answer)}`}</Typography>
        </Box>
      ))}
    </Box>
  )
}

export default ReviewNote