import React from "react";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { COLORS } from "../styles";
import { decode } from "html-entities";


// 오답노트 기능이라고 하면.. 
// result page에서 오답노트 버튼을 누르면 새로운 페이지로 향하는거지. 
// 그러면 새로운 페이지에서는 여태까지 틀린 문제들을 저장하고 있는거야. 
// 여기서 localStorage를 사용하는거지. 
// 그래서 문제를 틀릴때마다, localStorage에 추가해서, 그걸 보여주는거임. 
// 이렇게까지 구현하고 테스트코드 짜고 제출하면 될것같다. 

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
          <Typography sx={{color: COLORS[0]}} variant="h6">{`Your Answer: ${decode(problem.selected)}`}</Typography>
          <Typography sx={{color: COLORS[1]}} variant="h6">{`Correct Answer: ${decode(problem.answer)}`}</Typography>
        </Box>
      ))}
    </Box>
  )
}

export default ReviewNote