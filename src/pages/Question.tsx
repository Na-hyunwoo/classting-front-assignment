import React, { ReactElement, useEffect, useState } from "react";
import { Box } from "@mui/system";
import { useRecoilState } from "recoil";
import { useAxios } from "../hooks";
import { settingState } from "../store"
import { SettingType } from "../types";
import Loading from "./Loading";
import { getRandomInt } from "../utils";
import { useNavigate } from "react-router-dom";
import { Modal, QuestionItem } from "../components";
import Empty from "./Empty";
import { AnimatePresence } from "framer-motion";

const Question = (): ReactElement => {
  const [settings, setSettings] = useRecoilState<SettingType>(settingState);
  
  const apiUrl = `/api.php?`
    .concat(`amount=${settings.number_of_question}`)
    .concat(`&category=${settings.category}`)
    .concat(`&difficulty=${settings.difficulty}`)
    .concat(`&type=${settings.question_type}`);

  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [options, setOptions] = useState<Array<string>>([]);
  const [score, setScore] = useState<number>(0);
  const [selected, setSelected] = useState<string>("");
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [isAnswer, setIsAnswer] = useState<boolean>(false);

  const navigate = useNavigate();
  const { response, loading } = useAxios({ url: apiUrl });

  const handleClickAnswer = (option: string) => {
    setSelected(option);
  };

  const handleClickNext = () => {
    const question = response.results[questionIndex];

    if (selected === question.correct_answer) {
      setIsAnswer(true);
      setScore(prev => prev + 1);
    } else {
      setIsAnswer(false);
    }

    setSelected("");

    if (questionIndex + 1 < response.results.length) {
      setModalOpen(true);
    } else {
      window.localStorage.setItem("endTime", JSON.stringify(Date.now()));
      navigate(`/result`);
    }
  };

  useEffect(() => {
    if (modalOpen) {
      const timer = setTimeout(
        () => { setModalOpen(false) }
        , 1000);

      setQuestionIndex(questionIndex + 1);
      
      return (() => clearTimeout(timer));
    }
  }, [modalOpen]);
  

  useEffect(() => {
    if (response.results?.length) {
      const question = response.results[questionIndex];
      let _options = [...question.incorrect_answers];
      _options.splice(
        getRandomInt(question.incorrect_answers.length),
        0,
        question.correct_answer
      );
      setOptions(_options);
    }
  }, [response, questionIndex]);

  useEffect(() => {
    window.localStorage.setItem("score", JSON.stringify(score));
  }, [score]);

  if (loading) { return (<Loading />); }
  if (response.response_code === 1) { return (<Empty />)}

  return (
    <Box mt={10}>
      <QuestionItem 
        questionIndex={questionIndex}
        question={response?.results[questionIndex]?.question}
        options={options}
        selected={selected}
        onClickAnswer={handleClickAnswer}
        onClickNext={handleClickNext}
      />      
      <AnimatePresence
        initial={false}
        onExitComplete={() => null}
      >
        {modalOpen && (
          <Modal 
            text={isAnswer ? "정답입니다." : "오답입니다."} 
            handleClose={() => setModalOpen(false)} 
          />
        )}
      </AnimatePresence>
    </Box>
  );
};

export default Question;