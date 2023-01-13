import React, { ReactElement } from "react";
import { Button, Typography } from "@mui/material";
import { decode } from "html-entities";
import { Box } from "@mui/system";

interface Props {
  questionIndex: number;
  question: string;
  options: Array<string>;
  selected: string,
  onClickAnswer: (arg0: string) => void;
  onClickNext: () => void
}

const QuestionItem = ({
  questionIndex, 
  question, 
  options, 
  selected,
  onClickAnswer,
  onClickNext
}: Props): ReactElement => {
  return (
    <>
      <Typography variant="h4" role="questionTitle">Questions {questionIndex + 1}</Typography>
      <Typography mt={5}>{decode(question)}</Typography>
      {options.map((option: string) => (
        <Box mt={2} key={option}>
          <Button 
            onClick={() => onClickAnswer(option)} 
            variant={selected === option ? "contained" : "outlined"}
          >{decode(option)}</Button>
        </Box>
      ))}
      {selected.length > 0 && <Box mt={10} textAlign={"right"}>
        <Button variant={"outlined"} onClick={onClickNext}>{`Next ->`}</Button>
      </Box>}
    </>
  );
};

export default QuestionItem;