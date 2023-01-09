import React, { ReactElement, useEffect, useState } from "react";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRecoilState } from "recoil";
import { useAxios } from "../hooks";
import { settingState } from "../store"
import { SettingType } from "../types";
import Loading from "./Loading";
import { getRandomInt } from "../utils";
import { useNavigate } from "react-router-dom";
import { decode } from "html-entities";



const Question = (): ReactElement => {
  const [settings, setSettings] = useRecoilState<SettingType>(settingState);
  
  const apiUrl = `/api.php?`
    .concat(`amount=${settings.number_of_question}`)
    .concat(`&category=${settings.category}`)
    .concat(`&difficulty=${settings.difficulty}`)
    .concat(`&type=${settings.question_type}`);

  const { response, loading } = useAxios({ url: apiUrl });

  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [options, setOptions] = useState<Array<string>>([]);
  const [score, setScore] = useState<number>(0);

  const navigate = useNavigate();

  // TODO: type 변경
  const handleClickAnswer = (e: any) => {
    const question = response.results[questionIndex];

    if (e.target.textContent === question.correct_answer) {
      setScore(prev => prev + 1);
    }

    if (questionIndex + 1 < response.results.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      navigate(`/result`);
    }
  };

  useEffect(() => {
    if (response.results?.length) {
      const question = response.results[questionIndex];
      let answers = [...question.incorrect_answers];
      answers.splice(
        getRandomInt(question.incorrect_answers.length),
        0,
        question.correct_answer
      );
      setOptions(answers);
    }
  }, [response, questionIndex]);

  useEffect(() => {
    window.localStorage.setItem("score", JSON.stringify(score));
  }, [score]);

  if (loading) { return (<Loading />); }

  return (
    <Box>
      <Typography variant="h4">Questions {questionIndex + 1}</Typography>
      <Typography mt={5}>{decode(response.results[questionIndex].question)}</Typography>
      {options.map((data) => (
        <Box mt={2} key={data}>
          <Button 
            onClick={handleClickAnswer} 
            variant="contained"
          >{decode(data)}</Button>
        </Box>
      ))}
      <Box mt={5}>
        {`Score: ${score} / ${response.results.length}`}
      </Box>
    </Box>
  );
};

export default Question;